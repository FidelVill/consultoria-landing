import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { benefits } from '@/constants/about'
import aboutImage from '@/assets/about.png'

const About = () => {
  return (
    <section id="nosotros" className="bg-blanco-hueso py-24">
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Columna izquierda — Texto */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col"
        >
          <p className="font-inter text-sm font-semibold tracking-[0.32em] text-dorado-principal uppercase mb-5">
            ¿Por qué elegirnos?
          </p>

          <h2 className="font-cormorant text-4xl md:text-6xl font-semibold text-negro-premium leading-none">
            Más que contadores, <br className="hidden sm:block" />
            somos tus aliados.
          </h2>

          <div className="w-14 h-[2px] bg-dorado-principal mt-7 mb-8" />

          <p className="font-inter text-base md:text-lg leading-relaxed text-negro-premium/65 max-w-xl mb-8">
            Te acompañamos con claridad, estrategia y orden financiero para que
            tomes mejores decisiones en cada etapa de tu negocio.
          </p>

          <ul className="grid grid-cols-1 gap-4 max-w-xl">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                className="
                  group flex items-start gap-4 rounded-xl border border-negro-premium/10
                  bg-white px-5 py-4 shadow-[0_10px_30px_rgba(10,10,10,0.035)]
                  transition-all duration-300
                  hover:border-dorado-principal/70 hover:shadow-[0_18px_45px_rgba(10,10,10,0.07)]
                "
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dorado-principal/10 text-dorado-principal transition-all duration-300 group-hover:bg-dorado-principal group-hover:text-white">
                  <CheckCircle size={18} strokeWidth={2} />
                </div>

                <span className="font-inter text-negro-premium/75 text-base leading-relaxed">
                  {benefit}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Columna derecha — Imagen */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] border border-dorado-principal/25" />

          <div className="relative overflow-hidden rounded-[2rem] bg-negro-premium h-[380px] md:h-[520px] shadow-[0_28px_80px_rgba(10,10,10,0.14)]">
            <img
              src={aboutImage}
              alt="Equipo de asesoría contable"
              className="w-full h-full object-cover opacity-85"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-negro-premium/55 via-negro-premium/10 to-transparent" />

            <div className="absolute left-6 right-6 bottom-6 rounded-2xl border border-white/15 bg-white/90 backdrop-blur-md px-6 py-5 shadow-xl">
              <p className="font-inter text-xs font-semibold tracking-[0.22em] uppercase text-dorado-principal mb-2">
                Acompañamiento experto
              </p>

              <p className="font-cormorant text-2xl font-semibold leading-tight text-negro-premium">
                Finanzas claras para decisiones inteligentes.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default About