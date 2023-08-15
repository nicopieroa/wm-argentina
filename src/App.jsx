import './App.css'
import { HomePage } from './pages/homePage'
import { ProductsPage } from './pages/productsPage'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
