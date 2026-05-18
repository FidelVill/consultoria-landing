import { motion } from 'framer-motion'
import { CalendarCheck } from 'lucide-react'
import Button from '@/components/ui/Button'

import Desk from '@/assets/accounting-desk.png'

const BenefitsHero = () => {
  return (
    <section className="bg-blanco-hueso overflow-hidden">
      <div className="max-w-[1900px] mx-auto lg:min-h-[900px] grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="
            relative z-10
            px-5 sm:px-6 md:px-10 lg:pl-24 xl:pl-32 lg:pr-8
            py-10 md:py-12 lg:py-14
            text-center lg:text-left
          "
        >
          <p
            className="
              font-inter
              text-xs md:text-sm
              font-semibold
              tracking-[0.25em] md:tracking-[0.35em]
              text-dorado-principal
              uppercase
              mb-4 md:mb-5
            "
          >
            Beneficios
          </p>

          <h1
            className="
              font-cormorant
              text-4xl sm:text-5xl md:text-6xl xl:text-7xl
              font-semibold
              text-negro-premium
              leading-[1] lg:leading-[0.92]
              mb-6 md:mb-8
              max-w-2xl
              mx-auto lg:mx-0
            "
          >
            Más que números,
            <span className="text-dorado-principal block">
              estrategias que impulsan tu negocio.
            </span>
          </h1>

          <div className="w-14 h-[2px] bg-dorado-principal mb-6 md:mb-8 mx-auto lg:mx-0" />

          <p
            className="
              font-inter
              text-negro-premium/65
              text-base md:text-lg
              leading-relaxed
              mb-7 md:mb-9
              max-w-xl
              mx-auto lg:mx-0
            "
          >
            En nuestra consultoría contable, convertimos la información
            financiera en decisiones inteligentes que generan crecimiento,
            estabilidad y tranquilidad para ti y tu empresa.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button
              variant="primary"
              icon={<CalendarCheck size={18} />}
              onClick={() =>
                window.open('https://wa.me/524431415032', '_blank')
              }
              className="
                rounded-full
                px-8
                h-12 md:h-14
                w-full max-w-[360px]
                sm:w-auto sm:min-w-[240px]
              "
            >
              Agendar asesoría
            </Button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="
            relative
            w-full
            h-[320px]
            sm:h-[420px]
            md:h-[520px]
            lg:h-[900px]
            overflow-hidden
          "
        >
          <div className="absolute inset-0 overflow-hidden lg:[clip-path:ellipse(100%_120%_at_100%_50%)]">
            <img
              src={Desk}
              alt="Consultoría contable"
              className="
                w-full
                h-full
                object-cover
                object-center
                lg:scale-110
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-blanco-hueso
                via-transparent
                to-transparent
                lg:bg-gradient-to-l
                lg:from-black/5
                lg:via-transparent
                lg:to-blanco-hueso
              "
            />
          </div>

          <div className="absolute inset-0 bg-dorado-principal/5 blur-3xl scale-110 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}

export default BenefitsHero