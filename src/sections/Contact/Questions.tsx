import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
    {
        id: 1,
        question: '¿Qué tipos de empresas asesoran?',
        answer:
            'Asesoramos a emprendedores, pequeñas y medianas empresas, profesionistas independientes y negocios que buscan mejorar su control contable y financiero.',
    },
    {
        id: 2,
        question: '¿En cuánto tiempo responden las consultas?',
        answer:
            'Normalmente respondemos en el menor tiempo posible dentro de nuestro horario de atención. Para consultas por WhatsApp, buscamos darte una respuesta rápida y clara.',
    },
    {
        id: 3,
        question: '¿Ofrecen una primera asesoría sin compromiso?',
        answer:
            'Sí, podemos tener una primera conversación para conocer tus necesidades y orientarte sobre cómo podemos ayudarte.',
    },
]

const ContactFAQ = () => {
    const [openId, setOpenId] = useState<number | null>(1)

    return (
        <section className="bg-blanco-hueso py-10 md:py-10 overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="
            grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]
            gap-8 lg:gap-12
            rounded-[24px]
            bg-white/75
            border border-[#ece6dc]
            shadow-[0_20px_70px_rgba(10,10,10,0.05)]
            px-6 py-8
            md:px-10 md:py-10
            lg:px-12
            items-start
          "
                >
                    {/* Left */}
                    <div className="lg:pr-10 lg:border-r lg:border-[#e5ddd1]">
                        <p className="font-inter text-xs font-semibold tracking-[0.35em] text-dorado-principal uppercase mb-5">
                            Preguntas frecuentes
                        </p>

                        <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-negro-premium leading-tight max-w-md">
                            ¿Tienes dudas antes de contactarnos?
                        </h2>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col">
                        {faqs.map((faq) => {
                            const isOpen = openId === faq.id

                            return (
                                <div
                                    key={faq.id}
                                    className="border-b border-[#e5ddd1] last:border-b-0"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                                        className="
                      w-full
                      flex items-center justify-between gap-5
                      py-5
                      text-left
                    "
                                    >
                                        <span className="font-inter text-sm md:text-base font-medium text-negro-premium">
                                            {faq.question}
                                        </span>

                                        <Plus
                                            size={20}
                                            className={`
                        text-dorado-principal shrink-0
                        transition-transform duration-300
                        ${isOpen ? 'rotate-45' : ''}
                      `}
                                        />
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.28, ease: 'easeOut' }}
                                                className="overflow-hidden"
                                            >
                                                <p className="font-inter text-sm md:text-base text-negro-premium/65 leading-relaxed pb-5 max-w-2xl">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactFAQ