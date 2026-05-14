import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

import Button from '@/components/ui/Button'
import logo from '../../assets/logo.png'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Contacto', href: '#contacto' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('Inicio')

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-dorado-principal/15 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3"
          onClick={() => setActive('Inicio')}
        >
          <img
            src={logo}
            alt="Carlos González"
            className="h-14 w-14 object-contain drop-shadow-[0_0_18px_rgba(212,175,55,0.28)]"
          />

          <div className="hidden sm:block leading-none">
            <p className="font-cormorant text-xl font-bold text-dorado-principal tracking-[0.12em] uppercase">
              Carlos González
            </p>

            <p className="font-inter text-[9px] text-blanco-hueso/55 tracking-[0.25em] uppercase mt-1">
              Consultoría contable
            </p>
          </div>
        </a>

        {/* Links desktop */}
        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`
                  relative pb-2
                  font-inter text-sm tracking-wide
                  transition-all duration-300
                  ${active === link.label
                    ? 'text-dorado-principal'
                    : 'text-blanco-hueso/65 hover:text-blanco-hueso'
                  }
                `}
              >
                {link.label}

                <span
                  className={`
                    absolute left-1/2 -translate-x-1/2 bottom-0
                    h-[2px] rounded-full bg-dorado-principal
                    transition-all duration-300
                    ${active === link.label
                      ? 'w-6 opacity-100'
                      : 'w-0 opacity-0'
                    }
                  `}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Botón WhatsApp desktop */}
        <div className="hidden lg:block">
          <Button
            variant="outline"
            icon={<FaWhatsapp size={16} />}
            onClick={() => window.open('https://wa.me/TUNUMERO', '_blank')}
            className="
              rounded-full
              border border-dorado-principal/35
              bg-dorado-principal/10
              text-blanco-hueso
              px-6 py-3
              hover:bg-dorado-principal
              hover:border-dorado-principal
              hover:text-white
              transition-all duration-300
              shadow-[0_0_24px_rgba(200,162,77,0.12)]
              hover:shadow-[0_0_34px_rgba(200,162,77,0.28)]
            "
          >
            WhatsApp
          </Button>
        </div>

        {/* Botón mobile */}
        <button
          className="
            lg:hidden text-blanco-hueso
            border border-dorado-principal/25
            p-2 rounded-xl
            hover:bg-dorado-principal/10
            transition-colors
          "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-dorado-principal/15 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label)
                setIsOpen(false)
              }}
              className={`
                font-inter text-sm tracking-wide transition-colors
                ${active === link.label
                  ? 'text-dorado-principal'
                  : 'text-blanco-hueso/75 hover:text-dorado-principal'
                }
              `}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3">
            <Button
              variant="outline"
              icon={<FaWhatsapp size={16} />}
              onClick={() => window.open('https://wa.me/TUNUMERO', '_blank')}
              className="
                w-full justify-center rounded-full
                border border-dorado-principal/35
                bg-dorado-principal/10
                text-blanco-hueso
                hover:bg-dorado-principal
                hover:text-white
                transition-all duration-300
              "
            >
              WhatsApp
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar