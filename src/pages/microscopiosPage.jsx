import { Header } from "../components/header";
import { MicroscopiosProducts } from "../components/microscopiosProducts";
import { ContactSection } from '../components/contactSection';
import { Footer } from "../components/footer";

export function MicroscopiosPage() {
    return (
        <div className='max-w-screen flex flex-col gap-y-64'>
            <Header />
            <MicroscopiosProducts />
            <ContactSection />
            <Footer />
        </div>
    )
}