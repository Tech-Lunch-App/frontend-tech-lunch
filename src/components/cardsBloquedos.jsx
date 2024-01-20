import Image from "next/image";
import { useRouter } from "next/router";
import bloqueada from "public/images/figs_bloqueadas.png"


function CardsBloquedos() {

    const router = useRouter()

    return (
        <>
            <div className=" pl-20 justify-center space-x-20 mt-6   ">
                {/* card 1 */}
                <div className="w-64 carousel rounded-box">
                    <div className="carousel-item w-full">
                    <Image src={bloqueada} className="w-full"/>
                    </div>
                </div>
                {/* card 2 */}

                <div className="w-64 carousel rounded-box">
                    <div className="carousel-item w-full">
                    <Image src={bloqueada} className="w-full"/>
                    </div>
                </div>
                {/* card 3 */}

                <div className="w-64 carousel rounded-box">
                    <div className="carousel-item w-full">
                    <Image src={bloqueada} className="w-full"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardsBloquedos;