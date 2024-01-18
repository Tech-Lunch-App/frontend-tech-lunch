import { useRouter } from "next/router";
import Coala from 'public/images/Koala.jpg';
import Image from "next/image";

function Certificates() {

    const router = useRouter()

    return (
        <>
            <div className="artboard artboard-horizontal phone-1"><Image className="pl-6" src={Coala} /></div>
        </>
    );
}

export default Certificates;