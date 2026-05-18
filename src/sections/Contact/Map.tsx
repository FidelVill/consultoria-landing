import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'

const ContactLocation = () => {
    return (
        <section className="bg-blanco-hueso py-10 md:py-14 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="
            grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]
            overflow-hidden
            rounded-[24px]
            border border-[#ece6dc]
            bg-white
            shadow-[0_20px_70px_rgba(10,10,10,0.06)]
          "
                >
                    {/* Map */}
                    <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden">
                        <iframe
                            title="Ubicación Carlos González Consultoría Contable"
                            src="https://www.google.com/maps?q=Francisco+Javier+Mina+17,+Centro,+60300+Los+Reyes+de+Salgado,+Michoacán&output=embed"
                            className="absolute inset-0 h-full w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute inset-0 pointer-events-none bg-white/10" />
                    </div>

                    {/* Info */}
                    <div
                        className="
              relative
              bg-negro-premium
              px-6 py-10
              sm:px-8
              md:px-10 md:py-12
              lg:px-12 xl:px-14
              flex flex-col justify-center
              overflow-hidden
            "
                    >
                        {/* Glow */}
                        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-dorado-principal/10 blur-3xl" />

                        <div className="relative max-w-md">
                            <p className="font-inter text-xs font-semibold tracking-[0.35em] text-dorado-principal uppercase mb-5">
                                Nuestra ubicación
                            </p>

                            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
                                Visítanos en nuestras oficinas.
                            </h2>

                            <div className="flex items-start gap-3 mb-6">
                                <MapPin
                                    size={20}
                                    className="text-dorado-principal shrink-0 mt-1"
                                />

                                <p className="font-inter text-white/85 text-base leading-relaxed">
                                    Francisco J. Mina 17, Int. 4,
                                    <br />
                                    Col. Centro, Los Reyes,
                                    <br />
                                    Michoacán.
                                </p>
                            </div>

                            <div className="w-full h-px bg-dorado-principal/40 mb-6" />

                            <div className="flex items-center gap-3 text-white/90">
                                <Clock
                                    size={18}
                                    className="text-dorado-principal shrink-0"
                                />

                                <p className="font-inter text-sm sm:text-base">
                                    Lun - Vie: 9:00 - 18:00
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactLocation