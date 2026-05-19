import { motion } from 'framer-motion'
import { fadeUpVariants } from '@/hooks/useFadeUp'
import Acompanamiento from '../../assets/Acompanamiento.png'

const ClientSupport = () => {
    return (
        <section className="bg-[#faf8f4] py-24 overflow-hidden">
            <div className="max-w-[1450px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Imagen */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative"
                >
                    <div className="rounded-[28px] overflow-hidden h-[480px] lg:h-[560px] w-full shadow-xl">
                        <img
                            src={Acompanamiento}
                            alt="Acompañamiento personalizado"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Card flotante */}
                    <div className="absolute -bottom-6 right-6 bg-white shadow-2xl rounded-3xl px-7 py-5 max-w-[320px] border border-gray-100">
                        <p className="font-cormorant text-2xl italic text-negro-premium leading-snug">
                            “Nunca estarás solo en el proceso.”
                        </p>
                    </div>
                </motion.div>

                {/* Texto */}
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col gap-6"
                >
                    <div>
                        <span className="font-inter uppercase tracking-[4px] text-xs text-dorado-principal font-semibold">
                            Acompañamiento cercano
                        </span>

                        <h2 className="font-cormorant text-4xl md:text-5xl xl:text-6xl font-bold text-negro-premium leading-[1.08] mt-3 max-w-2xl">
                            Más que un servicio, somos parte de tu crecimiento
                        </h2>
                    </div>

                    <div className="w-14 h-0.5 bg-dorado-principal" />

                    <div className="flex flex-col gap-5 max-w-2xl">
                        <p className="font-inter text-negro-premium/70 text-base md:text-lg leading-relaxed">
                            Creemos que el verdadero valor está en acompañarte en cada paso.
                            No solo resolvemos procesos o números; estamos contigo para
                            orientarte, ayudarte a tomar mejores decisiones y darte claridad
                            cuando más lo necesitas.
                        </p>

                        <p className="font-inter text-negro-premium/70 text-base md:text-lg leading-relaxed">
                            Desde dudas del día a día hasta decisiones importantes para tu
                            negocio, mantenemos una comunicación constante y cercana para que
                            siempre tengas el respaldo de un equipo que realmente se involucra
                            contigo.
                        </p>

                        <p className="font-inter text-negro-premium/70 text-base md:text-lg leading-relaxed">
                            Nuestro objetivo es construir una relación de confianza donde
                            puedas sentirte respaldado, escuchado y acompañado en todo momento.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {[
                            'Atención cercana y humana',
                            'Seguimiento continuo',
                            'Asesoría personalizada',
                            'Respaldo en cada etapa',
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 bg-white rounded-2xl px-5 py-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-2 h-2 rounded-full bg-dorado-principal shrink-0" />

                                <p className="font-inter text-sm md:text-base text-negro-premium font-medium">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default ClientSupport