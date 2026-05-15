import { motion } from 'framer-motion'

import team from '@/assets/team.png'

const Team = () => {
    return (
        <section className="bg-blanco-hueso py-10 md:py-10 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-5 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="
                        rounded-[28px] md:rounded-[36px]
                        border border-[#ece6dc]
                        bg-white/70
                        shadow-[0_20px_70px_rgba(10,10,10,0.05)]
                        px-5 py-5
                        sm:px-6 sm:py-6
                        md:px-10 md:py-8
                    "
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.35fr] gap-10 md:gap-12 lg:gap-14 items-center">
                        {/* Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
                        >
                            <p className="font-inter text-xs md:text-sm font-semibold tracking-[0.25em] md:tracking-[0.35em] text-dorado-principal uppercase mb-4 md:mb-5">
                                Nuestro equipo
                            </p>

                            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-semibold text-negro-premium leading-[1] md:leading-[0.95] mb-6 md:mb-8">
                                Profesionales que trabajan para ti.
                            </h2>

                            <div className="w-14 h-[2px] bg-dorado-principal mb-6 md:mb-8 mx-auto lg:mx-0" />

                            <p className="font-inter text-negro-premium/65 text-base md:text-lg leading-relaxed">
                                Contamos con un equipo de especialistas en contabilidad,
                                finanzas y consultoría que combina experiencia, capacitación
                                constante y una verdadera pasión por ayudar a nuestros clientes.
                            </p>
                        </motion.div>

                        {/* Right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="relative max-w-2xl lg:max-w-none mx-auto w-full"
                        >
                            {/* Glow */}
                            <div className="absolute -inset-4 md:-inset-6 bg-dorado-principal/10 blur-3xl rounded-full" />

                            <div
                                className="
                                    relative overflow-hidden
                                    rounded-[22px] md:rounded-[28px]
                                    border border-[#ece6dc]
                                    shadow-[0_25px_70px_rgba(10,10,10,0.10)]
                                "
                            >
                                <img
                                    src={team}
                                    alt="Equipo de profesionales"
                                    className="
                                        w-full
                                        h-[280px]
                                        sm:h-[360px]
                                        md:h-[440px]
                                        lg:h-[520px]
                                        object-cover
                                    "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Team