import { motion } from 'framer-motion'

import purpose from '@/assets/purpose.png'

const Purpose = () => {
    return (
        <section className="bg-blanco-hueso py-16 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="
            rounded-[32px]
            bg-white/60
            border border-[#ece6dc]
            shadow-[0_20px_70px_rgba(10,10,10,0.05)]
            px-6 py-6 md:px-10 md:py-8
          "
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.75, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-2xl"
                        >
                            <img
                                src={purpose}
                                alt="Análisis financiero y contable"
                                className="w-full h-[380px] object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                            viewport={{ once: true }}
                            className="max-w-xl"
                        >
                            <p className="font-inter text-sm font-semibold tracking-[0.35em] text-dorado-principal uppercase mb-5">
                                Nuestro propósito
                            </p>

                            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-negro-premium leading-[1.05] mb-6">
                                Impulsar el crecimiento de tu negocio con claridad y estrategia.
                            </h2>

                            <div className="w-14 h-[2px] bg-dorado-principal mb-7" />

                            <p className="font-inter text-negro-premium/65 text-base leading-relaxed">
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