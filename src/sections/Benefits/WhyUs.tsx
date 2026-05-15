import { motion } from 'framer-motion'
import { whyUs } from '@/constants/benefits'
import { fadeUpVariants, staggerContainer, fadeUpItem } from '@/hooks/useFadeUp'

const WhyUs = () => {
  return (
    <section className="bg-white py-20">
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
            ¿Por qué trabajar con nosotros?
          </h2>
          <div className="w-12 h-0.5 bg-dorado-principal mx-auto mt-4" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyUs.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                variants={fadeUpItem}
                className="flex flex-col gap-4 p-8 border items-center border-gris-claro rounded-sm hover:border-dorado-principal hover:shadow-md transition-all duration-300 group"
              >
                <div className="                    mb-7 flex h-16 w-16 items-center justify-center
                    rounded-full bg-dorado-principal/10 text-dorado-principal
                    transition-all duration-300
                    group-hover:bg-dorado-principal group-hover:text-white
                    group-hover:scale-105">
                  <Icon size={34} className="text-dorado-principal group-hover:text-white" />
                </div>
                <h3 className="font-cormorant text-xl font-bold text-negro-premium">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-negro-premium/60 text-center leading-relaxed">
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

export default WhyUs
