
import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos"
import ModalProdutos from "../../components/produtos/modalprodutos/ModalProdutos"

function Home() {
    
    return (
        <>
            <div className="bg-sky-50 flex justify-center py-20">
                <div className='container grid grid-cols-2 text-zinc-900'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-3xl font-bold'>
                             Bem Vindo ao sistema da farmácia!
                        </h2>
                        <p className='text-xl'>
                            Aqui você encontra Medicamentos e Cosméticos!
                            Tudo para a sua saúde ficar em dia!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div 
                                > <ModalProdutos />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.pinimg.com/736x/0d/9e/2c/0d9e2c4226f981ce38f406ec5d0ea788.jpg"
                            alt="Imagem Página Home"
                            className='rounded-lg w-2/4'
                        />
                    </div>
                </div>
            </div>
            <ListaProdutos />
        </>
    )
}

export default Home