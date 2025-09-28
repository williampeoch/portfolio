"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { contact, languages, interests } from "@/lib/data"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, Globe, Heart } from "lucide-react"
import Link from "next/link"
import { SectionWrapper } from "./section-wrapper"

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">
            Contactez-moi
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recherche active de stage - Contactez-moi pour discuter d'opportunités
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card hover-lift h-full">
              <CardHeader>
                <CardTitle className="text-xl font-display">Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-indigo-500" />
                  <a href={`mailto:${contact.email}`} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-indigo-500" />
                  <a href={`tel:${contact.phone}`} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-indigo-500" />
                  <span className="text-gray-700 dark:text-gray-300">{contact.location}</span>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold mb-3">Réseaux sociaux</h4>
                  <div className="flex space-x-3">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={contact.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={contact.social.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={contact.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={contact.social.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages & Interests */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Languages */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-display">
                  <Globe className="w-5 h-5 mr-2 text-indigo-500" />
                  Langues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {languages.map((lang, index) => (
                    <div key={lang.name} className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{lang.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-display">
                  <Heart className="w-5 h-5 mr-2 text-indigo-500" />
                  Centres d'intérêt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm hover-lift"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 font-display">Recherche de stage</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Je recherche activement un stage en IA, bioinformatique ou biotechnologie. Discutons d'opportunités passionnantes !
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="gradient" size="lg" asChild>
                      <Link href={`mailto:${contact.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Envoyer un email
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href={contact.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
