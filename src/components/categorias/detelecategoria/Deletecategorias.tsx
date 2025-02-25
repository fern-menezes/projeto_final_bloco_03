import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { Tag, Trash2 } from "lucide-react";

function DeletarCategoria() {
    
    const navigate = useNavigate()
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`, {
            })

            alert('Categoria deletada com sucesso!')

        } catch (error: any) {
            if (error.toString().includes('403')) {
            }else {
                alert('Erro ao deletar a categoria.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className=' flex items-center justify-center gap-2 text-4xl text-center my-4'>
                <Trash2 className="text-red-500"/>
                Deletar categoria 
            </h1>
            <p className='text-center  mb-4'>
                Você tem certeza de que deseja apagar a categoria selecionada?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='flex items-center gap-2 py-2 px-6 text-2xl border-b border-zinc-300'>
                    <Tag className='size-5 hover:scale-110 hover:text-sky-600'/>
                    <p className='text-md'> Categoria </p>
                </header>
                <p className='p-8 text-4xl h-full text-center'>{categoria.nome}</p>
                <div className="flex text-xl">
                    <button 
                        className='text-zinc-100 bg-zinc-400 hover:bg-zinc-500 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-zinc-100 bg-zinc-700 
                                   hover:bg-zinc-900 flex items-center justify-center'
                                   onClick={deletarCategoria}>
                        {isLoading ? <RotatingLines
                                                visible={true}
                                                width="20"
                                                strokeColor="grey"
                                                strokeWidth="5"
                                                animationDuration="0.60"
                                                ariaLabel="rotating-lines-loading"
                                            /> : <span>Sim</span>}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria