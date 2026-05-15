import { motion } from 'framer-motion'
import { Award, Users, Star, Lock, Handshake } from 'lucide-react'
import { fadeUpVariants, staggerContainer, fadeUpItem } from '@/hooks/useFadeUp'

const stats = [
  {
    id: 1,
    icon: Award,
    value: '10+',
    label: 'Años de experiencia',
  },
  {
    id: 2,
    icon: Users,
    value: '250+',
    label: 'Clientes atendidos',
  },
  {
    id: 3,
    icon: Star,
    value: '98%',
    label: 'Satisfacción',
  },
  {
    id: 4,
    icon: Lock,
    value: 'Confidencialidad total',
    label: 'Tu información siempre protegida',
  },
  {
    id: 5,
    icon: Handshake,
    value: 'Compromiso real',
    label: 'Tu éxito es nuestro compromiso',
  },
]

const TrustStats = () => {
  return (
    <section className="bg-blanco-hueso py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-negro-premium">
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.id}
                variants={fadeUpItem}
                className="flex flex-col items-center text-center gap-3 p-6 border border-gris-claro rounded-sm hover:border-dorado-principal hover:shadow-md transition-all duration-300 group"
              >
                <Icon
                  size={32}
                  className="text-dorado-principal group-hover:scale-110 transition-transform duration-300"
                />
                <p className="font-cormorant text-3xl font-bold text-negro-premium leading-tight">
                  {stat.value}
                </p>
                <p className="font-inter text-xs text-negro-premium/60 leading-snug">
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
