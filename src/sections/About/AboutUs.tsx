import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

import office from '@/assets/office.png'

const items = [
    'Enfoque personalizado',
    'Compromiso y confidencialidad',
    'Resultados que generan valor',
]

const AboutUs = () => {
    return (
        <section className="bg-blanco-hueso py-20 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <p className="font-inter text-sm font-semibold tracking-[0.35em] text-dorado-principal uppercase mb-5">
                            Sobre nosotros
                        </p>

                        <h2 className="font-cormorant text-5xl md:text-6xl font-semibold text-negro-premium leading-[0.95] mb-8">
                            Más que contadores,
                            <span className="text-dorado-principal block">
                                somos tus aliados.
                            </span>
                        </h2>

                        <div className="w-14 h-[2px] bg-dorado-principal mb-8" />

                        <p className="font-inter text-negro-premium/65 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                            Somos una firma de consultoría contable y financiera comprometida
                            con el crecimiento y la estabilidad de tu negocio. Combinamos
                            experiencia, tecnología y un enfoque estratégico para ofrecerte
                            soluciones claras, confiables y hechas a la medida.
                        </p>

                        <div className="flex flex-col gap-5">
                            {items.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4"
                                >
                                    <div
                                        className="
                      h-7 w-7 rounded-full
                      bg-dorado-principal/10
                      flex items-center justify-center
                      shrink-0
                    "
                                    >
                                        <CheckCircle2
                                            size={16}
                                            strokeWidth={2.5}
                                            className="text-dorado-principal"
                                        />
                                    </div>

                                    <p className="font-inter text-negro-premium/80 text-base">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Glow */}
                        <div className="absolute -inset-6 bg-dorado-principal/10 blur-3xl rounded-full" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="
                relative overflow-hidden
                rounded-[32px]
                border border-[#ece6dc]
                shadow-[0_25px_70px_rgba(10,10,10,0.12)]
              "
                        >
                            <img
                                src={office}
                                alt="Oficina Carlos González"
                                className="w-full h-[680px] object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs