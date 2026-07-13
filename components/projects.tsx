"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
import { Github } from "lucide-react"
import Link from "next/link"
import { SectionWrapper } from "./section-wrapper"

export function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display gradient-text">
            Selected ML Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projects selected for research depth, machine learning internals, and original modeling work.
          </p>
        </motion.div>

        {/* All Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="neumorphism" className="hover-lift h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-display">
                      {project.title}
                    </CardTitle>
                    {project.github && (
                      <Button variant="neumorphism" size="icon" asChild>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {project.hackathon && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-700 font-medium">
                        {project.hackathon}
                      </p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="neumorphism" className="hover-lift">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
