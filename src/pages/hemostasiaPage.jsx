import { Header } from "../components/header";
import { HemostasiaProducts } from "../components/hemostasiaProducts";
import { ContactSection } from '../components/contactSection';
import { Footer } from "../components/footer";


export function HemostasiaPage() {
    return (
        <div className='max-w-screen flex flex-col gap-y-64'>
            <Header />
            <HemostasiaProducts />
            <ContactSection />
            <Footer />
        </div>
    )
}