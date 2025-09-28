"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { education, certifications } from "@/lib/data"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"
import { SectionWrapper } from "./section-wrapper"

export function Education() {
  return (
    <SectionWrapper id="education" className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">
            Education & Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic background in bioinformatics and certifications
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Education */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 flex items-center font-display"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GraduationCap className="w-6 h-6 mr-3 text-indigo-500" />
              Education
            </motion.h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-card hover-lift">
                    <CardHeader>
                      <CardTitle className="text-xl font-display">
                        {edu.degree}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="font-medium">{edu.school}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6 flex items-center font-display"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Award className="w-6 h-6 mr-3 text-yellow-500" />
              Certifications
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-card hover-lift h-full">
                    <CardHeader>
                      <CardTitle className="text-lg font-display">
                        {cert.name}
                      </CardTitle>
                      <div className="text-gray-600">
                        <p className="font-medium">{cert.issuer}</p>
                        <p className="text-sm">ID: {cert.credential}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Obtained in {cert.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
