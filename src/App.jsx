import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import History from './sections/History'
import PhilosophyBand from './sections/PhilosophyBand'
import Sensei from './sections/Sensei'
import SenseiRicardo from './sections/SenseiRicardo'
import Instructors from './sections/Instructors'
import Modalities from './sections/Modalities'
import Mission from './sections/Mission'
import Plans from './sections/Plans'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import Location from './sections/Location'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-modal focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main id="conteudo">
        <Hero />
        <About />
        <History />
        <PhilosophyBand />
        <Instructors />
        {/* Agrupa as duas biografias sob um único item do menu */}
        <div id="trajetoria">
          <SenseiRicardo />
          <Sensei />
        </div>
        <Modalities />
        <Mission />
        <Plans />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTA />
        <Location />
      </main>

      <Footer />
    </>
  )
}
