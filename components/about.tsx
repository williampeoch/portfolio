"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profile } from "@/lib/data"
import { SectionWrapper } from "./section-wrapper"

export function About() {

  return (
    <SectionWrapper id="about" className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">
            About Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover my background, passions and vision for web development
          </p>
        </motion.div>

        <Card className="glass-card hover-lift">
          <CardHeader>
            <CardTitle className="text-2xl font-display">Presentation</CardTitle>
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
