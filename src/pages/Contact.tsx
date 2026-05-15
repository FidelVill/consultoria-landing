import Navbar from '@/components/layout/Navbar'
import CTA from '@/sections/shared/CTA'
import Footer from '@/components/layout/Footer'
import Ready from '@/sections/Contact/Ready'
import ContactUs from '@/sections/Contact/ContactUs'
import Map from '@/sections/Contact/Map'
import Questions from '@/sections/Contact/Questions'

const Contact = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Ready />
            <ContactUs />
            <Questions />
            <Map />
            <CTA />
            <Footer />
        </div>
    )
}

export default Contact