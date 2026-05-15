import { motion } from 'framer-motion'
import { ShieldCheck, Clock3, BadgeCheck, BarChart3 } from 'lucide-react'
import accountingDesk from '@/assets/accounting-desk.png'

const benefits = [
  {
    id: 1,
    title: 'Información confiable',
    description: 'Reportes precisos y oportunos para decidir mejor.',
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: 'Ahorra tiempo',
    description: 'Nos encargamos de tu contabilidad para que te enfoques en crecer.',
    icon: Clock3,
  },
  {
    id: 3,
    title: 'Cumplimiento asegurado',
    description: 'Cumplimos con todas tus obligaciones fiscales y contables.',
    icon: BadgeCheck,
  },
  {
    id: 4,
    title: 'Visión de crecimiento',
    description:
      'Te ayudamos a entender tus números y planear el futuro de tu negocio.',
    icon: BarChart3,
  },
]

const Solutions = () => {
  return (
    <section
      id="soluciones-contables"
      className="relative bg-blanco-hueso overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 md:px-8 py-14 md:py-16 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <p className="font-inter text-xs md:text-sm font-semibold tracking-[0.28em] md:tracking-[0.35em] text-dorado-principal uppercase mb-4 md:mb-5">
              Nuestros servicios
            </p>

            <h2 className="font-cormorant text-[38px] sm:text-5xl md:text-6xl font-semibold text-negro-premium leading-[0.95] md:leading-none mb-6 md:mb-7">
              Soluciones contables <br className="hidden md:block" />
              integrales para tu negocio
            </h2>

            <div className="w-14 h-[2px] bg-dorado-principal mb-7 md:mb-8 mx-auto lg:mx-0" />

            <p className="font-inter text-sm md:text-lg leading-relaxed text-negro-premium/60 max-w-xl mx-auto lg:mx-0">
              Ofrecemos servicios especializados para mantener tus finanzas en
              orden, cumplir con tus obligaciones y tomar decisiones estratégicas
              con confianza.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-dorado-principal/10 blur-3xl rounded-full" />

            <div
              className="
                relative overflow-hidden
                rounded-[28px]
                border border-[#ece6dc]
                bg-white
                shadow-[0_20px_60px_rgba(10,10,10,0.10)]
              "
            >
              <img
                src={accountingDesk}
                alt="Escritorio con laptop, calculadora y reportes financieros"
                className="
                  w-full
                  h-[240px] sm:h-[300px] lg:h-[360px]
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              <div className="absolute left-5 bottom-5 rounded-full bg-white/90 backdrop-blur-md px-5 py-2 border border-white/60">
                <p className="font-inter text-xs font-semibold tracking-[0.22em] uppercase text-negro-premium">
                  Finanzas claras
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.25 }}
          className="
            mt-10 md:mt-12
            rounded-2xl bg-white
            border border-gris-claro
            shadow-[0_20px_60px_rgba(10,10,10,0.08)]
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            overflow-hidden
          "
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <article
                key={benefit.id}
                className={`
                  px-6 py-8 md:px-8 md:py-10 text-center
                  flex flex-col items-center
                  border-gris-claro
                  ${index !== benefits.length - 1 ? 'border-b sm:border-r' : ''}
                  ${index === 1 ? 'sm:border-r-0 lg:border-r' : ''}
                  ${index >= 2 ? 'sm:border-b-0' : ''}
                  lg:border-b-0
                `}
              >
                <Icon
                  size={38}
                  strokeWidth={1.8}
                  className="text-dorado-principal mb-5 md:mb-7"
                />

                <h3 className="font-space text-base md:text-lg font-bold text-negro-premium mb-3 md:mb-4 tracking-[-0.04em]">
                  {benefit.title}
                </h3>

                <p className="font-inter text-sm leading-relaxed text-negro-premium/60 max-w-[240px]">
                  {benefit.description}
                </p>
              </article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions