"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnprDemo } from "./anpr-demo";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 mesh-gradient opacity-40 animate-pulse"></div>

      {/* Contenedor centrado */}
      <div className="container relative z-10 mx-auto px-8 sm:px-12 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* ===== Columna izquierda ===== */}
        <div className="text-center md:text-left flex flex-col justify-center space-y-6">
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sistema de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 animate-gradient">
              Reconocimiento Automático
            </span>{" "}
            de Matrículas
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Gestión inteligente de parqueaderos con tecnología OCR avanzada.
            Automatiza el control de acceso, optimiza espacios y mejora la seguridad.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/40 text-white font-semibold px-8 py-3 rounded-xl transition-all"
                onClick={() => window.open("https://3.13.208.252/", "_blank")}
              >
                Iniciar Sesión
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="border border-cyan-400/40 bg-white/5 hover:bg-cyan-500/10 text-cyan-300 font-medium px-8 py-3 rounded-xl backdrop-blur-sm"
              >
                <Link href="#como-funciona">Cómo Funciona</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* ===== Columna derecha ===== */}
        <motion.div
          className="flex justify-center md:justify-center lg:justify-end relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] xl:w-[500px]">
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl rounded-3xl animate-pulse" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/20 backdrop-blur-md bg-white/5 p-4">
              <AnprDemo />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link href="#introduccion">
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </Link>
      </motion.div>
    </section>
  );
}
