"use client";

import { Camera } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black border-t border-cyan-500/20 py-16 text-white overflow-hidden">
      {/* Efecto decorativo de gradiente difuso */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,200,255,0.08),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-cyan-500/10 pb-10">
          {/* Columna 1: Marca */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/30">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                ANPR-VISION
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Sistema inteligente de reconocimiento automático de matrículas para
              la gestión eficiente de parqueaderos.
            </p>
          </div>

          {/* Columna 2: Secciones */}
          <div>
            <h3 className="font-semibold text-cyan-400 mb-4 uppercase tracking-wide text-sm">
              Secciones
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                ["Inicio", "#inicio"],
                ["Introducción", "#introduccion"],
                ["Funcionalidades", "#funcionalidades"],
                ["Cómo Funciona", "#como-funciona"],
                ["Beneficios", "#beneficios"],
                ["Tecnología", "#tecnologia"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-cyan-300 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Tecnologías */}
          <div>
            <h3 className="font-semibold text-cyan-400 mb-4 uppercase tracking-wide text-sm">
              Tecnologías
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>C# / .NET Core</li>
              <li>Entity Framework</li>
              <li>SQL Server</li>
              <li>OpenCV & Tesseract</li>
            </ul>
          </div>

          {/* Columna 4: Proyecto */}
          <div>
            <h3 className="font-semibold text-cyan-400 mb-4 uppercase tracking-wide text-sm">
              Proyecto
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>SENA – Tecnología ADSO</li>
              <li>Julio 2025</li>
              <li>Equipo de Desarrollo</li>
            </ul>
          </div>
        </div>

        {/* Créditos */}
        <div className="pt-8 text-center text-sm text-gray-500 space-y-2">
          <p className="tracking-wide">
            © {currentYear} <span className="text-cyan-400 font-medium">ANPR-VISION</span>. Todos los derechos
            reservados.
          </p>
          <p className="text-gray-400 text-xs">
            Sistema de Reconocimiento Automático de Matrículas — Gestión Inteligente de Parqueaderos
          </p>
        </div>
      </div>
    </footer>
  );
}
