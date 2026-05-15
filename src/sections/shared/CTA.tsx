import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import Button from '@/components/ui/Button'
import { fadeUpVariants } from '@/hooks/useFadeUp'

const CTA = () => {
  return (
    <section className="bg-blanco-hueso px-6 py-5">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="
        relative overflow-hidden
        w-full rounded-[2rem]
        bg-negro-premium px-6 py-12 md:px-12 md:py-14
        shadow-[0_28px_80px_rgba(10,10,10,0.18)]
      "
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-dorado-principal/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-dorado-principal/10 blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-dorado-principal text-white shadow-[0_0_40px_rgba(200,162,77,0.35)]">
              <FaWhatsapp size={30} />
            </div>

            <div>
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.28em] text-dorado-principal mb-3">
                Agenda tu asesoría
              </p>

              <h3 className="font-cormorant text-3xl md:text-5xl font-semibold text-blanco-hueso leading-none">
                ¿Listo para tomar mejores decisiones con tus números?
              </h3>

              <p className="font-inter text-sm md:text-base text-blanco-hueso/65 mt-4 max-w-2xl leading-relaxed">
                Hablemos por WhatsApp y descubre cómo podemos ayudarte a ordenar,
                entender y hacer crecer tu negocio.
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            icon={<FaWhatsapp size={18} />}
            onClick={() => window.open('https://wa.me/524431415032', '_blank')}
            className="
              shrink-0 rounded-full px-8 py-4
              bg-dorado-principal text-white
              hover:bg-dorado-claro
              shadow-[0_14px_35px_rgba(200,162,77,0.28)]
              transition-all duration-300
            "
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA