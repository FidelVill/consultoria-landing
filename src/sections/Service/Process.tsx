import { motion } from 'framer-motion'
import {
    Users,
    FolderOpen,
    Calculator,
    TrendingUp,
} from 'lucide-react'

const steps = [
    {
        id: 1,
        title: 'Conocemos tu negocio',
        description:
            'Entendemos tus necesidades y objetivos para ofrecerte la mejor solución.',
        icon: Users,
    },
    {
        id: 2,
        title: 'Recopilamos información',
        description:
            'Reunimos y organizamos tus documentos e información financiera.',
        icon: FolderOpen,
    },
    {
        id: 3,
        title: 'Registramos y analizamos',
        description:
            'Llevamos tu contabilidad al día y generamos reportes confiables.',
        icon: Calculator,
    },
    {
        id: 4,
        title: 'Te acompañamos',
        description:
            'Te asesoramos para que tomes decisiones y hagas crecer tu negocio.',
        icon: TrendingUp,
    },
]

const Process = () => {
    return (
        <section className="bg-blanco-hueso py-10">
            <div className="max-w-[1500px] mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="
            rounded-[32px]
            border border-[#ece6dc]
            bg-[#f8f6f2]
            px-8 py-16 md:px-14
          "
                >
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <p className="font-inter text-sm font-semibold tracking-[0.35em] text-dorado-principal uppercase mb-5">
                            Nuestro proceso
                        </p>

                        <h2 className="font-cormorant text-4xl md:text-6xl font-semibold text-negro-premium leading-none">
                            Así trabajamos contigo
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Line */}
                        <div className="hidden lg:block absolute top-[54px] left-[12%] right-[12%] h-[2px] bg-dorado-principal/50" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-8">
                            {steps.map((step, index) => {
                                const Icon = step.icon

                                return (
                                    <motion.article
                                        key={step.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.55,
                                            delay: index * 0.1,
                                            ease: 'easeOut',
                                        }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        className="relative text-center flex flex-col items-center"
                                    >
                                        {/* Number */}
                                        <div
                                            className="
                        absolute top-0 left-1/2 -translate-x-[85px]
                        z-20
                        w-11 h-11 rounded-full
                        bg-[#ead7a7]
                        flex items-center justify-center
                        font-space font-bold text-negro-premium
                      "
                                        >
                                            {step.id}
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className="
                        relative z-10
                        h-28 w-28 rounded-full
                        bg-white
                        border-[3px] border-[#f1ece3]
                        shadow-[0_10px_35px_rgba(10,10,10,0.04)]
                        flex items-center justify-center
                        mb-8
                      "
                                        >
                                            <Icon
                                                size={46}
                                                strokeWidth={1.8}
                                                className="text-dorado-principal"
                                            />
                                        </div>

                                        {/* Content */}
                                        <h3 className="font-space text-2xl font-bold text-negro-premium mb-4 tracking-[-0.04em]">
                                            {step.title}
                                        </h3>

                                        <p className="font-inter text-base leading-relaxed text-negro-premium/65 max-w-[260px]">
                                            {step.description}
                                        </p>
                                    </motion.article>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Process