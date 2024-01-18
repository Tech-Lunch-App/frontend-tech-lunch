import BottomNavBar from '@/components/bottom-navBar';
import Footer from '@/components/footer';

function Adicionar() {

    return (<>
        <div className="overflow-x-hidden bg-white">
            <div className="absolute w-full bg-[#222]">
                <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md'>
                    <BottomNavBar />
                </header>
            </div>
            <div>
            <h3 className="flex justify-center text-lg font-semibold mt-36">Meus Eventos</h3>
            <hr />

                <h3 className="pl-16 justify-center text-lg font-semibold mt-16">Minha Lista</h3>

                <div className=" pl-16 justify-center space-x-20 mt-14">

                    {/* card 1 */}
                    <div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                    </div>

                    {/* card 2 */}

                    <div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                    </div>

                    {/* card 3 */}

                    <div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                    </div>
                </div>

                <h3 className="pl-16 justify-center text-lg font-semibold mt-14">Presença Confirmada</h3>

                <div className=" pl-16 justify-center space-x-20 mt-14">

                    {/* card 1 */}
                    <div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                    </div>

                    {/* card 2 */}

                    <div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                    </div>
                </div>

                <h3 className="pl-16 justify-center text-lg font-semibold mt-14">Eventos Anteriores</h3>
                <div className=" pl-16 justify-center space-x-20 mt-14">

                    {/* card 1 */}
                    <div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div>
                    </div>
                </div>
            </div>
            <footer className='pt-10'>
            <Footer/>
            </footer>
        </div>
    </>);
}

export default Adicionar;
