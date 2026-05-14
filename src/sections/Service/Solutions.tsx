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
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="font-inter text-sm font-semibold tracking-[0.35em] text-dorado-principal uppercase mb-5">
              Nuestros servicios
            </p>

            <h2 className="font-cormorant text-4xl md:text-6xl font-semibold text-negro-premium leading-none mb-7">
              Soluciones contables <br className="hidden md:block" />
              integrales para tu negocio
            </h2>

            <div className="w-14 h-[2px] bg-dorado-principal mb-8" />

            <p className="font-inter text-base md:text-lg leading-relaxed text-negro-premium/60 max-w-xl">
              Ofrecemos servicios especializados para mantener tus finanzas en
              orden, cumplir con tus obligaciones y tomar decisiones estratégicas
              con confianza.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <img
              src={accountingDesk}
              alt="Escritorio con laptop, calculadora y reportes financieros"
              className="w-full h-[360px] object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.25 }}
          className="
            mt-12
            rounded-2xl bg-white
            border border-gris-claro
            shadow-[0_20px_60px_rgba(10,10,10,0.08)]
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            overflow-hidden
          "
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <article
                key={benefit.id}
                className="
                  px-8 py-10 text-center
                  flex flex-col items-center
                  border-b sm:border-r border-gris-claro
                  last:border-r-0
                  lg:border-b-0
                "
              >
                <Icon
                  size={42}
                  strokeWidth={1.8}
                  className="text-dorado-principal mb-7"
                />

                <h3 className="font-space text-lg font-bold text-negro-premium mb-4 tracking-[-0.04em]">
                  {benefit.title}
                </h3>

                <p className="font-inter text-sm leading-relaxed text-negro-premium/60 max-w-[220px]">
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