import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

import Button from '@/components/ui/Button'
import logo from '../../assets/logo.png'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/service' },
  { label: 'Nosotros', href: '/about' },
  { label: 'Beneficios', href: '/benefits' },
  { label: 'Contacto', href: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleNavigate = (href: string) => {
    setIsOpen(false)

    navigate(href)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const isActiveLink = (href: string) => {
    if (href === '/') return location.pathname === '/'
    if (href === '/service') return location.pathname === '/service'
    if (href === '/about') return location.pathname === '/about'
    if (href === '/benefits') return location.pathname === '/benefits'
    if (href === '/contact') return location.pathname === '/contact'

    return location.pathname + location.hash === href
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 left-0 w-full z-50 border-b border-dorado-principal/15 bg-black/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="flex items-center gap-3"
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
          </Link>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = isActiveLink(link.href)

              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavigate(link.href)}
                    className={`
                      relative pb-2
                      font-inter text-sm tracking-wide
                      transition-all duration-300
                      ${active
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
                        ${active ? 'w-6 opacity-100' : 'w-0 opacity-0'}
                      `}
                    />
                  </button>
                </li>
              )
            })}
          </ul>

          {/* WhatsApp desktop */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              icon={<FaWhatsapp size={16} />}
              onClick={() => window.open('https://wa.me/524431415032', '_blank')}
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

          {/* Mobile button */}
          <button
            className="
              lg:hidden text-blanco-hueso
              border border-dorado-principal/25
              p-2 rounded-xl
              hover:bg-dorado-principal/10
              transition-colors
              relative z-[80]
            "
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm
          transition-all duration-300 lg:hidden
          ${isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }
        `}
      />

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-[85%] max-w-[380px]
          z-[70] lg:hidden
          bg-[#090909]
          border-l border-dorado-principal/15
          shadow-[-10px_0_50px_rgba(0,0,0,0.45)]
          transition-transform duration-300 ease-out
          flex flex-col
          ${isOpen
            ? 'translate-x-0'
            : 'translate-x-full'
          }
        `}
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 h-72 w-72 bg-dorado-principal/10 blur-3xl rounded-full" />

        {/* Header */}
        <div className="relative flex items-center justify-between px-6 py-6 border-b border-dorado-principal/10">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Carlos González"
              className="h-12 w-12 object-contain"
            />

            <div className="leading-none">
              <p className="font-cormorant text-lg font-bold text-dorado-principal uppercase tracking-[0.08em]">
                Carlos González
              </p>

              <p className="font-inter text-[9px] text-blanco-hueso/50 tracking-[0.25em] uppercase mt-1">
                Consultoría contable
              </p>
            </div>
          </div>

          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="
              h-11 w-11 rounded-xl
              border border-dorado-principal/15
              flex items-center justify-center
              text-blanco-hueso
              hover:bg-dorado-principal/10
              hover:text-dorado-principal
              transition-all duration-300
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="relative flex flex-col px-6 py-8 gap-3">
          {navLinks.map((link, index) => {
            const active = isActiveLink(link.href)

            return (
              <button
                key={link.label}
                onClick={() => handleNavigate(link.href)}
                className={`
                  group relative overflow-hidden
                  rounded-2xl px-5 py-4
                  text-left transition-all duration-300
                  border
                  ${active
                    ? 'border-dorado-principal/40 bg-dorado-principal/10 text-dorado-principal'
                    : 'border-white/5 text-blanco-hueso/75 hover:border-dorado-principal/20 hover:bg-white/[0.03] hover:text-blanco-hueso'
                  }
                `}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                <span className="font-inter text-sm tracking-wide">
                  {link.label}
                </span>

                <div
                  className={`
                    absolute left-0 top-0 h-full w-[3px]
                    bg-dorado-principal transition-all duration-300
                    ${active
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                    }
                  `}
                />
              </button>
            )
          })}
        </div>

        {/* Bottom */}
        <div className="mt-auto p-6 border-t border-dorado-principal/10">
          <Button
            variant="outline"
            icon={<FaWhatsapp size={18} />}
            onClick={() => window.open('https://wa.me/524431415032', '_blank')}
            className="
              w-full justify-center rounded-full
              border border-dorado-principal/35
              bg-dorado-principal/10
              text-blanco-hueso
              py-3
              hover:bg-dorado-principal
              hover:text-white
              transition-all duration-300
              shadow-[0_0_24px_rgba(200,162,77,0.12)]
            "
          >
            Hablar por WhatsApp
          </Button>
        </div>
      </div>
    </>
  )
}

export default Navbar