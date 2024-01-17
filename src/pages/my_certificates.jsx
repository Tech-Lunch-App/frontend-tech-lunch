import axios from "axios";
import { useEffect, useState } from "react";
import BottomNavBar from '@/components/bottom-navBar';
import { useRouter } from "next/router";
import Certificates from "@/components/certificates";

function Adicionar() {

  return (<>
    <div className="overflow-x-hidden">
      <div className="absolute w-full bg-[#222]">
        <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md'>
          <BottomNavBar />
        </header>
      </div>
      <div className="flex flex-col items-center bg-white h-screen w-screen">
      <h3 className="flex text-lg font-semibold">Meus Certificados</h3>
          <Certificates />
      </div>
      <div>
      </div>

    </div>
  </>);
}

export default Adicionar;
