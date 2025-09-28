"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/data"
import { Languages } from "lucide-react"
import { SectionWrapper } from "./section-wrapper"

export function About() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")

  return (
    <SectionWrapper id="about" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">
            À propos de moi
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mon parcours, mes passions et ma vision du développement web
          </p>
        </motion.div>

        <Card className="glass-card hover-lift">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-display">Présentation</CardTitle>
              <div className="flex items-center space-x-2">
                <Languages className="w-4 h-4 text-gray-500" />
                <div className="flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
                  <Button
                    variant={language === "fr" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage("fr")}
                    className="text-xs"
                  >
                    FR
                  </Button>
                  <Button
                    variant={language === "en" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage("en")}
                    className="text-xs"
                  >
                    EN
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <motion.p
              className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
              key={language}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {profile.about[language]}
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}
