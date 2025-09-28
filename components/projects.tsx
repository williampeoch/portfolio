"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"
import { SectionWrapper } from "./section-wrapper"

export function Projects() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <SectionWrapper id="projects" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">
            Mes Projets
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Projets d'IA, hackathons et applications bioinformatiques
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold mb-8 text-center font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-6 h-6 inline mr-2 text-yellow-500" />
            Projets en vedette
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card hover-lift h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-display">
                        {project.title}
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    {project.hackathon && (
                      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                          🏆 {project.hackathon}
                        </p>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="hover-lift">
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

        {/* Other Projects */}
        <div>
          <motion.h3
            className="text-2xl font-bold mb-8 text-center font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Autres projets
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card hover-lift h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg font-display">
                        {project.title}
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    {project.hackathon && (
                      <div className="mb-4 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                          🏆 {project.hackathon}
                        </p>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
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
      </div>
    </SectionWrapper>
  )
}
