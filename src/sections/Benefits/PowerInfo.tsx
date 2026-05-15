import { motion } from 'framer-motion'
import { fadeUpVariants } from '@/hooks/useFadeUp'
import Beneficio from '../../assets/Beneficio2.png'

const PowerInfo = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Columna izquierda — Texto */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-negro-premium leading-tight">
            Información que te da poder
          </h2>

          <div className="w-12 h-0.5 bg-dorado-principal" />

          <p className="font-inter text-negro-premium/60 text-base leading-relaxed">
            Los números cuentan la historia de tu negocio. Nosotros te ayudamos
            a entenderla y usarla a tu favor.
          </p>

          {/* Quote */}
          <div className="flex gap-4 mt-2">
            <span className="font-cormorant text-7xl text-dorado-principal leading-none mt-[-12px] shrink-0">
              "
            </span>
            <p className="font-cormorant text-2xl text-negro-premium italic leading-snug">
              No se trata solo de cumplir, se trata de crecer con inteligencia financiera.
            </p>
          </div>
        </motion.div>

        {/* Columna derecha — Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl overflow-hidden h-80 md:h-[420px]"
        >
          <img
            src={Beneficio}
            alt="Información financiera"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default PowerInfo
