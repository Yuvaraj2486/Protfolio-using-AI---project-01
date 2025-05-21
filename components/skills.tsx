"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Skills() {
  const skillCategories = [
    {
      id: "web",
      name: "Web Development",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 70 },
        { name: "Node.js", level: 65 },
      ],
    },
    {
      id: "database",
      name: "Database",
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "MySQL", level: 75 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      id: "tools",
      name: "Tools & Others",
      skills: [
        { name: "Git", level: 75 },
        { name: "GitHub", level: 80 },
        { name: "REST API", level: 70 },
        { name: "Vercel", level: 65 },
        { name: "PowerBI", level: 75 },
      ],
    },
    {
      id: "ece",
      name: "ECE & Programming",
      skills: [
        { name: "Python", level: 80 },
        { name: "MATLAB", level: 75 },
        { name: "Microcontrollers", level: 70 },
        { name: "C", level: 65 },
        { name: "VHDL", level: 60 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            A comprehensive overview of my technical skills across various domains including web development, databases,
            tools, and electronics & communication engineering.
          </p>
        </motion.div>

        <Card className="border-none shadow-md">
          <CardContent className="p-6">
            <Tabs defaultValue="web" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-primary rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
