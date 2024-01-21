import BottomNavBar from '@/components/bottom-navBar';
import Image from "next/image";
import Footer from '@/components/footer';
import frame1 from 'public/images/framesEventos/frame1.png'
import frame2 from 'public/images/framesEventos/frame2.png'
import frame3 from 'public/images/framesEventos/frame3.png'
import frame4 from 'public/images/framesEventos/frame4.png'

function Adicionar() {

    return (<>
        <div className="overflow-x-hidden bg-white dark:bg-[#2f2f2f]">
            <div className="absolute w-full bg-[#222]">
                <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md'>
                    <BottomNavBar />
                </header>
            </div>
            <div>
                <div className="flex items-center justify-between mt-32 mr-20">
                    <h3 className="flex ml-20 text-xl font-semibold">Meus Eventos</h3>

                    <div className="flex gap-6 items-center font-semibold text-lg">
                        <p> Registrar Presença </p>
                        <button className="btn-sm btn btn-circle border-none  border-black bg-[#b6b6b6] hover:bg-[#919191] items-center"
                            onClick={() => document.getElementById('my_modal_4').showModal()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-4 h-4 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-3xl">
                                <h3 className="font-bold text-lg"> Insira o código do evento: </h3>
                                <input type="text" placeholder="Type here" className="input w-full max-w-xs bg-[#E8E8E8] mt-3" />
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>

                <h3 className="pl-20 justify-center text-xl font-semibold mt-12">Minha Lista</h3>
                <hr class="w-11/12 h-0.5 mx-auto my-4 bg-[#c2c2c2] border-0 rounded md:my-10 dark:bg-[#757575]" />

                <div className=" pl-20 justify-center space-x-20 mt-14">

                    {/* card 1 */}
                    <div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <Image src={frame2} className="w-full" />
                        </div>
                    </div>

                    {/* card 2 */}

                    <div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <Image src={frame3} className="w-full" />
                        </div>
                    </div>
                </div>

                <h3 className="pl-20 justify-center text-xl font-semibold mt-14">Presença Confirmada</h3>
                <hr class="w-11/12 h-0.5 mx-auto my-4 bg-[#c2c2c2] border-0 rounded md:my-10 dark:bg-[#757575]" />

                <div className=" pl-20 justify-center space-x-20 mt-14">

                    {/* card 1 */}

                    <div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <Image src={frame4} className="w-full" />
                        </div>
                    </div>
                </div>

                <h3 className="pl-20 justify-center text-xl font-semibold mt-14">Eventos Anteriores</h3>
                <hr class="w-11/12 h-0.5 mx-auto my-4 bg-[#c2c2c2] border-0 rounded md:my-10 dark:bg-[#757575]" />

                <div className=" pl-20 justify-center space-x-20 mt-14">

                    {/* card 1 */}
                    <div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <Image src={frame1} className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
            <footer className='pt-14'>
                <Footer />
            </footer>
        </div>
    </>);
}

export default Adicionar;
