import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, Sparkles } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Button from '@/components/ui/Button'

import logo from '../../assets/logo.png'
import bgHero from '../../assets/bg-hero.png'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right-center bg-cover opacity-50 scale-110"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Glow */}
      <motion.div
        animate={{ opacity: [0.18, 0.32, 0.18], scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-20 top-40 h-72 w-72 rounded-full bg-dorado-principal/20 blur-[100px]"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center pt-10 pb-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="flex flex-col gap-7 max-w-2xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 w-fit rounded-full border border-dorado-principal/35 bg-dorado-principal/10 px-5 py-2">
            <Sparkles size={15} className="text-dorado-principal" />

            <span className="font-inter text-xs font-semibold tracking-[0.28em] uppercase text-dorado-principal">
              Asesoría contable profesional
            </span>
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-[76px] font-bold leading-[0.92] text-blanco-hueso uppercase">
            Números que
            <span className="text-dorado-principal block">
              construyen
            </span>
            tu mejor decisión.
          </h1>

          {/* Description */}
          <p className="font-inter text-blanco-hueso/80 text-lg md:text-xl max-w-xl leading-relaxed">
            Asesoría contable y financiera personalizada para que tu negocio
            crezca con seguridad, claridad y estrategia.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Button
              variant="primary"
              icon={<FaWhatsapp size={18} />}
              onClick={() => window.open('https://wa.me/TUNUMERO', '_blank')}
              className="rounded-full px-7"
            >
              Hablar por WhatsApp
            </Button>

            <Button
              variant="outline"
              icon={<ChevronRight size={18} />}
              onClick={() => navigate('/service')}
              className="rounded-full px-7"
            >
              Conoce nuestros servicios
            </Button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
          className="hidden lg:flex flex-col items-center justify-center"
        >
          <motion.img
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            src={logo}
            alt="Carlos González"
            className="w-64 lg:w-80 object-contain drop-shadow-[0_0_45px_rgba(212,175,55,0.35)]"
          />

          <div className="text-center mt-2">
            <p className="font-cormorant text-4xl md:text-5xl font-bold text-blanco-hueso tracking-[0.08em] uppercase">
              Carlos González
            </p>

            <div className="flex items-center gap-3 mt-3 justify-center">
              <span className="h-px w-12 bg-dorado-principal" />

              <p className="font-inter text-[10px] md:text-xs text-dorado-principal tracking-[0.35em] uppercase leading-relaxed">
                Números que construyen
                <br />
                tu mejor decisión.
              </p>

              <span className="h-px w-12 bg-dorado-principal" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero