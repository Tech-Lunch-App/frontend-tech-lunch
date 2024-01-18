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
                <h3 className="flex justify-center text-xl font-semibold mt-32">Meus Eventos</h3>

                <h3 className="pl-20 justify-center text-xl font-semibold mt-12">Minha Lista</h3>
                <hr class="w-11/12 h-0.5 mx-auto my-4 bg-[#c2c2c2] border-0 rounded md:my-10 dark:bg-gray-700" />

                <div className=" pl-20 justify-center space-x-20 mt-14">

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

                <h3 className="pl-20 justify-center text-xl font-semibold mt-14">Presença Confirmada</h3>
                <hr class="w-11/12 h-0.5 mx-auto my-4 bg-[#c2c2c2] border-0 rounded md:my-10 dark:bg-gray-700" />

                <div className=" pl-20 justify-center space-x-20 mt-14">

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

                <h3 className="pl-20 justify-center text-xl font-semibold mt-14">Eventos Anteriores</h3>
                <hr class="w-11/12 h-0.5 mx-auto my-4 bg-[#c2c2c2] border-0 rounded md:my-10 dark:bg-gray-700" />

                <div className=" pl-20 justify-center space-x-20 mt-14">

                    {/* card 1 */}
                    <div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
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
