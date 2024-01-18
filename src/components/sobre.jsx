import Image from "next/image";
import { useRouter } from "next/router";
import fotoEvento from 'public/images/fotoEvento.png'

function Sobre() {

    const router = useRouter()

    return (
        <>
            <div className="bg-[#292928] mt-24">
                <div>
                    <p className="text-white pl-20 pt-10 text-2xl font-bold"> Sobre o TechLunch </p>
                </div>
                <div className="flex justify-evenly gap-20">
                    <div className="w-7/12 pt-5">
                        <p className="text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat. Tristique risus nec feugiat in fermentum posuere urna. Mi quis hendrerit dolor magna eget est lorem. Nulla aliquet enim tortor at auctor. Auctor urna nunc id cursus metus aliquam eleifend mi in. Eu mi bibendum neque egestas congue quisque. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. A iaculis at erat pellentesque adipiscing commodo elit at. At elementum eu facilisis sed odio. Non arcu risus quis varius quam quisque. In ante metus dictum at tempor commodo. A diam maecenas sed enim ut sem viverra. </p>
                    </div>
                    <div className="w-35 h-25 pb-16">
                        <Image src={fotoEvento} />
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Sobre;