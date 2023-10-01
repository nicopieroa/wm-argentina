import { Header } from '../components/header'
import { AboutUsSection } from '../components/aboutUsSection'
import { ContactSection } from '../components/contactSection'
import { Footer } from '../components/footer'

export function AboutUsPage() {
    return (
        <div className='max-w-screen flex flex-col gap-y-64'>
            <Header />
            <AboutUsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}