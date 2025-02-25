import { Facebook, Instagram, Linkedin } from 'lucide-react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-sky-900 text-white ">
                <div className="container flex flex-col items-center py-4 gap-2">
                    <p className='text-l font-bold'>
                            Farmacia Farmacatchau ⚡. All Rigths Reserved {data}. Desenvolvido com 💖 por Fern
                        </p>
                    <p className='text-md'>Acesse nossas redes sociais</p>
                    <div className='flex gap-4'>
                        <Linkedin size={24}  />
                        <Instagram size={24} />
                        <Facebook size={24} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer