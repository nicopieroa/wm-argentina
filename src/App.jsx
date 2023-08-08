import './App.css'

import { Navbar } from './components/navbar'
import { PresentationSection } from './components/presentationSection'

function App() {

  return (
    <div className='max-w-screen'>
      <Navbar />
      <PresentationSection />
    </div>
  )
}

export default App
