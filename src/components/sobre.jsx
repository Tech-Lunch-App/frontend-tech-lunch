import Image from "next/image";
import { useRouter } from "next/router";
import fotoEvento from 'public/images/fotoEvento.png'

function Sobre() {

    const router = useRouter()

    return (
        <>
            <div className="bg-[#d9d9d9] mt-24">
                <div>
                    <p className="flex justify-center text-[#222] pt-8 text-xl font-bold " > SOBRE O TECHLUNCH </p>
                    <hr class="w-96 h-1.5 mx-auto my-4 bg-[#495cfb] border-0 rounded md:my-10 dark:bg-gray-700"/>
                </div>
                <div className="flex justify-center items-center gap-60 pb-28">
                    <div className="w-96 ">
                        <p className="text-[#222] text-2xl"> TechLunch é um evento que reúne profissionais das áreas para networking, discussões inovadoras e um almoço colaborativo. Os participantes recebem certificados de presença, e a cada evento, ganham uma figurinha exclusiva, tornando a experiência não apenas educativa, mas também memorável.</p>
                    </div>
                    <div className="w-35 h-25 ">
                        <Image src={fotoEvento} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sobre;