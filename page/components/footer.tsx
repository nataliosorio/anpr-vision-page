import { Camera } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold gradient-text">ANPR-VISION</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Sistema inteligente de reconocimiento automático de matrículas para la gestión eficiente de parqueaderos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Secciones</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#introduccion" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Introducción
                </Link>
              </li>
              <li>
                <Link
                  href="#funcionalidades"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="#tecnologia" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                  Tecnología
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Tecnologías</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70 text-sm">C# / .NET Core</li>
              <li className="text-foreground/70 text-sm">Entity Framework</li>
              <li className="text-foreground/70 text-sm">SQL Server</li>
              <li className="text-foreground/70 text-sm">OpenCV & Tesseract</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Proyecto</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70 text-sm">SENA - Tecnología ADSO</li>
              <li className="text-foreground/70 text-sm">Julio 2025</li>
              <li className="text-foreground/70 text-sm">Equipo de Desarrollo</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-foreground/60">
          <p>© {currentYear} ANPR-VISION. Todos los derechos reservados.</p>
          <p className="mt-2">
            Sistema de Reconocimiento Automático de Matrículas - Gestión Inteligente de Parqueaderos
          </p>
        </div>
      </div>
    </footer>
  )
}
