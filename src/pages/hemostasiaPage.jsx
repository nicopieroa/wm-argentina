import { Header } from "../components/header";
import { HemostasiaProducts } from "../components/hemostasiaProducts";
import { Footer } from "../components/footer";


export function HemostasiaPage() {
    return (
        <div className='max-w-screen'>
            <Header />
            <HemostasiaProducts />
            <Footer />
        </div>
    )
}