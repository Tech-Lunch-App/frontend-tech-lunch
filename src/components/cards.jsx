import Image from "next/image";
import { useRouter } from "next/router";
import desbloqueada from "public/images/figs_desbloqueadas.png"

function Cards() {

    const router = useRouter()

    return (
        <>
            <div className=" pl-20 justify-center space-x-20 mt-4">
                {/* card 1 */}
                <div className="w-64 carousel rounded-box">
                    <div className="carousel-item w-full">
                        <Image src={desbloqueada} className="w-full"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;