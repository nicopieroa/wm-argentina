import './App.css'

import { Header } from './components/header'
import { PresentationSection } from './components/presentationSection'
import { NewsSection } from './components/newsSection'
import { ContactSection } from './components/contactSection'
import { Footer } from './components/footer'

function App() {

  return (
    <div className='max-w-screen'>
      <Header />
      <PresentationSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
