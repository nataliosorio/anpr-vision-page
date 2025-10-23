"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { AnprDemo } from "./anpr-demo"

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 mesh-gradient z-0" />

      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 scale-75">
          <AnprDemo />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sistema de <span className="gradient-text">Reconocimiento Automático</span> de Matrículas
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Gestión inteligente de parqueaderos con tecnología OCR avanzada. Automatiza el control de acceso, optimiza
          espacios y mejora la seguridad.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
             className="bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/50"

              onClick={() => window.open("http://localhost:4200/", "_blank")}
            >
              Ir al Proyecto de Reconocimiento 🚗
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" className="border-cyan-500/50 hover:bg-cyan-500/10 bg-transparent">
              <Link href="#como-funciona">Cómo Funciona</Link>
            </Button>
          </motion.div>

          {/* 🔽 Nuevo botón que abre el otro proyecto */}
          
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Link href="#introduccion">
          <ChevronDown className="h-8 w-8 text-foreground/60" />
        </Link>
      </motion.div>
    </div>
  )
}
