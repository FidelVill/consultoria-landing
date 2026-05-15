import { motion } from 'framer-motion'
import { Award, Users, Star, Lock, Handshake } from 'lucide-react'
import {
  fadeUpVariants,
  staggerContainer,
  fadeUpItem,
} from '@/hooks/useFadeUp'

const stats = [
  {
    id: 1,
    icon: Award,
    value: '10+',
    label: 'Años de experiencia brindando asesoría contable y financiera.',
  },
  {
    id: 2,
    icon: Users,
    value: '250+',
    label: 'Empresas y emprendedores que han confiado en nosotros.',
  },
  {
    id: 3,
    icon: Star,
    value: '98%',
    label: 'Clientes satisfechos con nuestros resultados y atención.',
  },
  {
    id: 4,
    icon: Lock,
    value: '100%',
    label: 'Seguridad y confidencialidad en toda tu información financiera.',
  },
  {
    id: 5,
    icon: Handshake,
    value: '24/7',
    label: 'Acompañamiento cercano y compromiso real con tu crecimiento.',
  },
]

const TrustStats = () => {
  return (
    <section className="bg-blanco-hueso py-14 md:py-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-negro-premium leading-tight max-w-5xl mx-auto">
            Confianza que se construye con resultados
          </h2>

          <div className="w-12 h-0.5 bg-dorado-principal mx-auto mt-4" />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-5
            gap-5 md:gap-6
          "
        >
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <motion.div
                key={stat.id}
                variants={fadeUpItem}
                className="
                  flex flex-col items-center text-center
                  min-h-[320px]
                  xl:min-h-[360px]
                  gap-4
                  p-7 md:p-8
                  border border-gris-claro
                  rounded-2xl
                  bg-white/80
                  hover:border-dorado-principal
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  transition-all duration-300
                  group
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex items-center justify-center
                    h-16 w-16
                    rounded-full
                    bg-dorado-principal/10
                    transition-all duration-300
                    group-hover:bg-dorado-principal
                    group-hover:scale-105
                    shrink-0
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-dorado-principal
                      group-hover:text-white
                      transition-all duration-300
                    "
                  />
                </div>

                {/* Value */}
                <p
                  className="
                    font-inter
                    text-4xl md:text-5xl
                    font-black
                    tracking-tight
                    text-dorado-principal
                    leading-none
                  "
                >
                  {stat.value}
                </p>

                {/* Description */}
                <p
                  className="
                    font-inter
                    text-sm md:text-[15px]
                    text-negro-premium/65
                    leading-relaxed
                    max-w-[240px]
                  "
                >
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustStats