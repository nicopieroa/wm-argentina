import './App.css'

import { Header } from './components/header'
import { NewsSection } from './components/newsSection'
import { PresentationSection } from './components/presentationSection'

function App() {

  return (
    <div className='max-w-screen'>
      <Header />
      <PresentationSection />
      <NewsSection />
    </div>
  )
}

export default App
