import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { fadeUpVariants } from '@/hooks/useFadeUp'

const navLinks = ['Inicio', 'Servicios', 'Nosotros', 'Beneficios', 'Contacto']
const services = ['Contabilidad', 'Declaraciones', 'Asesoría Financiera', 'Consultoría']

const Footer = () => {
  return (
    <footer className="bg-blanco-hueso border-t border-gris-claro">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >

        {/* Columna 1 — Marca */}
        <div className="flex flex-col gap-4">
          <p className="font-cormorant text-xl font-bold text-negro-premium">
            Carlos González
          </p>
          <p className="font-inter text-sm text-negro-premium/60 leading-relaxed">
            Asesoría contable y financiera pensada en el crecimiento de tu negocio.
          </p>
          {/* Redes sociales */}
          <div className="flex gap-4 mt-2">
            {[
                { icon: FaFacebook, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaLinkedinIn, href: '#' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-negro-premium/40 hover:text-dorado-principal transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Columna 2 — Enlaces */}
        <div className="flex flex-col gap-4">
          <h4 className="font-inter font-semibold text-negro-premium text-sm tracking-wide uppercase">
            Enlaces
          </h4>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-inter text-sm text-negro-premium/60 hover:text-dorado-principal transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 — Servicios */}
        <div className="flex flex-col gap-4">
          <h4 className="font-inter font-semibold text-negro-premium text-sm tracking-wide uppercase">
            Servicios
          </h4>
          <ul className="flex flex-col gap-2">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="#servicios"
                  className="font-inter text-sm text-negro-premium/60 hover:text-dorado-principal transition-colors duration-200"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 4 — Contacto */}
        <div className="flex flex-col gap-4">
          <h4 className="font-inter font-semibold text-negro-premium text-sm tracking-wide uppercase">
            Contacto
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <MessageCircle size={16} className="text-dorado-principal shrink-0" />
              <span className="font-inter text-sm text-negro-premium/60">WhatsApp disponible</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-dorado-principal shrink-0" />
              <span className="font-inter text-sm text-negro-premium/60">contacto@carlosgonzalez.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-dorado-principal shrink-0" />
              <span className="font-inter text-sm text-negro-premium/60">Ciudad de México</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} className="text-dorado-principal shrink-0" />
              <span className="font-inter text-sm text-negro-premium/60">Lun – Vie, 9:00 – 18:00</span>
            </li>
          </ul>
        </div>

      </motion.div>

      {/* Barra inferior */}
      <div className="border-t border-gris-claro">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-negro-premium/50">
            © 2025 Carlos González · Consultoría Contable. Todos los derechos reservados.
          </p>
          <p className="font-inter text-xs text-negro-premium/40">
            Diseñado con compromiso y profesionalismo.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer