import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Introduction } from "@/components/introduction"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
// import { Technology } from "@/components/technology"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>
        <section id="introduccion" className="section-padding">
          <Introduction />
        </section>
        <section id="funcionalidades" className="section-padding bg-muted">
          <Features />
        </section>
        <section id="como-funciona" className="section-padding">
          <HowItWorks />
        </section>
        <section id="beneficios" className="section-padding bg-muted">
          <Benefits />
        </section>
        {/* <section id="tecnologia" className="section-padding">
          <Technology />
        </section> */}
      </div>
      <Footer />
    </main>
  )
}
