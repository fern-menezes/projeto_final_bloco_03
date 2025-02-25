import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DeletarCategoria from './components/categorias/detelecategoria/Deletecategorias'
import FormCategoria from './components/categorias/formcategoria/FormCategorias'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {
    return (
      <>
      <BrowserRouter>
  <Navbar />
  <div className="flex flex-col min-h-screen bg-gray-200">
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categorias" element={<ListaCategorias />} />
        <Route path="/cadastrarcategoria" element={<FormCategoria />} />
        <Route path="/editarcategoria/:id" element={<FormCategoria />} />
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
      </Routes>
    </div>
  </div>
  <Footer />
</BrowserRouter>

    </>
    )
}

export default App
