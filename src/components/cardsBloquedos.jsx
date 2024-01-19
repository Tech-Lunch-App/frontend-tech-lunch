import Image from "next/image";
import { useRouter } from "next/router";

function CardsBloquedos() {

    const router = useRouter()

    return (
        <>
            <div className=" pl-20 justify-center space-x-20 mt-6   ">
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
        </>
    );
}

export default CardsBloquedos;