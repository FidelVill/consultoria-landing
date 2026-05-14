import { MessageCircle, ChevronRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Button from '@/components/ui/Button'

import logo from '../../assets/logo.png'
import bgHero from '../../assets/bg-hero.png'

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgHero})`,
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-20 pb-40">

        {/* Columna izquierda */}
        <div className="flex flex-col gap-7 max-w-xl">

          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95] text-blanco-hueso uppercase">
            Números que
            <span className="text-dorado-principal block">
              construyen
            </span>
            tu mejor decisión.
          </h1>

          <p className="font-inter text-blanco-hueso/80 text-lg md:text-xl max-w-lg leading-relaxed">
            Asesoría contable y financiera personalizada
            para que tu negocio crezca con seguridad
            y claridad.
          </p>

          <div className="flex flex-wrap gap-5 mt-4">
            <Button
              variant="primary"
              icon={<FaWhatsapp size={18} />}
              onClick={() => window.open('https://wa.me/TUNUMERO', '_blank')}
            >
              Hablar por WhatsApp
            </Button>

            <Button
              variant="outline"
              icon={<ChevronRight size={18} />}
            >
              Conoce nuestros servicios
            </Button>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col items-center justify-center lg:items-center gap-4">

          <img
            src={logo}
            alt="Carlos González"
            className="w-48 md:w-72 lg:w-80 object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.30)]"
          />

          <div className="text-center -mt-4">
            <p className="font-cormorant text-4xl md:text-5xl font-bold text-blanco-hueso tracking-[0.08em] uppercase">
              Carlos González
            </p>

            <div className="flex items-center gap-3 mt-3 justify-center">
              <span className="h-px w-12 bg-dorado-principal" />

              <p className="font-inter text-[10px] md:text-xs text-dorado-principal tracking-[0.35em] uppercase">
                Números que construyen
                <br />
                tu mejor decisión.
              </p>

              <span className="h-px w-12 bg-dorado-principal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero