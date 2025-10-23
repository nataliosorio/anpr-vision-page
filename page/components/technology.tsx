"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Layers, Zap, Shield, Cloud } from "lucide-react"
import { motion } from "framer-motion"

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
          Tecnología <span className="gradient-text">Avanzada</span>
        </h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          ANPR-VISION está construido con tecnologías modernas y robustas para garantizar rendimiento, seguridad y
          escalabilidad.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="card-hover h-full">
              <CardHeader>
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <tech.icon className="h-6 w-6 text-white" />
                </motion.div>
                <CardTitle>{tech.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-500/20">
          <CardHeader>
            <CardTitle>Requisitos No Funcionales</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                • <strong>Disponibilidad:</strong> 95% durante horario operativo
              </li>
              <li>
                • <strong>Rendimiento:</strong> Respuesta &lt; 3 segundos
              </li>
              <li>
                • <strong>Escalabilidad:</strong> Soporte para múltiples parqueaderos
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

        <Card className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 border-teal-500/20">
          <CardHeader>
            <CardTitle>Equipo de Desarrollo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-foreground/80">
              <div>
                <p className="font-medium text-primary">Karol Natalia Osorio Poveda</p>
                <p className="text-xs">Tecnóloga en Análisis y Desarrollo de Software</p>
              </div>
              <div>
                <p className="font-medium text-primary">Yerson Cuellar Rubiano</p>
                <p className="text-xs">Tecnólogo en Análisis y Desarrollo de Software</p>
              </div>
              <div>
                <p className="font-medium text-primary">Anibal Alvarado</p>
                <p className="text-xs">Tecnólogo en Análisis y Desarrollo de Software</p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="font-medium">Servicio Nacional de Aprendizaje (SENA)</p>
                <p className="text-xs">Julio 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
