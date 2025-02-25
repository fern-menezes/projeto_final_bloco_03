import { useState, useEffect } from "react";
import Produto from "../../../models/Produto";
import CardProdutos from "../cardprodutos/CardProdutos";
import { RotatingLines } from "react-loader-spinner";
import { listar } from "../../../services/Service";

function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([]);    
        
        async function buscarProdutos() {
            try {
                await listar('/produtos', setProdutos,);
            } catch (error: any) {
                if (error.toString().includes('403')) {
                }
            }
        }
    
        useEffect(() => {
            buscarProdutos();
        }, [produtos.length]);

    return (
        <>
                <div className="flex justify-center items-center w-full my-4 pr-6 h-screen-full">
                    {produtos.length === 0 && (
                        <RotatingLines
                            visible={true}
                            width="40"
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.60"
                            ariaLabel="rotating-lines-loading"
                        />      
                    )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-5 gap-4'>
                        {produtos.map((produto) => (
                            <CardProdutos key={produto.id} produto={produto} />
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default ListaProdutos;