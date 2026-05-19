import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BenefitsHero from '@/sections/Benefits/BenefitsHero'
import WhyUs from '@/sections/Benefits/WhyUs'
import WhatWeDo from '@/sections/Benefits/WhatWeDo'
import Impact from '@/sections/Benefits/Impact'
import PowerInfo from '@/sections/Benefits/PowerInfo'
import TrustStats from '@/sections/Benefits/TrustStats'
import CTA from '@/sections/shared/CTA'
import Accompaniment from '@/sections/Benefits/Accompaniment'

const Benefits = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BenefitsHero />
      <WhyUs />
      <Accompaniment />
      <WhatWeDo />
      <Impact />
      <PowerInfo />
      <TrustStats />
      <CTA />
      <Footer />
    </div>
  )
}

export default Benefits