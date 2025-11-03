"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Camera, ScanLine, CheckCircle2, Zap } from "lucide-react";

export function AnprDemo() {
  const [stage, setStage] = useState(0);
  const [detectedPlate, setDetectedPlate] = useState("");
  const controls = useAnimation();

  const plateNumber = "ABC-123";

  useEffect(() => {
    const sequence = async () => {
      await new Promise((r) => setTimeout(r, 800));
      setStage(1);
      await controls.start({ scale: [1, 1.05, 1], transition: { duration: 0.4 } });
      await new Promise((r) => setTimeout(r, 1000));

      setStage(2);
      await new Promise((r) => setTimeout(r, 1600));

      setStage(3);
      for (let i = 0; i <= plateNumber.length; i++) {
        setDetectedPlate(plateNumber.slice(0, i));
        await new Promise((r) => setTimeout(r, 160));
      }
      await new Promise((r) => setTimeout(r, 900));

      setStage(4);
      await new Promise((r) => setTimeout(r, 1600));

      setStage(0);
      setDetectedPlate("");
      sequence();
    };
    sequence();
  }, [controls]);

  return (
    <div className="relative w-full max-w-[420px] md:max-w-[480px] mx-auto h-[360px] flex items-center justify-center rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.1)]">
      {/* Fondo animado sutil */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        animate={{
          backgroundPositionX: ["0%", "100%"],
          backgroundPositionY: ["0%", "100%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Placa */}
        <motion.div animate={controls} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white text-black px-8 py-4 rounded-lg font-bold text-3xl tracking-widest border-4 border-neutral-800 shadow-[0_0_20px_rgba(0,200,255,0.2)]"
          >
            {plateNumber}
          </motion.div>

          {/* Línea de escaneo */}
          {stage === 2 && (
            <motion.div
              className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-sky-400 to-green-400 rounded-full"
              animate={{ top: [0, "100%", 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          )}

          {/* Marco de detección */}
          {stage >= 1 && (
            <motion.div
              className="absolute -inset-4 rounded-lg border-2 border-cyan-400/60 shadow-[0_0_12px_rgba(0,255,255,0.2)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
            </motion.div>
          )}
        </motion.div>

        {/* Indicadores */}
        <div className="flex items-center gap-6 text-center">
          {[
            { icon: Camera, label: "Detectando", color: "cyan", active: stage >= 1 },
            { icon: ScanLine, label: "Escaneando", color: "blue", active: stage >= 2 },
            { icon: Zap, label: "Procesando", color: "emerald", active: stage >= 3 },
            { icon: CheckCircle2, label: "Completado", color: "green", active: stage >= 4 },
          ].map(({ icon: Icon, label, color, active }, i) => (
            <motion.div
              key={i}
              animate={{
                scale: stage === i + 1 ? [1, 1.2, 1] : 1,
                opacity: active ? 1 : 0.4,
              }}
              transition={{
                duration: 0.6,
                repeat: stage === i + 1 ? Infinity : 0,
              }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`p-3 rounded-full transition-all duration-300 ${
                  active
                    ? `bg-${color}-500/15 shadow-[0_0_10px_rgba(0,255,255,0.3)]`
                    : "bg-white/5"
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${
                    active ? `text-${color}-400` : "text-gray-500"
                  }`}
                />
              </div>
              <span className="text-[11px] font-medium text-gray-300">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Resultado */}
        {stage >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-2"
          >
            <p className="text-xs text-gray-400 mb-1">Matrícula detectada:</p>
            <p className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.2)]">
              {detectedPlate}
              {stage === 3 && detectedPlate.length < plateNumber.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </p>
          </motion.div>
        )}
      </div>

      {/* Partículas de éxito */}
      {stage === 4 &&
        [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.7)]"
            initial={{ x: "50%", y: "50%", scale: 0, opacity: 1 }}
            animate={{
              x: `${50 + Math.cos((i / 10) * Math.PI * 2) * 180}%`,
              y: `${50 + Math.sin((i / 10) * Math.PI * 2) * 180}%`,
              scale: [0, 1.2, 0],
              opacity: [1, 1, 0],
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        ))}
    </div>
  );
}
