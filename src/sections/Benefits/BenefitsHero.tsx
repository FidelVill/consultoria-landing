import { motion } from 'framer-motion'
import { CalendarCheck, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Desk from '../../assets/accounting-desk.png'
import { fadeUpVariants } from '@/hooks/useFadeUp'

const BenefitsHero = () => {
  return (
    <section className="bg-blanco-hueso overflow-hidden">
      <div className="flex items-stretch min-h-[550px]">

        {/* Columna izquierda */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col gap-6 max-w-[640px] ml-auto
                      px-6 md:pl-[max(24px,calc((100vw-1280px)/2+24px))]
                      pt-32 pb-16"
        >
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-negro-premium leading-[0.95] mb-8">
            Más que números,{' '}
            <span className="text-dorado-principal">
              estrategias que impulsan tu negocio.
            </span>
          </h1>

          <div className="w-12 h-0.5 bg-dorado-principal" />

          <p className="font-inter text-negro-premium/65 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            En nuestra consultoría contable, convertimos la información financiera
            en decisiones inteligentes que generan crecimiento, estabilidad y
            tranquilidad para ti y tu empresa.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Button
              variant="primary"
              icon={<CalendarCheck size={18} />}
              onClick={() => window.open('https://wa.me/524431415032', '_blank')}
            >
              Agendar asesoría
            </Button>
            <Button
              variant="outline"
              icon={<MessageCircle size={18} />}
              className="border-negro-premium text-negro-premium hover:border-dorado-principal hover:text-dorado-principal"
              onClick={() => window.open('https://wa.me/524431415032', '_blank')}
            >
              Hablar por WhatsApp
            </Button>
          </div>
        </motion.div>

        {/* Columna derecha — imagen al borde */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 relative hidden md:block"
        >
          <img
            src={Desk}
            alt="Consultoría contable"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ clipPath: 'ellipse(100% 100% at 100% 50%)' }}
          />
        </motion.div>

      </div>
    </section>
  )
}

export default BenefitsHero
