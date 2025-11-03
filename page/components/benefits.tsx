"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  Clock,
  Shield,
  Users,
  DollarSign,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

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
      description:
        "Control de acceso automatizado con registro completo de movimientos y gestión de listas negras.",
      stats: "100% trazabilidad",
    },
    {
      icon: DollarSign,
      title: "Optimización de Ingresos",
      description:
        "Cálculo preciso de tarifas, reducción de errores humanos y mejor control de pagos pendientes.",
      stats: "Reducción de pérdidas",
    },
    {
      icon: Users,
      title: "Mejor Experiencia",
      description:
        "Acceso fluido sin necesidad de tickets físicos, consultas en línea y notificaciones automáticas.",
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
      description:
        "Sistema preparado para crecer con tu negocio, soportando múltiples ubicaciones y mayor volumen.",
      stats: "Crecimiento flexible",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Fondo visual con malla */}
      <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none" />

      {/* Título principal */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Beneficios{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 animate-gradient">
            Clave
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          ANPR-VISION transforma la gestión de tu parqueadero, optimizando
          operaciones, reduciendo tiempos y mejorando resultados.
        </p>
      </motion.div>

      {/* Grid de beneficios */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group relative h-full rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 backdrop-blur-sm overflow-hidden">
              {/* Glow dinámico */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-2xl transition-opacity duration-700" />

              <CardHeader className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-4 shadow-lg shadow-cyan-500/30"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <benefit.icon className="h-7 w-7 text-white" />
                </motion.div>

                <CardTitle className="flex items-center justify-between text-lg font-semibold text-white">
                  <span>{benefit.title}</span>
                  <span className="text-sm font-normal text-cyan-300">
                    {benefit.stats}
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Impacto Operativo */}
      <motion.div
        className="relative z-10 mt-20 p-10 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-800/40 to-slate-900/40 shadow-lg shadow-cyan-500/10 backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-white">
          Impacto Operativo
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-300">
          <div>
            <h4 className="font-semibold text-cyan-400 mb-3">
              Antes de ANPR-VISION
            </h4>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>• Registro manual propenso a errores</li>
              <li>• Largas filas y tiempos de espera</li>
              <li>• Dificultad para rastrear vehículos</li>
              <li>• Control limitado de accesos</li>
              <li>• Reportes manuales y desactualizados</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-400 mb-3">
              Con ANPR-VISION
            </h4>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>• Registro automático y preciso</li>
              <li>• Acceso rápido y sin contacto</li>
              <li>• Trazabilidad completa en tiempo real</li>
              <li>• Control inteligente con listas negras</li>
              <li>• Reportes automáticos y actualizados</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
