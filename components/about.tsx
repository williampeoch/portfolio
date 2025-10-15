"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profile } from "@/lib/data"
import { SectionWrapper } from "./section-wrapper"

export function About() {

  return (
    <SectionWrapper id="about" className="bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display gradient-text">
            About Me
          </h2>
        </motion.div>

        <Card variant="neumorphism" className="hover-lift">
          <CardHeader>
            <CardTitle className="text-2xl font-display gradient-text">Presentation</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.p
              className="text-gray-700 leading-relaxed text-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {profile.about}
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}
