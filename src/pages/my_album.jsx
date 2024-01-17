import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from '@/components/navbar';
import BottomNavBar from '@/components/bottom-navBar';
import { useRouter } from "next/router";
import Carousel from "@/components/carousel";
import Cards from "@/components/cards"
import CardsBloquedos from "@/components/cardsBloquedos";

function Adicionar() {

  return (<>
    <div className="overflow-x-hidden">
      <div className="absolute w-full bg-[#222]">
        <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md'>
          <BottomNavBar />
        </header>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen w-screen">
      <h3 className="flex justify-center text-lg font-semibold mt-40">Minhas Figurinhas</h3>
          <Cards />
          <h3 className="flex justify-center text-lg font-semibold mt-20">Figurinhas Bloqueadas</h3>
          <CardsBloquedos />
      </div>
      <div>
      </div>

    </div>
  </>);
}

export default Adicionar;
