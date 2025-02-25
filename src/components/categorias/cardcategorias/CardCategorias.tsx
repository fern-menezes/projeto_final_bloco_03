import { Link } from 'react-router-dom'
import { Tag, Edit, Trash } from 'lucide-react'
import Categoria from '../../../models/Categoria'


interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        
        
        <div className='border flex flex-col rounded-sm overflow-hidden w-70 ml-10'>
            <header className='flex justify-start items-center gap-2 py-2 px-2 text-zinc-800 border-b border-zinc-300'>
               
                    <Tag className='size-5 hover:scale-110 hover:text-sky-600'/>
                    <p className=' text-xl'> Categoria </p>
            </header>

                <div>
                    <p className='text-xl p-4'>{categoria.nome}</p>
                </div>

                <div className="flex items-center justify-center text-white bg-sky-700 py-2 gap-2 ">
                    <Link to={`/editarcategoria/${categoria.id} `} >
                        <button>
                            <Edit className='size-5 cursor-pointer hover:scale-110 hover:text-sky-500'/>
                        </button>
                    </Link>

                    <Link to={`/deletarcategoria/${categoria.id} `} >
                        <button>
                            <Trash className='size-5 cursor-pointer hover:scale-110 hover:text-sky-500'/>
                        </button>
                    </Link>
                </div>

        </div>
    )
}

export default CardCategorias