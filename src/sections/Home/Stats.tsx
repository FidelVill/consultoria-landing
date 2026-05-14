import { useEffect, useRef, useState } from 'react'
import {
    UsersRound,
    CalendarCheck2,
    BriefcaseBusiness,
    HeartHandshake,
} from 'lucide-react'

const stats = [
    {
        icon: UsersRound,
        value: 250,
        prefix: '+',
        suffix: '',
        label: 'Clientes satisfechos',
    },
    {
        icon: CalendarCheck2,
        value: 10,
        prefix: '+',
        suffix: '',
        label: 'Años de experiencia',
    },
    {
        icon: BriefcaseBusiness,
        value: 500,
        prefix: '+',
        suffix: '',
        label: 'Proyectos realizados',
    },
    {
        icon: HeartHandshake,
        value: 98,
        prefix: '',
        suffix: '%',
        label: 'Tasa de satisfacción',
    },
]

type CountUpProps = {
    value: number
    prefix?: string
    suffix?: string
    start: boolean
}

const CountUp = ({ value, prefix = '', suffix = '', start }: CountUpProps) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!start) return

        let current = 0
        const duration = 1500
        const step = 16
        const increment = value / (duration / step)

        const timer = setInterval(() => {
            current += increment

            if (current >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, step)

        return () => clearInterval(timer)
    }, [start, value])

    return (
        <>
            {prefix}
            {count}
            {suffix}
        </>
    )
}

const Stats = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const [startAnimation, setStartAnimation] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartAnimation(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.35 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative z-30 -mt-12 md:-mt-16 lg:-mt-20 px-4 sm:px-6 lg:px-8 pb-16 md:pb-24"
        >
            <div className="max-w-[1580px] mx-auto">
                <div className="overflow-hidden rounded-[28px] md:rounded-[36px] bg-[#F8F5EF] border border-dorado-principal/20 shadow-[0_28px_90px_rgba(0,0,0,0.38)]">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon

                            return (
                                <div
                                    key={stat.label}
                                    className={`
                    group relative flex flex-col items-center justify-center text-center
                    px-4 py-9 sm:px-6 md:py-11 lg:px-8 lg:py-12
                    transition-all duration-500 hover:bg-white/50
                    border-black/10
                    ${index === 0 || index === 1 ? 'border-b lg:border-b-0' : ''}
                    ${index === 0 || index === 2 ? 'border-r' : ''}
                    ${index !== 3 ? 'lg:border-r' : ''}
                  `}
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-dorado-principal/10 to-transparent" />

                                    <div className="relative mb-5 md:mb-6 flex h-16 w-16 md:h-[74px] md:w-[74px] items-center justify-center rounded-full bg-black text-dorado-principal shadow-[0_0_28px_rgba(212,175,55,0.25)] transition-transform duration-500 group-hover:scale-110">
                                        <Icon size={28} strokeWidth={1.8} />
                                    </div>

                                    <h3 className="relative font-[Inter] text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-black leading-none tracking-[-0.05em]">
                                        <CountUp
                                            value={stat.value}
                                            prefix={stat.prefix}
                                            suffix={stat.suffix}
                                            start={startAnimation}
                                        />
                                    </h3>

                                    <p className="relative mt-4 font-[Inter] text-sm sm:text-base md:text-lg font-medium text-black/70">
                                        {stat.label}
                                    </p>

                                    <span className="relative mt-6 h-[2px] w-12 rounded-full bg-dorado-principal transition-all duration-500 group-hover:w-20" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats