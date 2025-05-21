"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Hi, I'm <span className="text-primary">Yuvaraj M</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
              ECE Graduate & Entry-Level Software & Electronics Engineer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Motivated and adaptable Electronics and Communication Engineering graduate with strong interest in both
              software development and embedded systems. Eager to apply technical skills in real-world IT or core
              engineering roles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:yuvarajj2486@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img src="/images/profile.png" alt="Yuvaraj M" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
