import { motion } from 'framer-motion'
import { Search, Lightbulb, Target, Settings, TrendingUp } from 'lucide-react'
import { fadeUpVariants, staggerContainer, fadeUpItem } from '@/hooks/useFadeUp'

const cx = 200, cy = 200
const outerR = 175
const innerR = 58
const labelR = 118
const startAngle = -108
const segmentAngle = 72

const toRad = (deg: number) => (deg * Math.PI) / 180

const services = [
  { icon: Search, lines: ['Analizamos', 'tu información'] },
  { icon: Lightbulb, lines: ['Detectamos', 'oportunidades'] },
  { icon: Target, lines: ['Diseñamos', 'estrategias'] },
  { icon: Settings, lines: ['Implementamos', 'soluciones'] },
  { icon: TrendingUp, lines: ['Te acompañamos', 'y medimos resultados'] },
]

const listItems = [
  'Contabilidad mensual y anual',
  'Declaraciones fiscales',
  'Asesoría financiera estratégica',
  'Nómina y obligaciones patronales',
  'Planeación fiscal',
  'Análisis y reportes financieros',
]

const divLines = Array.from({ length: 5 }, (_, i) => {
  const angle = toRad(startAngle + i * segmentAngle)
  return {
    x1: cx + innerR * Math.cos(angle),
    y1: cy + innerR * Math.sin(angle),
    x2: cx + outerR * Math.cos(angle),
    y2: cy + outerR * Math.sin(angle),
  }
})

const positions = Array.from({ length: 5 }, (_, i) => {
  const mid = toRad(startAngle + (i + 0.5) * segmentAngle)
  return {
    lx: cx + labelR * Math.cos(mid),
    ly: cy + labelR * Math.sin(mid),
  }
})

const WhatWeDo = () => {
  return (
    <section className="bg-negro-premium py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Columna izquierda */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-blanco-hueso leading-tight">
            ¿Qué hacemos <br /> por tu negocio?
          </h2>
          <div className="w-12 h-0.5 bg-dorado-principal" />
          <p className="font-inter text-blanco-hueso/60 text-base leading-relaxed">
            Ofrecemos una visión integral de tus finanzas para ayudarte a operar
            con orden, cumplir con tus obligaciones y aprovechar nuevas oportunidades.
          </p>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-3 mt-2"
          >
            {listItems.map((item, i) => (
              <motion.li key={i} variants={fadeUpItem} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-dorado-principal shrink-0" />
                <span className="font-inter text-sm text-blanco-hueso/70">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Columna derecha — Diagrama */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-[400px] h-[400px]">

            {/* SVG base */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
              <circle cx={cx} cy={cy} r={outerR} fill="#F8F6F2" stroke="#C8A24D" strokeWidth="1" />
              {divLines.map((line, i) => (
                <line
                  key={i}
                  x1={line.x1} y1={line.y1}
                  x2={line.x2} y2={line.y2}
                  stroke="#C8A24D"
                  strokeWidth="1"
                />
              ))}
              <circle cx={cx} cy={cy} r={innerR} fill="#0A0A0A" stroke="#C8A24D" strokeWidth="1.5" />
            </svg>

            {/* Ítems posicionados en segmentos */}
            {services.map(({ icon: Icon, lines }, i) => {
              const { lx, ly } = positions[i]
              const pct = (v: number) => `${(v / 400) * 100}%`
              return (
                <div
                  key={i}
                  className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2 w-24"
                  style={{ left: pct(lx), top: pct(ly) }}
                >
                  <Icon size={18} className="text-dorado-principal mb-1" />
                  {lines.map((line, j) => (
                    <span key={j} className="font-inter text-[10px] text-negro-premium/80 text-center leading-tight block">
                      {line}
                    </span>
                  ))}
                </div>
              )
            })}

            {/* Centro — Logo */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center"
              style={{ left: '50%', top: '50%', width: `${(innerR * 2 / 400) * 100}%` }}
            >
              <img src="/logo.png" alt="CG" className="w-8 h-8 object-contain mb-1" />
              <p className="font-inter text-[8px] font-semibold text-dorado-principal uppercase tracking-wide leading-tight">
                Tu negocio <br /> en el centro
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default WhatWeDo
