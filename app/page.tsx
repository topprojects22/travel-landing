import { Hero } from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PopularDestinations from '@/components/sections/PopularDestinations'
import TravelTips from '@/components/sections/TravelTips'
import StickySignup from '@/components/StickySignup'
import ContactForm from '@/components/sections/ContactForm'

const Home = () => {
    return (
        <div className={'min-h-screen'}>
            <Navbar />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <PopularDestinations />
                <Testimonials />
                <TravelTips />
                <ContactForm />
                <FAQ />
                <CTA />
            </main>
            <Footer />
            <StickySignup />
        </div>
    )
}

export default Home
