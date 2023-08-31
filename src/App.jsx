import './App.css'

import { HomePage } from './pages/homePage'
import { HemostasiaPage } from './pages/hemostasiaPage'
import { AboutUsPage } from './pages/aboutUsPage'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hemostasia" element={<HemostasiaPage />} />
        <Route path="/empresa" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
