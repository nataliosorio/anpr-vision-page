"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Users, CreditCard, Bell, FileText, Shield, Clock, Settings } from "lucide-react"
import { motion } from "framer-motion"

export function Features() {
  const features = [
    {
      icon: Camera,
      title: "Reconocimiento Automático",
      description:
        "Captura y reconocimiento de matrículas mediante OCR con alta precisión, incluso en condiciones variables de iluminación.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Gestión de Usuarios",
      description:
        "Administración completa de clientes, vehículos frecuentes y membresías con diferentes niveles de acceso.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: CreditCard,
      title: "Sistema de Tarifas",
      description:
        "Configuración flexible de precios según tipo de vehículo, horario (diurno/nocturno) y tiempo de permanencia.",
      color: "from-green-500 to-cyan-600",
    },
    {
      icon: Clock,
      title: "Control de Tiempo",
      description:
        "Registro preciso de entradas y salidas con cálculo automático del tiempo de permanencia y cobros asociados.",
      color: "from-cyan-500 to-green-600",
    },
    {
      icon: Shield,
      title: "Listas de Control",
      description: "Gestión de listas negras para vehículos restringidos con alertas automáticas al intentar ingresar.",
      color: "from-blue-600 to-cyan-700",
    },
    {
      icon: Bell,
      title: "Sistema de Alertas",
      description:
        "Notificaciones automáticas por tiempo excedido, infracciones, vehículos restringidos y eventos críticos.",
      color: "from-cyan-600 to-blue-700",
    },
    {
      icon: FileText,
      title: "Reportes y Estadísticas",
      description: "Generación de informes detallados sobre ocupación, ingresos, tiempos promedio y patrones de uso.",
      color: "from-green-600 to-cyan-700",
    },
    {
      icon: Settings,
      title: "Panel Administrativo",
      description:
        "Dashboard intuitivo con métricas en tiempo real, gestión de configuraciones y control total del sistema.",
      color: "from-cyan-600 to-green-700",
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
          Funcionalidades <span className="gradient-text">Principales</span>
        </h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          ANPR-VISION ofrece un conjunto completo de herramientas para la gestión eficiente de tu parqueadero.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="card-hover h-full glass-card">
              <CardHeader>
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </motion.div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
