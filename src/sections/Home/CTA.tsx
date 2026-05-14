import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import { fadeUpVariants } from '@/hooks/useFadeUp'

const CTA = () => {
  return (
    <motion.section
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-negro-premium py-14 mx-6 rounded-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Izquierda */}
        <div className="flex items-center gap-5">
          <div className="bg-dorado-principal rounded-full p-4 shrink-0">
            <FaWhatsapp size={28} className="text-white" />
          </div>
          <div>
            <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-blanco-hueso leading-snug">
              ¿Listo para tomar mejores decisiones <br className="hidden md:block" /> con tus números?
            </h3>
            <p className="font-inter text-sm text-blanco-hueso/60 mt-1">
              Hablemos por WhatsApp y descubre cómo podemos ayudarte.
            </p>
          </div>
        </div>

        {/* Botón */}
        <Button
          variant="primary"
          icon={<FaWhatsapp size={18} />}
          onClick={() => window.open('https://wa.me/TUNUMERO', '_blank')}
          className="shrink-0 px-8 py-4 rounded-2xl text-white"
        >
          Contactar por WhatsApp
        </Button>

      </div>
    </motion.section>
  )
}

export default CTA