
function Home() {
    return (
        <>
            <div className="bg-sky-50 flex justify-center">
                <div className='container grid grid-cols-2 text-zinc-900'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-3xl font-bold'>
                             Farmácia Magic Pills
                        </h2>
                        <p className='text-xl'>
                            Aqui você encontra Medicamentos e Cosméticos!
                            Tudo para a sua saúde ficar em dia!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white bg-sky-900
                                            py-2 px-4'
                                >
                                Cadastrar novo produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="/undraw_doctor_aum1.svg"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home