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
        <section className="bg-blanco-hueso py-10 md:py-10 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-5 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
                    >
                        <p className="font-inter text-xs md:text-sm font-semibold tracking-[0.25em] md:tracking-[0.35em] text-dorado-principal uppercase mb-4 md:mb-5">
                            Sobre nosotros
                        </p>

                        <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-semibold text-negro-premium leading-[1] md:leading-[0.95] mb-6 md:mb-8">
                            Más que contadores,
                            <span className="text-dorado-principal block">
                                somos tus aliados.
                            </span>
                        </h2>

                        <div className="w-14 h-[2px] bg-dorado-principal mb-6 md:mb-8 mx-auto lg:mx-0" />

                        <p className="font-inter text-negro-premium/65 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
                            Somos una firma de consultoría contable y financiera comprometida
                            con el crecimiento y la estabilidad de tu negocio. Combinamos
                            experiencia, tecnología y un enfoque estratégico para ofrecerte
                            soluciones claras, confiables y hechas a la medida.
                        </p>

                        <div className="flex flex-col gap-4 md:gap-5 items-start max-w-xl mx-auto lg:mx-0">
                            {items.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4 text-left"
                                >
                                    <div className="h-7 w-7 rounded-full bg-dorado-principal/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2
                                            size={16}
                                            strokeWidth={2.5}
                                            className="text-dorado-principal"
                                        />
                                    </div>

                                    <p className="font-inter text-negro-premium/80 text-sm md:text-base">
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
                        className="relative max-w-xl lg:max-w-none mx-auto w-full"
                    >
                        {/* Glow */}
                        <div className="absolute -inset-4 md:-inset-6 bg-dorado-principal/10 blur-3xl rounded-full" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-[#ece6dc] shadow-[0_20px_50px_rgba(10,10,10,0.12)]"
                        >
                            <img
                                src={office}
                                alt="Oficina Carlos González"
                                className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[680px] object-cover"
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