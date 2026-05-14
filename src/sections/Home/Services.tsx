import { motion } from 'framer-motion'
import { services } from '@/constants/services'
import { fadeUpVariants, staggerContainer, fadeUpItem } from '@/hooks/useFadeUp'

const Services = () => {
  return (
    <section id="servicios" className="bg-blanco-hueso pt-10 pb-16">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto px-6"
      >

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-sm font-semibold tracking-widest text-dorado-principal uppercase mb-3">
            Servicios
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-negro-premium leading-tight">
            Soluciones contables <br /> para cada etapa de tu negocio.
          </h2>
          <div className="w-12 h-0.5 bg-dorado-principal mx-auto mt-4" />
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                variants={fadeUpItem}
                key={service.id}
                className="bg-white border border-gris-claro rounded-sm px-8 py-12 flex flex-col gap-5 hover:border-dorado-principal hover:shadow-lg transition-all duration-300 group items-center justify-center min-h-[280px]"
              >
                <Icon
                  size={42}
                  className="text-dorado-principal group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-cormorant text-xl font-bold text-negro-premium">
                  {service.title}
                </h3>
                <p className="font-inter text-sm text-center text-negro-premium/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Services