"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NeuralNetworkBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}

