"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Layers, Zap, Shield, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export function Technology() {
  const techStack = [
    {
      icon: Code,
      title: "Backend",
      items: ["C# / .NET Core", "ASP.NET Core Web API", "Entity Framework Core"],
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Database,
      title: "Base de Datos",
      items: ["SQL Server", "Arquitectura relacional", "Migraciones automáticas"],
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Layers,
      title: "Arquitectura",
      items: ["N-Capas (Entity, Data, Business, Web)", "Microservicios OCR", "Separación de responsabilidades"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Zap,
      title: "OCR & IA",
      items: ["OpenCV", "Tesseract OCR", "Procesamiento de imágenes"],
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Seguridad",
      items: ["Autenticación por roles", "Encriptación de contraseñas", "Logs de auditoría"],
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Cloud,
      title: "Integración",
      items: ["Cámaras IP (RTSP)", "APIs RESTful", "Notificaciones en tiempo real"],
      color: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Fondo animado */}
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
          Tecnología{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 animate-gradient">
            Avanzada
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          ANPR-VISION está construido con tecnologías modernas y robustas para garantizar
          rendimiento, seguridad y escalabilidad.
        </p>
      </motion.div>

      {/* Grid de tecnologías */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group relative h-full rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-cyan-500/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 backdrop-blur-sm overflow-hidden">
              {/* Glow dinámico */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-2xl transition-opacity duration-700" />

              <CardHeader className="relative z-10">
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30`}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <tech.icon className="h-7 w-7 text-white" />
                </motion.div>
                <CardTitle className="text-lg font-semibold">{tech.title}</CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bloques finales */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Requisitos No Funcionales */}
        <Card className="rounded-2xl bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-emerald-300">
              Requisitos No Funcionales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                • <strong>Disponibilidad:</strong> 95% durante horario operativo
              </li>
              <li>
                • <strong>Rendimiento:</strong> Respuesta &lt; 3 segundos
              </li>
              <li>
                • <strong>Escalabilidad:</strong> Soporte multi-parqueadero
              </li>
              <li>
                • <strong>Seguridad:</strong> Encriptación y control por roles
              </li>
              <li>
                • <strong>Mantenibilidad:</strong> Arquitectura limpia y modular
              </li>
              <li>
                • <strong>Usabilidad:</strong> Interfaz intuitiva y responsiva
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Equipo de Desarrollo */}
        <Card className="rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-cyan-300">
              Equipo de Desarrollo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="font-medium text-cyan-400">
                  Karol Natalia Osorio Poveda
                </p>
                <p className="text-xs">Tecnóloga en Análisis y Desarrollo de Software</p>
              </div>
              <div>
                <p className="font-medium text-cyan-400">Yerson Cuellar Rubiano</p>
                <p className="text-xs">Tecnólogo en Análisis y Desarrollo de Software</p>
              </div>
              <div>
                <p className="font-medium text-cyan-400">Aníbal Alvarado Andrade</p>
                <p className="text-xs">Tecnólogo en Análisis y Desarrollo de Software</p>
              </div>

              <div className="pt-4 border-t border-cyan-500/20">
                <p className="font-medium text-white">
                  Servicio Nacional de Aprendizaje (SENA)
                </p>
                <p className="text-xs text-gray-400">Julio 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
