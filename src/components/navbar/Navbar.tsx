import { Search, ShoppingCart, User, Zap } from "lucide-react"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-2 
            			   bg-sky-800 text-white border-b border-zinc-500'>
            
                <div className="container flex justify-between text-lg px-5 gap-5">

                    <div className='flex items-center gap-2'>
                        <Zap /> FARMACATCHAU
                    </div>

                    <div className='flex items-center gap-2'>
                        <input type="text" placeholder='Buscar...' className='bg-sky-700 px-2 py-1 rounded-sm text-sm outline-none'/>
                        <Search className='size-5 cursor-pointer hover:scale-110 hover:text-red-400'/> 
                    </div>
                    
                    <div className='flex gap-2'>
                    <div className="flex items-center gap-4 py-4">
						<p>
							Produtos
						</p>
						<p>
							Categorias
						</p>
						<p>
							Cadastrar Categoria
						</p>
							<User className="size-8"
							/>

							<ShoppingCart
								className="size-8"
							/>
					</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar