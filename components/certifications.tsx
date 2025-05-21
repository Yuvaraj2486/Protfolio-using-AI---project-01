"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Briefcase } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      title: "Aip Conference MSMAT",
      organization: "Best paper award in the technical session",
      date: "February 2025",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "BSNL Data Networking",
      organization: "Internship",
      date: "August 2023",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <section id="certifications" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications & Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Professional certifications and internship experience that have enhanced my skills and knowledge.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">{cert.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{cert.title}</h3>
                      <p className="text-muted-foreground">{cert.organization}</p>
                      <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
