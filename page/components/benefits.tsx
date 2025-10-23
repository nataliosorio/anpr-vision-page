"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Clock, Shield, Users, DollarSign, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Ahorro de Tiempo",
      description:
        "Eliminación de procesos manuales de registro, reduciendo tiempos de espera y mejorando la experiencia del usuario.",
      stats: "Hasta 70% más rápido",
    },
    {
      icon: Shield,
      title: "Mayor Seguridad",
      description: "Control de acceso automatizado con registro completo de movimientos y gestión de listas negras.",
      stats: "100% trazabilidad",
    },
    {
      icon: DollarSign,
      title: "Optimización de Ingresos",
      description: "Cálculo preciso de tarifas, reducción de errores humanos y mejor control de pagos pendientes.",
      stats: "Reducción de pérdidas",
    },
    {
      icon: Users,
      title: "Mejor Experiencia",
      description: "Acceso fluido sin necesidad de tickets físicos, consultas en línea y notificaciones automáticas.",
      stats: "Mayor satisfacción",
    },
    {
      icon: BarChart3,
      title: "Datos en Tiempo Real",
      description:
        "Métricas actualizadas sobre ocupación, ingresos y patrones de uso para toma de decisiones informadas.",
      stats: "Análisis instantáneo",
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad",
      description: "Sistema preparado para crecer con tu negocio, soportando múltiples ubicaciones y mayor volumen.",
      stats: "Crecimiento flexible",
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
          Beneficios <span className="gradient-text">Clave</span>
        </h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          ANPR-VISION transforma la gestión de tu parqueadero, optimizando operaciones y mejorando resultados.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="card-hover card-3d h-full glass-card">
              <CardHeader>
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <benefit.icon className="h-8 w-8 text-primary mb-3 drop-shadow-lg" />
                </motion.div>
                <CardTitle className="flex items-center justify-between">
                  <span>{benefit.title}</span>
                  <span className="text-sm font-normal text-primary">{benefit.stats}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{benefit.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 p-8 bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-lg border border-green-500/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">Impacto Operativo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-primary mb-4">Antes de ANPR-VISION</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Registro manual propenso a errores</li>
              <li>• Largas filas y tiempos de espera</li>
              <li>• Dificultad para rastrear vehículos</li>
              <li>• Control limitado de accesos</li>
              <li>• Reportes manuales y desactualizados</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-4">Con ANPR-VISION</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Registro automático y preciso</li>
              <li>• Acceso rápido y sin contacto</li>
              <li>• Trazabilidad completa en tiempo real</li>
              <li>• Control inteligente con listas negras</li>
              <li>• Reportes automáticos y actualizados</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
