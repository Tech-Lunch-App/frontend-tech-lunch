import Image from "next/image";
import { useRouter } from "next/router";

function CardsHome() {

    const router = useRouter()

    return (
        <>
        <div className="flex justify-center space-x-20 pt-10">
            {/* card 1 */}

            <label class="swap swap-flip text-9xl">
                <input type="checkbox" />
                
                <div class="swap-on"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
                </div></div>
                <div class="swap-off"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
                </div></div>
            </label>
                

            {/* card 2 */}

            <label class="swap swap-flip text-9xl">
                <input type="checkbox" />
                
                <div class="swap-on"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
                </div></div>
                <div class="swap-off"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
                </div></div>
            </label>

            {/* card 3 */}

            <label class="swap swap-flip text-9xl">
                <input type="checkbox" />
                
                <div class="swap-on"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
                </div></div>
                <div class="swap-off"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
                </div></div>
            </label>

            {/* card 4 */}

            <label class="swap swap-flip text-9xl">
                <input type="checkbox" />
                
                <div class="swap-on"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
                </div></div>
                <div class="swap-off"><div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
                </div></div>
            </label>
            </div>
            
        </>
    );
}

export default CardsHome;