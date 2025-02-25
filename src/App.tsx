import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DeletarCategoria from './components/categorias/deletecategorias/Deletecategorias'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos'
import DeletarProduto from './components/produtos/deletarprodutos/DeletarProdutos'
import FormProduto from './components/produtos/formprodutos/FormProduto'
import FormCategoria from './components/categorias/formcategoria/FormCategorias'

function App() {
    return (
      <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListaProdutos/>} />
            <Route path="/cadastrarproduto" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </>
    )
}

export default App
