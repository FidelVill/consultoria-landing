import { motion } from 'framer-motion'
import { TrendingUp, ShieldCheck, LayoutList, Smile } from 'lucide-react'
import { fadeUpVariants, staggerContainer, fadeUpItem } from '@/hooks/useFadeUp'

const impacts = [
  {
    id: 1,
    icon: TrendingUp,
    title: '+ Rentabilidad',
    description: 'Optimizamos recursos y mejoramos tus resultados.',
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: '+ Seguridad',
    description: 'Cumples con el SAT y evitas riesgos fiscales.',
  },
  {
    id: 3,
    icon: LayoutList,
    title: '+ Orden',
    description: 'Procesos contables claros y bajo control.',
  },
  {
    id: 4,
    icon: Smile,
    title: '+ Tranquilidad',
    description: 'Tú tranquilo, tu negocio siempre protegido.',
  },
]

const Impact = () => {
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
            El impacto de una buena asesoría
          </h2>
          <div className="w-12 h-0.5 bg-dorado-principal mx-auto mt-4" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {impacts.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                variants={fadeUpItem}
                className="flex flex-col gap-4 p-8 border items-center border-gris-claro rounded-sm hover:border-dorado-principal hover:shadow-md transition-all duration-300 group"
              >
                <Icon
                  size={32}
                  className="text-dorado-principal group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-cormorant text-2xl font-bold text-negro-premium">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-center text-negro-premium/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Impact
