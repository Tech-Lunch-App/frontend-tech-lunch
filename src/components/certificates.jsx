import Certificado1 from 'public/images/certificado1.png'
import Image from "next/image";

function Certificates() {

    return (
        <>
            <div className="flex mt-10 gap-10">
                <div className="">
                    <div className="w-96"><Image className="w-full hover:" src={Certificado1} /></div>
                    <h3 className="flex justify-center mt-3 text-xl">1º Edição TechLunch</h3>
                    <div className="flex justify-around">
                        <button className="btn btn-sm mt-3 bg-[#3295F2] text-white min-w-20 hover:bg-[#1d578f] border-none">Baixar</button>
                        <button className="btn btn-sm mt-3 bg-[#3295F2] text-white min-w-28 hover:bg-[#1d578f] border-none">Visualizar</button>
                    </div>
                </div>
                <div className="">
                    <div className="w-96"><Image className="w-full" src={Certificado1} /></div>
                    <h3 className="flex justify-center mt-3 text-xl">2º Edição TechLunch</h3>
                    <div className="flex justify-around">
                        <button className="btn btn-sm mt-3 bg-[#3295F2] text-white min-w-20 hover:bg-[#1d578f] border-none">Baixar</button>
                        <button className="btn btn-sm mt-3 bg-[#3295F2] text-white min-w-28 hover:bg-[#1d578f] border-none">Visualizar</button>
                    </div>
                </div>
                <div className="">
                    <div className="w-96"><Image className="w-full" src={Certificado1} /></div>
                    <h3 className="flex justify-center mt-3 text-xl">3º Edição TechLunch</h3>
                    <div className="flex justify-around">
                        <button className="btn btn-sm mt-3 bg-[#3295F2] text-white min-w-20 hover:bg-[#1d578f] border-none">Baixar</button>
                        <button className="btn btn-sm mt-3 bg-[#3295F2] text-white min-w-28 hover:bg-[#1d578f] border-none">Visualizar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Certificates;