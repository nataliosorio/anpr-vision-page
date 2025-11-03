"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Camera, Cpu, Shield, Zap, Clock, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

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
      description:
        "Captura y procesamiento de matrículas en tiempo real para un acceso fluido y sin demoras.",
    },
    {
      icon: Shield,
      title: "Seguridad Mejorada",
      description:
        "Control de acceso automatizado con listas negras y registro completo de entradas y salidas.",
    },
    {
      icon: Clock,
      title: "Gestión de Tiempo",
      description:
        "Cálculo automático de permanencia y tarifas según tipo de vehículo y horario.",
    },
    {
      icon: BarChart3,
      title: "Reportes Detallados",
      description:
        "Análisis y estadísticas en tiempo real sobre ocupación, ingresos y patrones de uso.",
    },
    {
      icon: Cpu,
      title: "Arquitectura Escalable",
      description:
        "Sistema modular basado en microservicios, preparado para crecer con tu negocio.",
    },
  ];

  return (
    <section
      id="introduccion"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Fondo con malla sutil */}
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
          ¿Qué es <span className="gradient-text">ANPR-VISION</span>?
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          ANPR-VISION es un sistema inteligente de gestión de parqueaderos que
          utiliza reconocimiento automático de matrículas (ANPR) mediante
          tecnología OCR para automatizar y optimizar el control de acceso
          vehicular.
        </p>
      </motion.div>

      {/* Tarjetas */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 rounded-2xl backdrop-blur-sm card-3d">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-lg text-white">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Alcance del sistema */}
      <motion.div
        className="relative z-10 bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl border border-cyan-500/20 p-10 shadow-lg shadow-cyan-500/5 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-white">
          Alcance del Sistema
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-300">
          <div>
            <h4 className="font-semibold text-cyan-400 mb-3">
              Funcionalidades Principales
            </h4>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>• Captura automática de placas vehiculares</li>
              <li>• Registro de entradas y salidas</li>
              <li>• Cálculo automático de tarifas</li>
              <li>• Gestión de espacios disponibles</li>
              <li>• Control de membresías y usuarios frecuentes</li>
              <li>• Sistema de alertas y notificaciones</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-400 mb-3">
              Usuarios del Sistema
            </h4>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                • <strong>Administrador:</strong> Control total del sistema,
                configuración de tarifas y reportes.
              </li>
              <li>
                • <strong>Trabajador:</strong> Gestión operativa, validación de
                alertas y atención al cliente.
              </li>
              <li>
                • <strong>Usuario Final:</strong> Consulta de historial, pagos y
                estado de membresía.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
