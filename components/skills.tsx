"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/lib/data"
import { Code, Server, Wrench, Globe } from "lucide-react"
import { SectionWrapper } from "./section-wrapper"

export function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Code,
      skills: skills.ai_ml,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Bioinformatics",
      icon: Server,
      skills: skills.bioinformatics,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Programming",
      icon: Wrench,
      skills: skills.programming,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Technologies",
      icon: Globe,
      skills: skills.tools,
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technical skills in AI, bioinformatics and development for innovative projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card hover-lift h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-display">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-3`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="glass"
                        className="hover-lift cursor-default"
                      >
                        {skill}
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
