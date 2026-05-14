import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { benefits } from '@/constants/about'
import aboutImage from '@/assets/about.png'
import { fadeUpVariants } from '@/hooks/useFadeUp'

const About = () => {
  return (
    <section id="nosotros" className="bg-blanco-hueso pt-18 pb-20 align-middle items-center">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >

        {/* Columna izquierda — Texto */}
        <div className="flex flex-col gap-6">

          {/* Etiqueta */}
          <p className="font-inter text-sm font-semibold tracking-widest text-dorado-principal uppercase">
            ¿Por qué elegirnos?
          </p>

          {/* Título */}
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-negro-premium leading-tight">
            Más que contadores, <br /> somos tus aliados.
          </h2>

          {/* Línea dorada */}
          <div className="w-12 h-0.5 bg-dorado-principal" />

          {/* Lista de beneficios */}
          <ul className="flex flex-col gap-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  className="text-dorado-principal shrink-0"
                />
                <span className="font-inter text-negro-premium/80 text-base">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna derecha — Imagen */}
        <div className="rounded-2xl overflow-hidden bg-negro-premium h-80 md:h-[420px] flex items-center justify-center">
          <img
            src={aboutImage}
            alt="Carlos González"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

      </motion.div>
    </section>
  )
}

export default About