import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ListPlus } from "lucide-react";

function FormCategoria() {

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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                })
                alert('Categoria atualizada com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {

                } else {
                    alert('Erro ao atualizar categoria. Tente Novamente!.')
                }
            }
        }
        else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                })
                alert('Nova categoria cadastrada com sucesso!')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                } else {
                    alert('Erro ao cadastrar categoria.')
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }


    return (
        <div className="container flex flex-col items-center justify-center mx-auto my-4">
            <h1 className="text-4xl text-center my-8 flex items-center gap-2">
                <ListPlus className="text-sky-600"/>
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria} >
                <div className="flex flex-col gap-2 text-lg">
                    <label htmlFor="tipo">Cadastre uma nova categoria para seus produtos: </label>
                    <input
                        type="text"
                        placeholder="Nova Categoria"
                        name='tipo'
                        className="border-2 border-zinc-700 rounded p-2"
                        value={categoria.tipo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-sky-100 bg-sky-400 text-xl
                               hover:bg-zinc-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ? <RotatingLines
                        visible={true}
                        width="20"
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.60"
                        ariaLabel="rotating-lines-loading"
                    /> : <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;