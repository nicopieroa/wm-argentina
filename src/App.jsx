import './App.css'

import { HomePage } from './pages/homePage'
import { HemostasiaPage } from './pages/hemostasiaPage'
import { AboutUsPage } from './pages/aboutUsPage'
import { WorkWithUsPage } from './pages/workWithUsPage'

import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'

import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hemostasia" element={<HemostasiaPage />} />
        <Route path="/empresa" element={<AboutUsPage />} />
        <Route path="/trabaja-con-nosotros" element={<WorkWithUsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
