"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function DownloadApp() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 mesh-gradient opacity-40 animate-pulse"></div>

      {/* Contenedor centrado */}
      <div className="container relative z-10 mx-auto px-8 sm:px-12 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* ===== Columna izquierda - Texto ===== */}
        <motion.div
          className="text-center md:text-left flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Descargar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 animate-gradient">
              Aplicación
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Escanea el código QR con tu dispositivo móvil para descargar la aplicación ANPR Vision y accede a todas las funcionalidades desde cualquier lugar.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Compatible con iOS y Android
          </motion.p>
        </motion.div>

        {/* ===== Columna derecha - QR Code ===== */}
        <motion.div
          className="flex justify-center md:justify-center lg:justify-end relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-blue-600/20 blur-3xl rounded-3xl animate-pulse" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/20 backdrop-blur-md bg-white/5 p-8">
              <div className="bg-white p-4 rounded-lg">
                <Image
                  src="/images/qr.png"
                  alt="QR Code - Descargar Aplicación ANPR Vision"
                  width={220}
                  height={160}
                  quality={100}
                  priority={false}
                //   className="w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
