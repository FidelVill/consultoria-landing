import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AboutUs from '@/sections/About/AboutUs'
import Purpose from '@/sections/About/Purpose'
import Values from '@/sections/About/Values'
import Team from '@/sections/About/Team'

const Service = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <AboutUs />
            <Purpose />
            <Values />
            <Team />
            <Footer />
        </div>
    )
}

export default Service