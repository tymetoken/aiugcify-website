import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DesktopNotice from '@/components/DesktopNotice'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import WhoThisIsFor from '@/components/WhoThisIsFor'
import ObjectionHandling from '@/components/ObjectionHandling'
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
        <DesktopNotice />
        <HowItWorks />
        <ProblemSection />
        <SolutionSection />
        <Features />
        <WhoThisIsFor />
        <ObjectionHandling />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  )
}
