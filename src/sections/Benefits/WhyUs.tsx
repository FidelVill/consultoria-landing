import { motion } from 'framer-motion'
import { whyUs } from '@/constants/benefits'
import { fadeUpVariants, staggerContainer, fadeUpItem } from '@/hooks/useFadeUp'

const WhyUs = () => {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-negro-premium leading-tight">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {whyUs.map((item) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.id}
                variants={fadeUpItem}
                className="
                  flex flex-col items-center text-center
                  gap-3 md:gap-4
                  p-6 sm:p-7 md:p-8
                  border border-gris-claro
                  rounded-2xl md:rounded-sm
                  hover:border-dorado-principal hover:shadow-md
                  transition-all duration-300 group
                "
              >
                <div
                  className="
                    mb-3 md:mb-5
                    flex h-14 w-14 md:h-16 md:w-16
                    items-center justify-center
                    rounded-full
                    bg-dorado-principal/10 text-dorado-principal
                    transition-all duration-300
                    group-hover:bg-dorado-principal
                    group-hover:text-white
                    group-hover:scale-105
                  "
                >
                  <Icon
                    size={30}
                    className="md:size-[34px] text-dorado-principal group-hover:text-white"
                  />
                </div>

                <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-negro-premium leading-tight">
                  {item.title}
                </h3>

                <p className="font-inter text-sm md:text-base text-negro-premium/60 text-center leading-relaxed max-w-sm">
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