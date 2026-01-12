import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import SocialProof from '@/components/SocialProof'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import MobileBottomCTA from '@/components/MobileBottomCTA'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ProblemSection />
        <SolutionSection />
        <Features />
        <Pricing />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  )
}
