import { motion } from 'framer-motion'
import {
    FileText,
    ArrowLeftRight,
    BarChart3,
    Landmark,
    Percent,
    ClipboardCheck,
    CheckCircle2,
} from 'lucide-react'

const features = [
    {
        id: 1,
        title: 'Contabilidad general',
        description:
            'Registro y clasificación de todas las operaciones de tu negocio para mantener tu contabilidad siempre al día.',
        icon: FileText,
        items: [
            'Registro de ingresos, egresos y pólizas',
            'Mayor general y balanza de comprobación',
            'Generación de estados financieros',
        ],
    },
    {
        id: 2,
        title: 'Registro de operaciones',
        description:
            'Capturamos y organizamos cada movimiento de tu negocio de forma precisa y ordenada.',
        icon: ArrowLeftRight,
        items: [
            'Registro de compras y ventas',
            'Control de gastos y costos',
            'Conciliación de cuentas',
        ],
    },
    {
        id: 3,
        title: 'Estados financieros',
        description:
            'Elaboramos reportes financieros claros y confiables para que conozcas la salud de tu negocio.',
        icon: BarChart3,
        items: [
            'Estado de resultados',
            'Balance general',
            'Análisis e interpretación de resultados',
        ],
    },
    {
        id: 4,
        title: 'Conciliaciones bancarias',
        description:
            'Verificamos y conciliamos tus movimientos bancarios para asegurar la exactitud de tu información.',
        icon: Landmark,
        items: [
            'Conciliación de cuentas bancarias',
            'Detección de diferencias',
            'Reportes de conciliación',
        ],
    },
    {
        id: 5,
        title: 'Cálculo de impuestos',
        description:
            'Determinamos y presentamos tus impuestos de forma correcta y oportuna.',
        icon: Percent,
        items: [
            'ISR, IVA y retenciones',
            'Cálculo de impuestos mensuales y anuales',
            'Presentación de declaraciones',
        ],
    },
    {
        id: 6,
        title: 'Cumplimiento fiscal',
        description:
            'Nos aseguramos de que cumplas con todas tus obligaciones ante el SAT y otras autoridades.',
        icon: ClipboardCheck,
        items: [
            'Presentación de declaraciones fiscales',
            'Atención a requerimientos',
            'Actualización de obligaciones fiscales',
        ],
    },
]

const Features = () => {
    return (
        <section className="bg-blanco-hueso py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <p className="font-inter text-sm font-semibold tracking-[0.35em] text-dorado-principal uppercase mb-5">
                        ¿Qué incluye?
                    </p>

                    <h2 className="font-cormorant text-4xl md:text-6xl font-semibold text-negro-premium leading-none mb-6">
                        Nuestros servicios de contabilidad
                    </h2>

                    <p className="font-inter text-negro-premium/60 text-base md:text-lg leading-relaxed">
                        Soluciones completas para mantener tus finanzas en orden y tu
                        negocio siempre al día.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                    {features.map((feature, index) => {
                        const Icon = feature.icon

                        return (
                            <motion.article
                                key={feature.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.08,
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="
                  group rounded-2xl bg-white border border-gris-claro
                  p-8 shadow-[0_10px_35px_rgba(10,10,10,0.04)]
                  hover:shadow-[0_20px_60px_rgba(10,10,10,0.08)]
                  hover:-translate-y-1
                  transition-all duration-300
                "
                            >
                                {/* Top */}
                                <div className="flex items-start gap-5 mb-6">
                                    <div
                                        className="
                      h-16 w-16 rounded-full
                      bg-dorado-principal/10
                      text-dorado-principal
                      flex items-center justify-center
                      shrink-0
                    "
                                    >
                                        <Icon size={32} strokeWidth={1.8} />
                                    </div>

                                    <div>
                                        <h3 className="font-cormorant text-3xl font-semibold text-negro-premium mb-2 leading-none">
                                            {feature.title}
                                        </h3>

                                        <p className="font-inter text-sm leading-relaxed text-negro-premium/60">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Items */}
                                <ul className="space-y-3">
                                    {feature.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 font-inter text-sm text-negro-premium/75"
                                        >
                                            <CheckCircle2
                                                size={16}
                                                strokeWidth={2}
                                                className="text-dorado-principal mt-[2px] shrink-0"
                                            />

                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features