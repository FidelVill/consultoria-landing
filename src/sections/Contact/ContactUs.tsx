import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, CalendarDays } from 'lucide-react'

const contactMethods = [
    {
        id: 1,
        icon: Phone,
        title: 'Llámanos',
        lines: ['443 141 5032', 'Lun - Vie: 9:00 - 18:00'],
    },
    {
        id: 2,
        icon: MessageCircle,
        title: 'WhatsApp',
        lines: ['443 141 5032', 'Respuesta inmediata'],
    },
    {
        id: 3,
        icon: Mail,
        title: 'Envíanos un email',
        lines: ['carlos.gonzalez@desp-sercofis.com', 'Responderemos pronto'],
    },
    {
        id: 4,
        icon: MapPin,
        title: 'Visítanos',
        lines: [
            'Francisco J. Mina 17, Int. 4',
            'Col. Centro, Los Reyes de Salgado,',
            'Michoacán',
        ],
    },
    {
        id: 5,
        icon: CalendarDays,
        title: 'Agenda una cita',
        lines: ['Reservemos un espacio', 'para hablar de tu negocio.'],
    },
]

const ContactMethods = () => {
    return (
        <section className="bg-blanco-hueso py-10 md:py-14 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="
            rounded-[28px]
            bg-white/75
            border border-[#ece6dc]
            shadow-[0_20px_70px_rgba(10,10,10,0.05)]
            px-5 py-8
            md:px-7 md:py-9
            lg:px-8 lg:py-10
          "
                >
                    <p className="font-inter text-center text-xs md:text-sm font-semibold tracking-[0.28em] md:tracking-[0.35em] text-dorado-principal uppercase mb-6 md:mb-8">
                        Distintas formas de contactarnos
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {contactMethods.map((method) => {
                            const Icon = method.icon

                            return (
                                <motion.div
                                    key={method.id}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.55, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    className="
                    min-h-[210px]
                    rounded-[18px]
                    border border-[#ece6dc]
                    bg-white/70
                    px-4 py-7
                    flex flex-col items-center justify-center
                    text-center
                    transition-all duration-300
                    hover:border-dorado-principal
                    hover:shadow-[0_18px_45px_rgba(10,10,10,0.07)]
                    group
                  "
                                >
                                    <Icon
                                        size={42}
                                        strokeWidth={1.7}
                                        className="
                      text-dorado-principal
                      mb-7
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                                    />

                                    <h3 className="font-inter text-base font-bold text-negro-premium mb-4">
                                        {method.title}
                                    </h3>

                                    <div className="space-y-1">
                                        {method.lines.map((line) => (
                                            <p
                                                key={line}
                                                className="font-inter text-sm text-negro-premium/65 leading-relaxed break-words"
                                            >
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactMethods