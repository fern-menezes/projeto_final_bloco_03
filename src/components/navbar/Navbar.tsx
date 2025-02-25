import { Search, ShoppingCart, User, Zap } from "lucide-react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-2 
            			   bg-sky-800 text-white border-b border-zinc-500'>
            
                <div className="container flex justify-between text-lg px-5 gap-5">

                    <div className='flex items-center gap-2'>
                        <Zap />
                        <Link to='/' > 
                            FARMACATCHAU 
                        </Link>   
                    </div>

                    <div className='flex items-center gap-2'>
                        <input type="text" placeholder='Buscar...' className='bg-sky-700 px-2 py-1 rounded-sm text-sm outline-none w-120'/>
                        <Search className='size-5 cursor-pointer hover:scale-110 hover:text-red-400'/> 
                    </div>
                    
                    <div className='flex gap-2'>
                    <div className="flex items-center gap-4 py-4">
                    <Link to='/produtos' className='hover:underline'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Nova Categoria</Link>
                        <p>
                            <User className='size-5 cursor-pointer   hover:text-sky-600 hover:animate-wiggle'/>
                        </p>
                        <p>
                            <ShoppingCart className='size-5 cursor-pointer hover:scale-110 hover:text-sky-600 hover:animate-wiggle'/>
                        </p>
					</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar