import Popup from 'reactjs-popup';
import FormProduto from '../formprodutos/FormProduto';

import 'reactjs-popup/dist/index.css';
import './ModalProdutos.css'
import { SquarePlus } from 'lucide-react';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='flex gap-1 border rounded px-4 py-2 cursor-pointer transition duration-200 hover:bg-sky-800 hover:text-white hover:scale-108'>
                        <SquarePlus />Adicionar novo produto
                    </button>
                }
                modal
            >
                <FormProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;