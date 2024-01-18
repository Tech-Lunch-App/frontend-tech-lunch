import Image from "next/image";
import { useRouter } from "next/router";

function CardsBloquedos() {

    const router = useRouter()

    return (
        <>
        <div className="flex justify-center space-x-20 pt-10">
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

            {/* card 4 */}

            <div className="w-64 carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                </div> 
            </div>
            </div>
            
        </>
    );
}

export default CardsBloquedos;