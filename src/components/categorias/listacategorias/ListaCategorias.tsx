import { useState, useEffect } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardcategorias/CardCategorias";
import { RotatingLines } from "react-loader-spinner";


function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
            }
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <>
            <div className="flex justify-center w-full my-4 pr-6 h-screen-full">
                {categorias.length === 0 && (
                    <RotatingLines
                        visible={true}
                        width="40"
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.60"
                        ariaLabel="rotating-lines-loading"
                    />
                )}
                <div>
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-4">

                            {categorias.map((categoria) => (
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategorias;
