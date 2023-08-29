import './App.css'
import { HomePage } from './pages/homePage'
import { HemostasiaPage } from './pages/hemostasiaPage'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="hemostasia" element={<HemostasiaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
