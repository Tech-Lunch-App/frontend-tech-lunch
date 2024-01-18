import axios from "axios";
import BottomNavBar from '@/components/bottom-navBar';
import Cards from "@/components/cards"
import CardsBloquedos from "@/components/cardsBloquedos";
import Footer from "@/components/footer";


function Adicionar() {

  return (<>
    <div className=" bg-white overflow-x-hidden">
      <div className="absolute w-full bg-[#222]">
        <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md'>
          <BottomNavBar />
        </header>
      </div>
      <div className="flex flex-col justify-center  bg-white h-screen w-screen">
      <h3 className="flex justify-center text-lg font-semibold mt-40">Minhas Figurinhas</h3>
          <Cards />
          <h3 className="flex justify-center text-lg font-semibold mt-20">Figurinhas Bloqueadas</h3>
          <CardsBloquedos />
      </div>
      <div>
      </div>
      <footer className="mt-28">
          <Footer/>
      </footer>

    </div>
  </>);
}

export default Adicionar;
