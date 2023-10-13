import { Header } from "../components/header";
import { CuidadosCriticosProducts } from "../components/cuidadosCriticosProductos";
import { ContactSection } from '../components/contactSection';
import { Footer } from "../components/footer";


export function CuidadosCriticosPage() {
    return (
        <div className='max-w-screen flex flex-col gap-y-64'>
            <Header />
            <CuidadosCriticosProducts />
            <ContactSection />
            <Footer />
        </div>
    )
}