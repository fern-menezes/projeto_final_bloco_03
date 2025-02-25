import { ListPlus } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormProduto() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '' });
    const [produto, setProduto] = useState<Produto>({} as Produto);
    const { id } = useParams<{ id: string }>();

    async function buscarProdutoPorId(id: string) {
        try {
            await listar(`/produtos/${id}`, setProduto, );
        } catch (error: any) {
            if (error.toString().includes('403')) {
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria,);
        } catch (error: any) {
            if (error.toString().includes('403')) {
            }
        }
    }

    async function buscarCategorias() {
        try {
            await listar('/categorias', setCategorias,);
        } catch (error: any) {
            if (error.toString().includes('403')) {
            }
        }
    }

    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setProduto({ ...produto, categoria: categoria });
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({ ...produto, [e.target.name]: e.target.value, categoria: categoria });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto,);
                alert('Produto atualizado com sucesso!');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                } else {
                    alert('Erro ao atualizar o produto selecionado. Tente novamente!');
                }
            }
        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto,);
                alert('Produto cadastrado com sucesso!');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                } else {
                    alert('Erro ao cadastrar o produto selecionado. Tente novamente!');
                }
            }
        }

        setIsLoading(false);
        retornar();
    }

    const carregandoCategoria = categoria.nome === '';

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="flex items-center gap-1 text-4xl text-center my-8">
                <ListPlus className="text-sky-600" />
                {id === undefined ? 'Cadastrar Produto' : 'Editar Produto'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Produto</label>
                    <input
                        type="text"
                        placeholder="Insira aqui o nome do produto"
                        name="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2 hover:border-sky-700"
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="preco">Preço do produto</label>
                    <input
                        type="text"
                        placeholder="Adicione aqui o preço do produto"
                        name="preco"
                        required
                        className="border-2 border-slate-700 rounded p-2 hover:border-sky-700"
                        value={produto.preco}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Foto do produto</label>
                    <input
                        type="text"
                        placeholder="Adicione aqui uma foto produto"
                        name="foto"
                        required
                        className="border-2 border-slate-700 rounded p-2 hover:border-sky-700"
                        value={produto.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Categoria</p>
                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded hover:border-sky-700 cursor-pointer' 
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
                        <option value="" selected disabled>Selecione uma categoria </option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                        ))}
                    </select>
                </div>
                <button
                    className="rounded text-zinc-100 bg-zinc-400 text-xl cursor-pointer hover:bg-zinc-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                    disabled={carregandoCategoria}>
                    {isLoading ? 
                        <RotatingLines
                            visible={true}
                            width="20"
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.60"
                            ariaLabel="rotating-lines-loading"
                        /> 
                        : <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>}
                </button>
            </form>
        </div>
    );
}

export default FormProduto;
