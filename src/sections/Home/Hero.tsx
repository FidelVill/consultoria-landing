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
      className="relative min-h-[calc(100vh-80px)] lg:min-h-screen flex items-center overflow-hidden bg-black"
    >
      <div
        className="
          absolute inset-0
          hidden lg:block
          bg-no-repeat bg-right-center bg-cover
          opacity-50 scale-110
        "
        style={{ backgroundImage: `url(${bgHero})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <motion.div
        animate={{ opacity: [0.14, 0.28, 0.14], scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-40px] top-28 h-56 w-56 md:right-20 md:top-40 md:h-72 md:w-72 rounded-full bg-dorado-principal/20 blur-[90px]"
      />

      <div
        className="
           relative max-w-7xl mx-auto px-6 w-full
            grid grid-cols-1 lg:grid-cols-2
            gap-8 lg:gap-14 items-center
            pt-2 pb-12
            sm:pt-4
            lg:pt-10 lg:pb-24
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="
            flex flex-col
            gap-5 md:gap-7
            max-w-2xl
            text-center lg:text-left
            items-center lg:items-start
          "
        >
          {/* Logo mobile */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            src={logo}
            alt="Carlos González"
            className="lg:hidden w-28 object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.35)] mb-1"
          />

          <div className="inline-flex items-center gap-2 md:gap-3 w-fit rounded-full border border-dorado-principal/35 bg-dorado-principal/10 px-4 md:px-5 py-2">
            <Sparkles size={15} className="text-dorado-principal shrink-0" />

            <span className="font-inter text-[10px] md:text-xs font-semibold tracking-[0.22em] md:tracking-[0.28em] uppercase text-dorado-principal">
              Asesoría contable profesional
            </span>
          </div>

          <h1 className="font-cormorant text-[40px] sm:text-5xl md:text-6xl lg:text-[76px] font-bold leading-[0.92] text-blanco-hueso uppercase">
            Números que
            <span className="text-dorado-principal block">
              construyen
            </span>
            tu mejor decisión.
          </h1>

          <p className="font-inter text-blanco-hueso/80 text-base md:text-xl max-w-xl leading-relaxed">
            Asesoría contable y financiera personalizada para que tu negocio
            crezca con seguridad, claridad y estrategia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <Button
              variant="primary"
              icon={<FaWhatsapp size={18} />}
              onClick={() => window.open('https://wa.me/524431415032', '_blank')}
              className="rounded-full px-7 w-full sm:w-auto justify-center"
            >
              Hablar por WhatsApp
            </Button>

            <Button
              variant="outline"
              icon={<ChevronRight size={18} />}
              onClick={() => navigate('/service')}
              className="rounded-full px-7 w-full sm:w-auto justify-center"
            >
              Conoce nuestros servicios
            </Button>
          </div>
        </motion.div>

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