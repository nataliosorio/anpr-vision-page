"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Camera, Cpu, Shield, Zap, Clock, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export function Introduction() {
  const features = [
    {
      icon: Camera,
      title: "Reconocimiento OCR",
      description:
        "Tecnología avanzada de reconocimiento óptico de caracteres para identificar placas vehiculares automáticamente.",
    },
    {
      icon: Zap,
      title: "Procesamiento Rápido",
      description: "Captura y procesamiento de matrículas en tiempo real para un acceso fluido y sin demoras.",
    },
    {
      icon: Shield,
      title: "Seguridad Mejorada",
      description: "Control de acceso automatizado con listas negras y registro completo de entradas y salidas.",
    },
    {
      icon: Clock,
      title: "Gestión de Tiempo",
      description: "Cálculo automático de permanencia y tarifas según tipo de vehículo y horario.",
    },
    {
      icon: BarChart3,
      title: "Reportes Detallados",
      description: "Análisis y estadísticas en tiempo real sobre ocupación, ingresos y patrones de uso.",
    },
    {
      icon: Cpu,
      title: "Arquitectura Escalable",
      description: "Sistema modular basado en microservicios, preparado para crecer con tu negocio.",
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
          ¿Qué es <span className="gradient-text">ANPR-VISION</span>?
        </h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          ANPR-VISION es un sistema inteligente de gestión de parqueaderos que utiliza reconocimiento automático de
          matrículas (ANPR) mediante tecnología OCR para automatizar y optimizar el control de acceso vehicular.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="card-hover h-full bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-500/20">
              <CardContent className="p-6">
                <motion.div
                  className="flex items-center gap-3 mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-lg">{feature.title}</h4>
                </motion.div>
                <p className="text-sm text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-lg border border-green-500/20 p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-center">Alcance del Sistema</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-foreground/80">
          <div>
            <h4 className="font-medium text-primary mb-3">Funcionalidades Principales</h4>
            <ul className="space-y-2 text-sm">
              <li>• Captura automática de placas vehiculares</li>
              <li>• Registro de entradas y salidas</li>
              <li>• Cálculo automático de tarifas</li>
              <li>• Gestión de espacios disponibles</li>
              <li>• Control de membresías y usuarios frecuentes</li>
              <li>• Sistema de alertas y notificaciones</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-3">Usuarios del Sistema</h4>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>Administrador:</strong> Control total del sistema, configuración de tarifas y reportes
              </li>
              <li>
                • <strong>Trabajador:</strong> Gestión operativa, validación de alertas y atención al cliente
              </li>
              <li>
                • <strong>Usuario Final:</strong> Consulta de historial, pagos y estado de membresía
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
