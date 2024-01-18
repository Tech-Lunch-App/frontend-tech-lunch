import { useRouter } from "next/router";
import Coala from 'public/images/Koala.jpg';
import Image from "next/image";

function Certificates() {

    const router = useRouter()

    return (
        <>
            <div className="w-60 h-60"><Image className="pl-6 w-full" src={Coala} /></div>
        </>
    );
}

export default Certificates;