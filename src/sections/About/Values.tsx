import { motion } from 'framer-motion'
import {
    Handshake,
    Star,
    Users,
    ShieldCheck,
} from 'lucide-react'

const values = [
    {
        id: 1,
        title: 'Integridad',
        description:
            'Actuamos con honestidad y transparencia en cada relación y compromiso.',
        icon: Handshake,
    },
    {
        id: 2,
        title: 'Excelencia',
        description:
            'Buscamos la mejora continua para brindar servicios de la más alta calidad.',
        icon: Star,
    },
    {
        id: 3,
        title: 'Compromiso',
        description:
            'Nos involucramos con tu negocio como si fuera nuestro, enfocados en tus objetivos.',
        icon: Users,
    },
    {
        id: 4,
        title: 'Confidencialidad',
        description:
            'Protegemos tu información con los más altos estándares de seguridad.',
        icon: ShieldCheck,
    },
]

const Values = () => {
    return (
        <section className="bg-blanco-hueso py-10 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-4 md:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="font-inter text-sm font-semibold tracking-[0.35em] text-dorado-principal uppercase mb-5">
                        Nuestros valores
                    </p>

                    <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-negro-premium leading-none">
                        Principios que nos definen
                    </h2>

                    <div className="w-14 h-[2px] bg-dorado-principal mx-auto mt-6" />
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, index) => {
                        const Icon = value.icon

                        return (
                            <motion.article
                                key={value.id}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="
                  relative
                  flex flex-col items-center text-center
                  px-8 py-4
                "
                            >
                                {/* Divider */}
                                {index !== values.length - 1 && (
                                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-28 w-px bg-[#e8dfd2]" />
                                )}

                                {/* Icon */}
                                <div
                                    className="
                    h-20 w-20 rounded-full
                    bg-white
                    border border-[#efe6d9]
                    shadow-[0_10px_35px_rgba(10,10,10,0.04)]
                    flex items-center justify-center
                    mb-7
                  "
                                >
                                    <Icon
                                        size={34}
                                        strokeWidth={1.8}
                                        className="text-dorado-principal"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="font-space text-2xl font-bold text-negro-premium mb-4 tracking-[-0.04em]">
                                    {value.title}
                                </h3>

                                {/* Description */}
                                <p className="font-inter text-sm leading-relaxed text-negro-premium/65 max-w-[220px]">
                                    {value.description}
                                </p>
                            </motion.article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Values