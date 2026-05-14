import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Solutions from '@/sections/Service/Solutions'
import Features from '@/sections/Service/Features'
import Process from '@/sections/Service/Process'

const Service = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Solutions />
            <Features />
            <Process />
            <Footer />
        </div>
    )
}

export default Service