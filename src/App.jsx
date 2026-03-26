import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Metodologia from './pages/Metodologia'
import Casos from './pages/Casos'
import FAQ from './pages/FAQ'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/servicios"    element={<Servicios />} />
          <Route path="/metodologia"  element={<Metodologia />} />
          <Route path="/casos-de-uso" element={<Casos />} />
          <Route path="/faq"          element={<FAQ />} />
          <Route path="/contacto"     element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
