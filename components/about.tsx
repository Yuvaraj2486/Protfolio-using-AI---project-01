"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Cpu } from "lucide-react"

export function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 * index },
    }),
  }

  const strengths = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Software Development",
      description: "Proficient in web technologies and programming fundamentals with hands-on project experience.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Electronics Engineering",
      description: "Strong foundation in ECE with practical knowledge of microcontrollers and embedded systems.",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Quick Learner",
      description: "Adaptable mindset with a passion for continuous learning and improvement in technical skills.",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Motivated and adaptable Electronics and Communication Engineering graduate with strong interest in both
            software development and embedded systems. Equipped with foundational knowledge in Python, SQL, and web
            development along with exposure to microcontrollers like Arduino and Raspberry Pi through academic projects.
            Eager to apply technical skills in real-world IT or core engineering roles, with a quick-learning mindset
            and continuous improvement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{strength.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                  <p className="text-muted-foreground">{strength.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
