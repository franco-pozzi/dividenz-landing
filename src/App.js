import './App.css'
import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="compania" element={<AboutUs />} />
        <Route path="blog-prensa" element={<Blog />} />
        <Route path="contacto" element={<Contact />} />
      </Route>

      {/* <Route path='investments/criterios' element={<InvestCriterios/>}> </Route> */}
    </Routes>
  )
}

export default App
