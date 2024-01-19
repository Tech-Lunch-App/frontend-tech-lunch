import Image from "next/image";
import { useRouter } from "next/router";
import frame1 from 'public/images/framesEventos/frame1.png'
import frame2 from 'public/images/framesEventos/frame2.png'
import frame3 from 'public/images/framesEventos/frame3.png'
import frame4 from 'public/images/framesEventos/frame4.png'


function CardsHome() {

    const router = useRouter()

    return (
        <>
        <div className="flex justify-center space-x-20 pt-10">
            {/* card 1 */}

            <label class="swap swap-flip text-9xl">
                <input type="checkbox" />
                
                <div class="swap-off"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                <Image className="w-full" src={frame1} alt="Tailwind CSS Carousel component"/> 
                </div> 
                </div></div>
                <div class="swap-on"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                <Image className="w-full" src={frame1} alt="Tailwind CSS Carousel component"/> 
                </div> 
                </div></div>
            </label>
                

            {/* card 2 */}

            <label class="swap swap-flip text-9xl">
                <input type="checkbox" />
                
                <div class="swap-off"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                    
                    <Image className="w-full" src={frame2} alt="Tailwind CSS Carousel component"/> 
                </div> 
                </div></div>
                <div class="swap-on"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                <Image className="w-full" src={frame2} alt="Tailwind CSS Carousel component"/> 
                </div> 
                </div></div>
            </label>

            {/* card 3 */}

            <label class="swap swap-flip text-9xl">
                <input type="checkbox" />
                
                <div class="swap-off"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                <Image className="w-full" src={frame3} alt="Tailwind CSS Carousel component"/> 
                </div> 
                </div></div>
                <div class="swap-on"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                <Image className="w-full" src={frame3} alt="Tailwind CSS Carousel component"/> 
                </div> 
                </div></div>
            </label>

            {/* card 4 */}

            <label class="swap swap-flip text-9xl">
                <input type="checkbox" />
                
                <div class="swap-off"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                <Image className="w-full" src={frame4} alt="Tailwind CSS Carousel component"/> 
                </div> 
                </div></div>
                <div class="swap-on"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                <Image className="w-full" src={frame4} alt="Tailwind CSS Carousel component"/> 
                </div> 
                </div></div>
            </label>
            </div>
            
        </>
    );
}

export default CardsHome;