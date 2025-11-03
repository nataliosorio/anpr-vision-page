"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Camera, Cpu, Database, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { AnprDemo } from "./anpr-demo";

export function HowItWorks() {
  const steps = [
    {
      icon: Camera,
      title: "1. Captura de Imagen",
      description:
        "La cámara captura la imagen del vehículo al ingresar o salir del parqueadero.",
      details:
        "Compatible con cámaras móviles (fase inicial) y cámaras IP fijas (implementación futura).",
    },
    {
      icon: Cpu,
      title: "2. Procesamiento OCR",
      description:
        "El microservicio OCR analiza la imagen y extrae los caracteres de la matrícula.",
      details:
        "Implementado con modelos de visión artificial entrenados para reconocimiento preciso.",
    },
    {
      icon: Database,
      title: "3. Registro en Sistema",
      description:
        "Los datos se almacenan en la base de datos con fecha, hora y cámara de origen.",
      details:
        "Arquitectura N-Capas con Entity Framework Core para gestión eficiente y segura.",
    },
    {
      icon: CheckCircle,
      title: "4. Validación y Acción",
      description:
        "El sistema valida la información y ejecuta las acciones correspondientes.",
      details:
        "Cálculo de tarifas, verificación de listas negras, alertas y actualización de disponibilidad.",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none" />

      {/* Encabezado */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          ¿Cómo{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 animate-gradient">
            Funciona
          </span>
          ?
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          El proceso de reconocimiento automático de matrículas se realiza en
          cuatro pasos simples, eficientes y totalmente automatizados.
        </p>
      </motion.div>

      {/* Demostración interactiva */}
      <motion.div
        className="relative z-10 mb-20 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Demostración{" "}
          <span className="gradient-text">Interactiva</span>
        </h3>

        <div className="relative w-full max-w-3xl">
          <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl rounded-3xl animate-pulse" />
          <div className="relative glass-card rounded-2xl p-8 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
            <AnprDemo />
          </div>
        </div>
      </motion.div>

      {/* Pasos del proceso */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Línea de conexión (solo visible en pantallas grandes) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-green-500/20 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group relative h-full rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                {/* Glow dinámico */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-2xl transition-opacity duration-700" />

                <CardContent className="relative z-10 p-6 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-4 shadow-lg shadow-cyan-500/40"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{step.description}</p>
                  <p className="text-xs text-gray-400 italic">{step.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Arquitectura del sistema */}
      <motion.div
        className="relative z-10 mt-20 p-10 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-800/40 to-slate-900/40 shadow-lg shadow-cyan-500/10 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-white">
          Arquitectura del Sistema
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 text-center">
          <div>
            <h4 className="font-semibold text-cyan-400 mb-2">
              Capa de Presentación
            </h4>
            <p className="text-sm leading-relaxed">
              Interfaz web responsiva con dashboard administrativo y consultas
              de usuarios.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-400 mb-2">
              Capa de Negocio
            </h4>
            <p className="text-sm leading-relaxed">
              Lógica de validación, cálculo de tarifas, gestión de alertas y
              reglas de negocio.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-400 mb-2">
              Capa de Datos
            </h4>
            <p className="text-sm leading-relaxed">
              Acceso a base de datos con Entity Framework Core y microservicio
              OCR independiente.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
