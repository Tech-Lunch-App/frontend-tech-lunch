import axios from "axios";
import BottomNavBar from '@/components/bottom-navBar';
import Cards from "@/components/cards"
import CardsBloquedos from "@/components/cardsBloquedos";
import Footer from "@/components/footer";


function Adicionar() {

  return (<>
    <div className=" bg-white overflow-x-hidden">
      <div className="absolute w-full bg-[#c2c2c2]">
        <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md'>
          <BottomNavBar />
        </header>
      </div>
      <h3 className="flex justify-center text-xl font-semibold mt-32">Álbum</h3>

      <div className="flex flex-col justify-center  bg-white h-screen w-screen">
        <div className="mt-28">
          <h3 className="pl-20 justify-center text-xl font-semibold">Minhas Figurinhas</h3>
          <hr class="w-11/12 h-0.5 mx-auto my-4 bg-[#c2c2c2] border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <Cards />
        <div className="mt-6">
          <h3 className="pl-20 justify-center text-xl font-semibold">Figurinhas Bloqueadas</h3>
          <hr class="w-11/12 h-0.5 mx-auto my-4 bg-[#c2c2c2] border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
        <CardsBloquedos />
      </div>
      <div>
      </div>
      <footer className="mt-60">
        <Footer />
      </footer>
    </div>
  </>);
}

export default Adicionar;
