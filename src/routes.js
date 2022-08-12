import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuemSomos from './pages/Quemsomos'
import Contato from './pages/Contato'
import Projetos from './pages/Projetos' 

export default function MainRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quemsomos" element={<QuemSomos />} /> 
      <Route path="/projetos" element={<Projetos />} /> 
      <Route path="/contato" element={<Contato />} /> 
    </Routes>
  )
}