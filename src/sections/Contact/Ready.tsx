import { motion } from 'framer-motion'
import { Headphones, Clock, ShieldCheck, MessageCircle } from 'lucide-react'

import officeContact from '@/assets/contact-office.png'

const contactItems = [
    {
        id: 1,
        icon: Headphones,
        title: 'Atención',
        text: 'personalizada',
    },
    {
        id: 2,
        icon: Clock,
        title: 'Respuesta',
        text: 'rápida',
    },
    {
        id: 3,
        icon: ShieldCheck,
        title: 'Confidencialidad',
        text: 'garantizada',
    },
]

const ContactHero = () => {
    return (
        <section className="bg-blanco-hueso overflow-hidden">
            <div
                className="
          max-w-[1900px] mx-auto
          grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]
          min-h-auto lg:min-h-[820px]
        "
            >
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="
            flex flex-col justify-center
            px-5 sm:px-6 md:px-10 lg:pl-20 xl:pl-28 lg:pr-12
            py-10 md:py-16 lg:py-20
            text-center lg:text-left
          "
                >
                    <p className="font-inter text-xs md:text-sm font-semibold tracking-[0.28em] md:tracking-[0.35em] text-dorado-principal uppercase mb-4 md:mb-5">
                        Contacto
                    </p>

                    <h1
                        className="
              font-cormorant
              text-4xl sm:text-5xl md:text-6xl xl:text-7xl
              font-semibold
              text-negro-premium
              leading-[1.03] lg:leading-[0.98]
              mb-6
              max-w-3xl mx-auto lg:mx-0
            "
                    >
                        Estamos listos para escucharte y{' '}
                        <span className="text-dorado-principal">ayudarte.</span>
                    </h1>

                    <div className="w-14 h-[2px] bg-dorado-principal mb-6 md:mb-7 mx-auto lg:mx-0" />

                    <p
                        className="
              font-inter
              text-negro-premium/65
              text-base md:text-lg
              leading-relaxed
              max-w-xl mx-auto lg:mx-0
              mb-8 md:mb-10
            "
                    >
                        Ya sea que tengas una consulta, necesites asesoría o quieras conocer
                        más sobre nuestros servicios, estaremos encantados de atenderte.
                    </p>

                    {/* Features */}
                    <div
                        className="
              grid grid-cols-3
              gap-3 sm:gap-5 md:gap-6
              max-w-3xl mx-auto lg:mx-0
              w-full
            "
                    >
                        {contactItems.map((item) => {
                            const Icon = item.icon

                            return (
                                <div
                                    key={item.id}
                                    className="
                    flex flex-col
                    items-center
                    justify-start
                    gap-2
                    text-center
                  "
                                >
                                    <div
                                        className="
                      h-12 w-12 sm:h-14 sm:w-14
                      rounded-full
                      bg-dorado-principal/10
                      flex items-center justify-center
                      shrink-0
                    "
                                    >
                                        <Icon size={22} className="text-dorado-principal" />
                                    </div>

                                    <div>
                                        <p className="font-inter text-xs sm:text-sm md:text-base font-semibold text-negro-premium leading-snug">
                                            {item.title}
                                        </p>

                                        <p className="font-inter text-xs sm:text-sm md:text-base font-semibold text-negro-premium leading-snug">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="
            relative
            h-[430px]
            sm:h-[520px]
            md:h-[650px]
            lg:h-auto
            lg:min-h-[820px]
            overflow-hidden
            lg:rounded-bl-[42px]
          "
                >
                    {/* Glow */}
                    <div className="absolute inset-0 bg-dorado-principal/5 blur-3xl scale-110" />

                    {/* Image */}
                    <div className="absolute inset-0">
                        <img
                            src={officeContact}
                            alt="Oficina Carlos González Consultoría Contable"
                            className="
                w-full h-full
                object-cover
                object-[65%_center]
                md:object-[68%_center]
                lg:object-[72%_center]
                scale-[1.02]
              "
                        />

                        {/* Overlay */}
                        <div
                            className="
                absolute inset-0
                bg-gradient-to-t
                from-black/25
                via-transparent
                to-transparent
                lg:bg-gradient-to-l
                lg:from-black/10
                lg:via-transparent
                lg:to-transparent
              "
                        />
                    </div>

                    {/* Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                        className="
              absolute
              left-4 right-4 bottom-5
              sm:left-8 sm:right-8 sm:bottom-8
              md:left-10 md:right-10 md:bottom-10
              lg:left-12 lg:right-12 lg:bottom-12
              xl:left-20 xl:right-20

              bg-white/92
              backdrop-blur-xl
              border border-white/60

              rounded-[22px] md:rounded-[26px]
              shadow-[0_25px_70px_rgba(0,0,0,0.18)]

              px-5 py-5
              md:px-7 md:py-6

              flex items-start gap-4
            "
                    >
                        <div
                            className="
                h-12 w-12 md:h-14 md:w-14
                rounded-full
                bg-dorado-principal
                flex items-center justify-center
                shrink-0
                shadow-[0_12px_30px_rgba(196,151,55,0.35)]
              "
                        >
                            <MessageCircle size={24} className="text-white" />
                        </div>

                        <div>
                            <p className="font-cormorant text-lg sm:text-xl md:text-2xl font-semibold text-negro-premium leading-snug">
                                Hablemos sobre cómo podemos impulsar el crecimiento de tu
                                negocio.
                            </p>

                            <p className="font-inter text-sm md:text-base font-semibold text-dorado-principal mt-2 md:mt-3">
                                Tu éxito es nuestra prioridad.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactHero