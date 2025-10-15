"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type Node = {
  position: THREE.Vector3;
};

type Connection = {
  a: number;
  b: number;
  baseIntensity: number; // baseline brightness
  pulsePhase: number; // 0..1 progress through a pulse
  pulseSpeed: number; // speed multiplier
};

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

function NeuralNetworkScene() {
  // Tunables kept conservative for perf
  const nodeCount = 80;
  const spaceSize = 6; // cube from -size..size
  const connectDistance = 2.2;
  const maxConnections = 220;

  // Colors
  // Light cyan palette for a brighter, airier look
  const baseColor = useMemo(() => new THREE.Color("#7EE8FA"), []);
  const pulseColor = useMemo(() => new THREE.Color("#E0FBFF"), []);

  // Mouse and scroll interactivity
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const scrollY = useRef(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouse.current.set(x, y);
    };
    const handleScroll = () => {
      scrollY.current = window.scrollY || 0;
    };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Generate node positions
  const nodes: Node[] = useMemo(() => {
    const list: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const p = new THREE.Vector3(
        THREE.MathUtils.mapLinear(Math.random(), 0, 1, -spaceSize, spaceSize),
        THREE.MathUtils.mapLinear(Math.random(), 0, 1, -spaceSize, spaceSize),
        THREE.MathUtils.mapLinear(Math.random(), 0, 1, -spaceSize, spaceSize)
      );
      list.push({ position: p });
    }
    return list;
  }, [nodeCount, spaceSize]);

  // Build connections based on distance threshold with cap
  const connections = useMemo<Connection[]>(() => {
    const cons: Connection[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = nodes[i].position.distanceTo(nodes[j].position);
        if (d < connectDistance) {
          cons.push({
            a: i,
            b: j,
            baseIntensity: THREE.MathUtils.randFloat(0.1, 0.35),
            pulsePhase: Math.random(),
            pulseSpeed: THREE.MathUtils.randFloat(0.15, 0.45),
          });
          if (cons.length >= maxConnections) break;
        }
      }
      if (cons.length >= maxConnections) break;
    }
    return cons;
  }, [nodes, connectDistance, maxConnections]);

  // Lines geometry (one LineSegments for efficiency)
  const linesGeomRef = useRef<THREE.BufferGeometry>(new THREE.BufferGeometry());
  const lineMaterialRef = useRef<THREE.LineBasicMaterial>(
    new THREE.LineBasicMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      linewidth: 1, // ignored in most WebGL impls, but kept
      vertexColors: true,
      opacity: 0.5,
    })
  );

  // Per-connection pulse state stored separately for CPU updates
  const connIntensity = useRef<Float32Array>(new Float32Array(connections.length));

  // Initialize line positions and per-vertex colors (colors updated each frame)
  useEffect(() => {
    const positions = new Float32Array(connections.length * 2 * 3);
    const colors = new Float32Array(connections.length * 2 * 3);

    for (let i = 0; i < connections.length; i++) {
      const { a, b } = connections[i];
      const pa = nodes[a].position;
      const pb = nodes[b].position;
      const idx = i * 6;
      positions[idx + 0] = pa.x;
      positions[idx + 1] = pa.y;
      positions[idx + 2] = pa.z;
      positions[idx + 3] = pb.x;
      positions[idx + 4] = pb.y;
      positions[idx + 5] = pb.z;

      // initialize colors; softer baseline
      colors[idx + 0] = baseColor.r * 0.4;
      colors[idx + 1] = baseColor.g * 0.4;
      colors[idx + 2] = baseColor.b * 0.4;
      colors[idx + 3] = baseColor.r * 0.4;
      colors[idx + 4] = baseColor.g * 0.4;
      colors[idx + 5] = baseColor.b * 0.4;
    }

    linesGeomRef.current.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const colorAttr = new THREE.BufferAttribute(colors, 3);
    colorAttr.setUsage(THREE.DynamicDrawUsage);
    linesGeomRef.current.setAttribute("color", colorAttr);
    linesGeomRef.current.computeBoundingSphere();

    // initialize intensities
    for (let i = 0; i < connections.length; i++) connIntensity.current[i] = connections[i].baseIntensity;
  }, [connections, nodes, baseColor]);

  // Instanced nodes (small emissive spheres)
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const halosRef = useRef<THREE.InstancedMesh>(null);
  const tempObj = useMemo(() => new THREE.Object3D(), []);
  const nodeBaseScale = 0.035;

  useEffect(() => {
    if (!nodesRef.current) return;
    for (let i = 0; i < nodes.length; i++) {
      const p = nodes[i].position;
      tempObj.position.copy(p);
      tempObj.scale.setScalar(nodeBaseScale);
      tempObj.updateMatrix();
      nodesRef.current.setMatrixAt(i, tempObj.matrix);
    }
    nodesRef.current.instanceMatrix.needsUpdate = true;

    // halos are slightly larger
    if (halosRef.current) {
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i].position;
        tempObj.position.copy(p);
        tempObj.scale.setScalar(nodeBaseScale * 2.2);
        tempObj.updateMatrix();
        halosRef.current.setMatrixAt(i, tempObj.matrix);
      }
      halosRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [nodes, tempObj]);

  // Animation
  useFrame((state, delta) => {
    // gentle float
    const t = state.clock.elapsedTime;

    // group tilt from mouse, parallax from scroll
    if (groupRef.current) {
      const tiltX = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.current.y * -0.15, 0.05);
      const tiltY = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.current.x * 0.2, 0.05);
      groupRef.current.rotation.x = tiltX;
      groupRef.current.rotation.y = tiltY;

      const targetY = THREE.MathUtils.clamp(-scrollY.current * 0.0008, -0.6, 0.6);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
    }

    // Update connection pulses
    const colorAttr = linesGeomRef.current.getAttribute("color") as THREE.BufferAttribute;
    if (colorAttr) {
      for (let i = 0; i < connections.length; i++) {
        const c = connections[i];
        // Random chance to kick a pulse
        if (Math.random() < 0.005) c.pulsePhase = 0;
        c.pulsePhase = (c.pulsePhase + delta * c.pulseSpeed) % 1;

        // Pulse shape: smooth in/out
        const pulse = Math.sin(c.pulsePhase * Math.PI);
        const intensity = clamp(c.baseIntensity + pulse * 0.8, 0, 1);
        connIntensity.current[i] = intensity;

        // Interpolate between base and pulse colors
        const r = THREE.MathUtils.lerp(baseColor.r * 0.2, pulseColor.r, intensity);
        const g = THREE.MathUtils.lerp(baseColor.g * 0.2, pulseColor.g, intensity);
        const b = THREE.MathUtils.lerp(baseColor.b * 0.2, pulseColor.b, intensity);

        const idx = i * 6;
        colorAttr.array[idx + 0] = r;
        colorAttr.array[idx + 1] = g;
        colorAttr.array[idx + 2] = b;
        colorAttr.array[idx + 3] = r;
        colorAttr.array[idx + 4] = g;
        colorAttr.array[idx + 5] = b;
      }
      colorAttr.needsUpdate = true;
    }

    // Keep node color stable to avoid perceived flicker from line pulses
    if (nodesRef.current) {
      const material = nodesRef.current.material as THREE.MeshBasicMaterial;
      material.color.set(baseColor);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lines */}
      <lineSegments geometry={linesGeomRef.current} renderOrder={0}>
        <primitive object={lineMaterialRef.current} attach="material" />
      </lineSegments>

      {/* Nodes core */}
      <instancedMesh
        ref={nodesRef}
        args={[undefined as any, undefined as any, nodeCount]}
        frustumCulled={false}
        renderOrder={2}
      >
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial
          color={baseColor}
          transparent
          opacity={1}
          blending={THREE.NormalBlending}
          depthWrite={true}
          depthTest={true}
        />
      </instancedMesh>

      {/* Soft glow halos */}
      <instancedMesh
        ref={halosRef}
        args={[undefined as any, undefined as any, nodeCount]}
        frustumCulled={false}
        renderOrder={1}
      >
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial
          color={baseColor}
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          depthTest={true}
        />
      </instancedMesh>

      {/* Subtle backdrop gradient plane for futuristic feel */}
      <mesh position={[0, 0, -8]}>
        <planeGeometry args={[40, 40]} />
        <meshBasicMaterial>
          <Html
            prepend
            center
            style={{ width: 0, height: 0, opacity: 0 }}
          />
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}

export default function NeuralNetworkBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 10], fov: 60 }}
      >
        <NeuralNetworkScene />
      </Canvas>
      {/* Tailwind CSS glow overlay (subtle vignette) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(126,232,250,0.12)_0%,transparent_55%)]" />
    </div>
  );
}


