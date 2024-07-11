import Image from "next/image";
import frame1 from 'public/images/framesEventos/frame1.png'
import frame2 from 'public/images/framesEventos/frame2.png'
import frame3 from 'public/images/framesEventos/frame3.png'
import frame4 from 'public/images/framesEventos/frame4.png'
import verso1 from 'public/images/framesEventos/verso1.png'
import verso2 from 'public/images/framesEventos/verso2.png'
import verso3 from 'public/images/framesEventos/verso3.png'
import verso4 from 'public/images/framesEventos/verso4.png'


function CardsHome() {
    return (
        <>
            <div className="flex justify-center space-x-20 pt-10">

                {/* card 1 */}

                <label className="swap swap-flip text-9xl">
                    <input type="checkbox" />
                    <div className="swap-off"><div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <Image className="w-full" src={frame1} alt="Tailwind CSS Carousel component" />
                        </div>
                    </div></div>
                    <div class="swap-on"><div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <Image className="w-full" src={verso1} alt="Tailwind CSS Carousel component" />
                        </div>
                    </div></div>
                </label>

                {/* card 2 */}

                <label className="swap swap-flip text-9xl">
                    <input type="checkbox" />
                    <div className="swap-off"><div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <Image className="w-full" src={frame2} alt="Tailwind CSS Carousel component" />
                        </div>
                    </div></div>
                    <div className="swap-on"><div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <Image className="w-full" src={verso2} alt="Tailwind CSS Carousel component" />
                        </div>
                    </div></div>
                </label>

                {/* card 3 */}

                <label className="swap swap-flip text-9xl">
                    <input type="checkbox" />
                    <div className="swap-off"><div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <Image className="w-full" src={frame3} alt="Tailwind CSS Carousel component" />
                        </div>
                    </div></div>
                    <div className="swap-on"><div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <Image className="w-full" src={verso3} alt="Tailwind CSS Carousel component" />
                        </div>
                    </div></div>
                </label>

                {/* card 4 */}

                <label className="swap swap-flip text-9xl">
                    <input type="checkbox" />
                    <div className="swap-off"><div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <Image className="w-full" src={frame4} alt="Tailwind CSS Carousel component" />
                        </div>
                    </div></div>
                    <div className="swap-on"><div className="w-64 carousel rounded-box">
                        <div className="carousel-item w-full">
                            <Image className="w-full" src={verso4} alt="Tailwind CSS Carousel component" />
                        </div>
                    </div></div>
                </label>
            </div>
        </>
    );
}

export default CardsHome;