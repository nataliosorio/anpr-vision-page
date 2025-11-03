"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Camera,
  Users,
  CreditCard,
  Bell,
  FileText,
  Shield,
  Clock,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

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
      description:
        "Gestión de listas negras para vehículos restringidos con alertas automáticas al intentar ingresar.",
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
      description:
        "Generación de informes detallados sobre ocupación, ingresos, tiempos promedio y patrones de uso.",
      color: "from-green-600 to-cyan-700",
    },
    {
      icon: Settings,
      title: "Panel Administrativo",
      description:
        "Dashboard intuitivo con métricas en tiempo real, gestión de configuraciones y control total del sistema.",
      color: "from-cyan-600 to-green-700",
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
          Funcionalidades{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 animate-gradient">
            Principales
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          ANPR-VISION ofrece un conjunto completo de herramientas para la
          gestión eficiente y automatizada de tu parqueadero.
        </p>
      </motion.div>

      {/* Grid de características */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group relative h-full rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-cyan-500/10 transition-all duration-500 backdrop-blur-sm overflow-hidden">
              {/* Efecto glow dinámico */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${feature.color} blur-3xl transition-opacity duration-700`}
              />

              <CardHeader className="relative z-10">
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </motion.div>
                <CardTitle className="text-lg font-semibold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
