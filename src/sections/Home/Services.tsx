import { motion } from 'framer-motion'
import { services } from '@/constants/services'

const Services = () => {
  return (
    <section id="servicios" className="bg-blanco-hueso py-8">
      <div className="max-w-[1500px] mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-inter text-sm font-semibold tracking-[0.35em] text-dorado-principal uppercase mb-5">
            Servicios
          </p>

          <h2 className="font-cormorant text-4xl md:text-6xl font-semibold text-negro-premium leading-none">
            Soluciones contables <br className="hidden md:block" />
            para cada etapa de tu negocio.
          </h2>

          <div className="w-14 h-[2px] bg-dorado-principal mx-auto mt-7" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, amount: 0.25 }}
                className="
                  group relative min-h-[310px]
                  rounded-2xl border border-gris-claro bg-white
                  px-8 py-10 text-center
                  flex flex-col items-center justify-center
                  shadow-[0_10px_30px_rgba(10,10,10,0.04)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-dorado-principal
                  hover:shadow-[0_24px_60px_rgba(10,10,10,0.10)]
                "
              >
                <div className="absolute left-6 right-6 bottom-0 h-[3px] bg-dorado-principal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                <div
                  className="
                    mb-7 flex h-16 w-16 items-center justify-center
                    rounded-full bg-dorado-principal/10 text-dorado-principal
                    transition-all duration-300
                    group-hover:bg-dorado-principal group-hover:text-white
                    group-hover:scale-105
                  "
                >
                  <Icon size={34} strokeWidth={1.8} />
                </div>

                <h3 className="font-space text-xl font-bold text-negro-premium mb-4 tracking-[-0.04em]">
                  {service.title}
                </h3>

                <p className="font-inter text-sm leading-relaxed text-negro-premium/60 max-w-[230px]">
                  {service.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services