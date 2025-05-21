"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart2, Brain, Code, ExternalLink, ShoppingCart } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "HR Attrition Analysis Dashboard",
      description:
        "Developed an interactive Power BI dashboard to track overall attrition, attrition rate, and active employee count. Visualized department-wise employee trends using DAX measures, slicers, and dynamic charts for HR insights.",
      icon: <BarChart2 className="h-10 w-10 text-primary" />,
      tags: ["Power BI", "DAX", "Data Analysis", "Visualization"],
      link: "#",
    },
    {
      title: "Brain Tumor Detection & Classification System",
      description:
        "Developed a MATLAB GUI application for automated brain tumor detection using advanced image processing. Enhanced diagnostic accuracy with optimized algorithms and an intuitive user interface.",
      icon: <Brain className="h-10 w-10 text-primary" />,
      tags: ["MATLAB", "Image Processing", "GUI", "Classification"],
      link: "#",
    },
    {
      title: "Responsive Grocery Shopping Website",
      description:
        "Developed a responsive grocery website with product listings and cart using HTML, CSS, and JavaScript. Optimized user experience through seamless navigation and mobile-friendly interface.",
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "#",
    },
    {
      title: "Real-Time Obstacle Detection Using Raspberry Pi 5",
      description:
        "Developed Python-based image processing algorithms on Raspberry Pi 5 for robot obstacle detection. Integrated ESP32 camera for real-time navigation in dynamic environments.",
      icon: <Code className="h-10 w-10 text-primary" />,
      tags: ["Python", "Raspberry Pi", "ESP32", "Image Processing"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            A showcase of my technical projects spanning web development, data analysis, and embedded systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">{project.icon}</div>
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="ml-auto" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
