"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            My academic background and qualifications in Electronics and Communication Engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Sathyabama University</h3>
                  <p className="text-muted-foreground mb-2">Chennai, Tamilnadu, India</p>
                  <p className="font-medium">Electronics and Communication Engineering</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-muted-foreground">CGPA: 8.48</p>
                  </div>
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm">
                      Completed a comprehensive curriculum covering electronics, communication systems, signal
                      processing, microcontrollers, and programming fundamentals. Developed strong analytical and
                      problem-solving skills through practical laboratory work and projects.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
