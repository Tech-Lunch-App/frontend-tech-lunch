import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from '@/components/navbar';
import BottomNavBar from '@/components/bottom-navBar';
import { useRouter } from "next/router";

function Adicionar() {

  return (<>
    <div className="overflow-hidden ">
      <div className="absolute w-full bg-[#222]">
        <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md'>
          <NavBar />
          <BottomNavBar />
        </header>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#222] h-screen w-screen">
      </div>
      <div>
      </div>

    </div>
  </>);
}

export default Adicionar;
