import { Header } from '../components/header'
import { WorkWithUsSection } from "../components/workWithUsSection";
import { ResumeForm } from '../components/resumeForm';
import { ContactSection } from '../components/contactSection'
import { Footer } from '../components/footer';

export function WorkWithUsPage() {
    return (
        <div className='max-w-screen flex flex-col gap-y-64'>
            <Header />
            <WorkWithUsSection />
            <ResumeForm title={"Envía Tu CV A Nuestra Base de Datos"} />
            <ContactSection />
            <Footer />
        </div>
    )
}