"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function TermsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(true); // Por defecto true para no mostrar si ya aceptó

  useEffect(() => {
    // Verificar si el usuario ya aceptó los términos
    const termsAccepted = localStorage.getItem("terms_accepted");
    
    if (!termsAccepted) {
      setIsOpen(true);
      setHasAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    // Guardar que aceptó los términos
    localStorage.setItem("terms_accepted", "true");
    setHasAccepted(true);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && !hasAccepted && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-slate-900 rounded-lg shadow-2xl border border-slate-700 max-w-3xl w-full h-[85vh] flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="border-b border-slate-700 px-8 py-6 flex-shrink-0">
              <h2 className="text-2xl font-bold text-white">
                Términos y Condiciones
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Información sobre el tratamiento de datos del sistema ANPR Vision
              </p>
            </div>

            {/* Contenido scrolleable */}
            <ScrollArea className="flex-1 overflow-hidden px-8 py-6">
              <div className="space-y-6 pr-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    1. Introducción
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    ANPR Vision es un sistema inteligente de gestión de parqueaderos con 
                    reconocimiento automático de placas vehiculares mediante OCR. Este documento 
                    describe cómo tratamos, procesamos y protegemos los datos que recopilamos 
                    en nuestro sistema.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    2. Datos que Recopilamos
                  </h3>
                  <ul className="text-gray-300 text-sm space-y-2 ml-4">
                    <li>• <strong>Datos de Vehículos:</strong> Placas vehiculares, marcas, modelos y colores</li>
                    <li>• <strong>Datos de Acceso:</strong> Fechas y horas de entrada/salida del parqueadero</li>
                    <li>• <strong>Datos de Usuarios:</strong> Información de conductores y administradores del sistema</li>
                    <li>• <strong>Datos Técnicos:</strong> Registros de cámaras y logs del sistema</li>
                    {/* <li>• <strong>Datos de Facturación:</strong> Información de pagos y transacciones</li> */}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    3. Propósito del Tratamiento de Datos
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Los datos recopilados se utilizan exclusivamente para:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2 ml-4">
                    <li>• Gestión y control de acceso a instalaciones de parqueadero</li>
                    <li>• Reconocimiento automático de vehículos</li>
                    <li>• Generación de estadísticas</li>
                    {/* <li>• Facturación y control de pagos</li> */}
                    {/* <li>• Seguridad y prevención de fraude</li> */}
                    <li>• Mejora continua del servicio</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    4. Almacenamiento y Seguridad
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Los datos se almacenan en servidores seguros con encriptación de nivel 
                    empresarial. Implementamos medidas de seguridad técnica y administrativa 
                    para proteger la información contra acceso no autorizado, alteración, divulgación 
                    o destrucción.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    5. Derechos del Usuario
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Usted tiene derecho a:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2 ml-4">
                    <li>• Acceder a sus datos personales</li>
                    <li>• Solicitar corrección de datos inexactos</li>
                    <li>• Solicitar la eliminación de datos</li>
                    <li>• Obtener información sobre el tratamiento de sus datos</li>
                    <li>• Revocar su consentimiento en cualquier momento</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    6. Tiempo de Retención de Datos
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Los datos se conservarán durante el tiempo necesario para cumplir con los 
                    propósitos para los cuales fueron recopilados, generalmente un período de 
                    12 meses a partir de la última transacción, a menos que la ley requiera 
                    un período más largo.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    7. Contacto y Derechos
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Si tiene preguntas sobre el tratamiento de sus datos o desea ejercer sus 
                    derechos, puede contactarnos a través de nuestro correo de soporte o 
                    formulario en línea disponible en nuestra plataforma.
                  </p>
                  <p>anprvision03@gmail.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    8. Cambios en estos Términos
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Nos reservamos el derecho de actualizar estos términos y condiciones en cualquier 
                    momento. Los cambios serán notificados a través de nuestra plataforma.
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded p-4">
                  <p className="text-xs text-gray-400">
                    <strong>Última actualización:</strong> Diciembre 2025
                  </p>
                </div>
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="border-t border-slate-700 px-8 py-4 bg-slate-800/50 flex gap-4 justify-end flex-shrink-0">
              <Button
                onClick={handleAccept}
                className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold"
              >
                Aceptar Términos y Condiciones
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
