import { useRouter } from "next/router";
import Coala from 'public/images/Koala.jpg';
import Image from "next/image";

function Certificates() {

    const router = useRouter()

    return (
        <>
        <div className="flex mt-5 gap-10">
            <div className="">
                <div className="w-60"><Image className="w-full" src={Coala} /></div>
                <div className="flex justify-around">
                    <button className="btn btn-xs mt-3 bg-[#3295F2] text-white min-w-20 hover:bg-[#1d578f]">Baixar</button>
                    <button className="btn btn-xs mt-3 bg-[#3295F2] text-white min-w-20 hover:bg-[#1d578f]">Visualizar</button>
                </div>
            </div>
            <div className="">
                <div className="w-60"><Image className="w-full" src={Coala} /></div>
                <div className="flex justify-around">
                    <button className="btn btn-xs mt-3 bg-[#3295F2] text-white min-w-20 hover:bg-[#1d578f]">Baixar</button>
                    <button className="btn btn-xs mt-3 bg-[#3295F2] text-white min-w-20 hover:bg-[#1d578f]">Visualizar</button>
                </div>
            </div>
            <div className="">
                <div className="w-60"><Image className="w-full" src={Coala} /></div>
                <div className="flex justify-around">
                    <button className="btn btn-xs mt-3 bg-[#3295F2] text-white min-w-20 hover:bg-[#1d578f]">Baixar</button>
                    <button className="btn btn-xs mt-3 bg-[#3295F2] text-white min-w-20 hover:bg-[#1d578f]">Visualizar</button>
                </div>
            </div>
            <div className="">
                <div className="w-60"><Image className="w-full" src={Coala} /></div>
                <div className="flex justify-around">
                    <button className="btn btn-xs mt-3 bg-[#3295F2] text-white min-w-20 hover:bg-[#1d578f]">Baixar</button>
                    <button className="btn btn-xs mt-3 bg-[#3295F2] text-white min-w-20 hover:bg-[#1d578f]">Visualizar</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Certificates;