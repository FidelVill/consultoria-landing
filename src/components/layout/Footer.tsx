import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { fadeUpVariants } from '@/hooks/useFadeUp'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/service' },
  { label: 'Nosotros', href: '/about' },
  { label: 'Beneficios', href: '/benefits' },
  { label: 'Contacto', href: '/contact' },
]

const services = [
  { label: 'Contabilidad', href: '/service' },
  { label: 'Declaraciones', href: '/service' },
  { label: 'Asesoría Financiera', href: '/service' },
  { label: 'Consultoría', href: '/service' },
]

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/5">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="
          max-w-7xl mx-auto
          px-6
          py-16 sm:py-18
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-[1.15fr_1fr_1.35fr]
          gap-12 lg:gap-14
        "
      >
        {/* Marca */}
        <div>
          <p className="font-cormorant text-3xl font-semibold text-dorado-principal tracking-[0.08em]">
            Carlos González
          </p>

          <div className="w-12 h-[2px] bg-dorado-principal mt-5 mb-6" />

          <p className="font-inter text-sm leading-relaxed text-white/55 max-w-sm">
            Asesoría contable y financiera enfocada en ayudarte a crecer con claridad,
            estrategia y control financiero.
          </p>

          <div className="flex items-center gap-3 mt-7">
            {[
              { icon: FaFacebook, href: '#' },
              { icon: FaInstagram, href: '#' },
              { icon: FaLinkedinIn, href: '#' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-white/10
                  text-white/50
                  hover:border-dorado-principal
                  hover:bg-dorado-principal
                  hover:text-white
                  transition-all duration-300
                "
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Navegación + Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Navegación */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-[0.24em] text-dorado-principal mb-6">
              Navegación
            </h4>

            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      font-inter text-sm
                      text-white/55
                      hover:text-dorado-principal
                      transition-colors duration-300
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-[0.24em] text-dorado-principal mb-6">
              Servicios
            </h4>

            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="
                      font-inter text-sm
                      text-white/55
                      hover:text-dorado-principal
                      transition-colors duration-300
                    "
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-inter text-xs uppercase tracking-[0.24em] text-dorado-principal mb-6">
            Contacto
          </h4>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <ul className="flex flex-col gap-5">
              {/* WhatsApp */}
              <li className="flex items-start gap-4">
                <MessageCircle
                  size={18}
                  className="text-dorado-principal shrink-0 mt-0.5"
                />

                <a
                  href="https://wa.me/524431415032"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    font-inter text-sm
                    text-white/65
                    hover:text-dorado-principal
                    transition-colors
                  "
                >
                  443 141 5032
                </a>
              </li>

              {/* Email */}
              <li className="flex items-start gap-4">
                <Mail
                  size={18}
                  className="text-dorado-principal shrink-0 mt-0.5"
                />

                <a
                  href="mailto:Carlos.gonzalez@desp-sercofis.com"
                  className="
                    font-inter text-sm leading-relaxed
                    text-white/65
                    hover:text-dorado-principal
                    transition-colors
                    break-all sm:break-words
                  "
                >
                  Carlos.gonzalez@desp-sercofis.com
                </a>
              </li>

              {/* Dirección */}
              <li className="flex items-start gap-4">
                <MapPin
                  size={18}
                  className="text-dorado-principal shrink-0 mt-0.5"
                />

                <span className="font-inter text-sm leading-relaxed text-white/65">
                  Francisco Javier Mina 17, Int. 4, Col. Centro,
                  Los Reyes de Salgado, Michoacán
                </span>
              </li>

              {/* Horario */}
              <li className="flex items-start gap-4">
                <Clock
                  size={18}
                  className="text-dorado-principal shrink-0 mt-0.5"
                />

                <span className="font-inter text-sm text-white/65">
                  Lun – Vie · 9:00 – 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div
          className="
            max-w-7xl mx-auto
            px-6 py-6
            flex flex-col md:flex-row
            items-center justify-between
            gap-3
          "
        >
          <p className="font-inter text-xs text-white/35 text-center md:text-left">
            © 2026 Carlos González · Consultoría Contable.
            Todos los derechos reservados.
          </p>

          <p className="font-inter text-xs text-white/25 text-center md:text-right">
            Diseñado con precisión y profesionalismo.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer