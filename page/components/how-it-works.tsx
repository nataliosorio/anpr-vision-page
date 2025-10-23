"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Camera, Cpu, Database, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { AnprDemo } from "./anpr-demo"

export function HowItWorks() {
  const steps = [
    {
      icon: Camera,
      title: "1. Captura de Imagen",
      description: "La cámara captura la imagen del vehículo al ingresar o salir del parqueadero.",
      details: "Compatible con cámaras móviles (fase inicial) y cámaras IP fijas (implementación futura).",
    },
    {
      icon: Cpu,
      title: "2. Procesamiento OCR",
      description: "El microservicio de OCR procesa la imagen y extrae los caracteres de la matrícula.",
      details: "Utiliza algoritmos avanzados de visión artificial para reconocimiento preciso.",
    },
    {
      icon: Database,
      title: "3. Registro en Sistema",
      description: "Los datos se almacenan en la base de datos con fecha, hora y cámara de origen.",
      details: "Arquitectura N-Capas con Entity Framework Core para gestión eficiente de datos.",
    },
    {
      icon: CheckCircle,
      title: "4. Validación y Acción",
      description: "El sistema valida la información y ejecuta las acciones correspondientes.",
      details:
        "Cálculo de tarifas, verificación de listas negras, generación de alertas y actualización de disponibilidad.",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Cómo <span className="gradient-text">Funciona</span>?
        </h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          El proceso de reconocimiento automático de matrículas se realiza en cuatro pasos simples y eficientes.
        </p>
      </motion.div>

      <motion.div
        className="mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Demostración <span className="gradient-text">Interactiva</span>
        </h3>
        <div className="glass-card p-8 rounded-2xl">
          <AnprDemo />
        </div>
      </motion.div>

      <div className="relative">
        {/* Connection line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/40 to-green-500/20 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="card-hover h-full glass-card">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-4 shadow-lg shadow-cyan-500/50"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-foreground/80 mb-3">{step.description}</p>
                  <p className="text-sm text-foreground/60 italic">{step.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-16 p-8 bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-lg border border-green-500/20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">Arquitectura del Sistema</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h4 className="font-medium text-primary mb-2">Capa de Presentación</h4>
            <p className="text-sm text-foreground/80">
              Interfaz web responsiva con dashboard administrativo y consultas para usuarios.
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-primary mb-2">Capa de Negocio</h4>
            <p className="text-sm text-foreground/80">
              Lógica de validación, cálculo de tarifas, gestión de alertas y reglas de negocio.
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-primary mb-2">Capa de Datos</h4>
            <p className="text-sm text-foreground/80">
              Acceso a base de datos con Entity Framework Core y microservicio OCR independiente.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
