import { ListPlus } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormCategoria() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '' });
    const { id } = useParams<{ id: string }>();

    async function buscarCategoriaPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            if (error.toString().includes('403')) {
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({ ...categoria, [e.target.name]: e.target.value });
    }

    function retornar() {
        navigate('/categorias');
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria);
                alert('Categoria atualizada com sucesso!');
            } catch (error: any) {
                alert('Erro ao atualizar a categoria. Tente novamente!');
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria);
                alert('Categoria cadastrada com sucesso!');
            } catch (error: any) {
                alert('Erro ao cadastrar a categoria. Tente novamente!');
            }
        }
        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="flex items-center gap-1 text-4xl text-center my-8">
                <ListPlus className="text-sky-600" />
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>
            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-1 items-center justify-center">
                        <img className="w-50 h-50 rounded-sm" src="https://i.pinimg.com/736x/c0/33/03/c033035a6830df525279e5767c15fbf9.jpg" alt="" />
                        <img className="w-50 h-50 rounded-sm" src="https://i.pinimg.com/736x/da/32/21/da3221667addaeff8c73e74d9b002e01.jpg" alt="" />
                    </div>
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Insira aqui o nome da categoria"
                        name="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2 hover:border-sky-700"
                        value={categoria.nome}
                        onChange={atualizarEstado}
                    />
                </div>
                <button
                    className="rounded text-zinc-100 bg-sky-400 text-xl cursor-pointer hover:bg-sky-800 w-1/2 py-2 mx-auto flex justify-center my-5"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <RotatingLines
                            visible={true}
                            width="20"
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.60"
                            ariaLabel="rotating-lines-loading"
                        />
                    ) : (
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;