import Navbar from '@/components/layout/Navbar'
import Stats from '@/sections/Home/Stats'
import Hero from '@/sections/Home/Hero'
import Services from '@/sections/Home/Services'
import About from '@/sections/Home/About'
import CTA from '@/sections/Home/CTA'
import Footer from '@/components/layout/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home