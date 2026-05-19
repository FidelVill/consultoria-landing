import { motion } from 'framer-motion'

import purpose from '@/assets/purpose.png'

const Purpose = () => {
    return (
        <section className="bg-blanco-hueso py-10 md:py-10 lg:py-24 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-5 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="
                        relative
                        rounded-[28px] md:rounded-[36px]
                        bg-white/70
                        border border-[#ece6dc]
                        shadow-[0_24px_80px_rgba(10,10,10,0.06)]
                        px-5 py-5
                        sm:px-6 sm:py-6
                        md:px-10 md:py-10
                        lg:px-12 lg:py-12
                        overflow-hidden
                    "
                >
                    <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-dorado-principal/10 blur-3xl" />

                    <div className="relative grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 md:gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.75, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="
                                overflow-hidden
                                rounded-[22px] md:rounded-[28px]
                                border border-[#ece6dc]
                                shadow-[0_18px_50px_rgba(10,10,10,0.08)]
                            "
                        >
                            <img
                                src={purpose}
                                alt="Análisis financiero y contable"
                                className="
                                    w-full
                                    h-[260px]
                                    sm:h-[340px]
                                    md:h-[420px]
                                    lg:h-[500px]
                                    xl:h-[540px]
                                    object-cover
                                "
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
                        >
                            <p className="font-inter text-xs md:text-sm font-semibold tracking-[0.25em] md:tracking-[0.35em] text-dorado-principal uppercase mb-4 md:mb-5">
                                Nuestro propósito
                            </p>

                            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold text-negro-premium leading-[1.03] mb-6 md:mb-7">
                                Impulsar el crecimiento de tu negocio con claridad y estrategia.
                            </h2>

                            <div className="w-14 h-[2px] bg-dorado-principal mb-6 md:mb-7 mx-auto lg:mx-0" />

                            <p className="font-inter text-negro-premium/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Creemos que la información financiera bien gestionada es la base
                                para tomar decisiones inteligentes y alcanzar tus metas. Por eso,
                                trabajamos codo a codo contigo, entendiendo tus necesidades y
                                acompañándote en cada paso del camino.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Purpose