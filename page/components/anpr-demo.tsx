"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { Camera, ScanLine, CheckCircle2, Zap } from "lucide-react"

export function AnprDemo() {
  const [stage, setStage] = useState(0)
  const [detectedPlate, setDetectedPlate] = useState("")
  const controls = useAnimation()

  const plateNumber = "ABC-123"

  useEffect(() => {
    const sequence = async () => {
      // Stage 0: Initial state
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Stage 1: Camera detecting
      setStage(1)
      await controls.start({ scale: [1, 1.1, 1], transition: { duration: 0.5 } })
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Stage 2: Scanning
      setStage(2)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Stage 3: OCR Processing - reveal characters one by one
      setStage(3)
      for (let i = 0; i <= plateNumber.length; i++) {
        setDetectedPlate(plateNumber.slice(0, i))
        await new Promise((resolve) => setTimeout(resolve, 200))
      }
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Stage 4: Success
      setStage(4)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Reset and loop
      setStage(0)
      setDetectedPlate("")
      sequence()
    }

    sequence()
  }, [controls])

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-green-500/5 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* License Plate */}
        <motion.div animate={controls} className="relative">
          <div className="bg-white text-black px-8 py-4 rounded-lg font-bold text-4xl tracking-wider shadow-2xl border-4 border-black">
            {plateNumber}
          </div>

          {/* Scanning line effect */}
          {stage === 2 && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent h-2"
              animate={{ y: [0, 80, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          )}

          {/* Detection box */}
          {stage >= 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -inset-4 border-2 border-cyan-400 rounded-lg"
            >
              {/* Corner markers */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-cyan-400" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-cyan-400" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-cyan-400" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-cyan-400" />
            </motion.div>
          )}
        </motion.div>

        {/* Status indicators */}
        <div className="flex items-center gap-6">
          {/* Camera icon */}
          <motion.div
            animate={{
              scale: stage === 1 ? [1, 1.2, 1] : 1,
              opacity: stage >= 1 ? 1 : 0.3,
            }}
            transition={{ duration: 0.5, repeat: stage === 1 ? Number.POSITIVE_INFINITY : 0 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`p-4 rounded-full ${stage >= 1 ? "bg-cyan-500/20 shadow-lg shadow-cyan-500/50" : "bg-gray-500/20"}`}
            >
              <Camera className={`w-8 h-8 ${stage >= 1 ? "text-cyan-400" : "text-gray-400"}`} />
            </div>
            <span className="text-xs font-medium">Detectando</span>
          </motion.div>

          {/* Scan icon */}
          <motion.div
            animate={{
              scale: stage === 2 ? [1, 1.2, 1] : 1,
              opacity: stage >= 2 ? 1 : 0.3,
            }}
            transition={{ duration: 0.5, repeat: stage === 2 ? Number.POSITIVE_INFINITY : 0 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`p-4 rounded-full ${stage >= 2 ? "bg-blue-500/20 shadow-lg shadow-blue-500/50" : "bg-gray-500/20"}`}
            >
              <ScanLine className={`w-8 h-8 ${stage >= 2 ? "text-blue-400" : "text-gray-400"}`} />
            </div>
            <span className="text-xs font-medium">Escaneando</span>
          </motion.div>

          {/* Processing icon */}
          <motion.div
            animate={{
              scale: stage === 3 ? [1, 1.2, 1] : 1,
              opacity: stage >= 3 ? 1 : 0.3,
            }}
            transition={{ duration: 0.5, repeat: stage === 3 ? Number.POSITIVE_INFINITY : 0 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`p-4 rounded-full ${stage >= 3 ? "bg-green-500/20 shadow-lg shadow-green-500/50" : "bg-gray-500/20"}`}
            >
              <Zap className={`w-8 h-8 ${stage >= 3 ? "text-green-400" : "text-gray-400"}`} />
            </div>
            <span className="text-xs font-medium">Procesando</span>
          </motion.div>

          {/* Success icon */}
          <motion.div
            animate={{
              scale: stage === 4 ? [1, 1.3, 1] : 1,
              opacity: stage >= 4 ? 1 : 0.3,
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`p-4 rounded-full ${stage >= 4 ? "bg-green-500/20 shadow-lg shadow-green-500/50" : "bg-gray-500/20"}`}
            >
              <CheckCircle2 className={`w-8 h-8 ${stage >= 4 ? "text-green-400" : "text-gray-400"}`} />
            </div>
            <span className="text-xs font-medium">Completado</span>
          </motion.div>
        </div>

        {/* OCR Result display */}
        {stage >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card px-8 py-4 rounded-lg"
          >
            <div className="text-center">
              <p className="text-sm text-foreground/60 mb-2">Matrícula Detectada:</p>
              <p className="text-3xl font-bold gradient-text tracking-wider">
                {detectedPlate}
                {stage === 3 && detectedPlate.length < plateNumber.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    |
                  </motion.span>
                )}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Particle effects on success */}
      {stage === 4 && (
        <>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              initial={{
                x: "50%",
                y: "50%",
                scale: 0,
                opacity: 1,
              }}
              animate={{
                x: `${50 + Math.cos((i / 12) * Math.PI * 2) * 200}%`,
                y: `${50 + Math.sin((i / 12) * Math.PI * 2) * 200}%`,
                scale: [0, 1, 0],
                opacity: [1, 1, 0],
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          ))}
        </>
      )}
    </div>
  )
}
