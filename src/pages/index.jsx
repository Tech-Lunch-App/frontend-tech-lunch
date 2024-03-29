import BottomNavBar from '@/components/bottom-navBar';
import Carousel from "@/components/carousel";
import CardsHome from "@/components/cardsHome"
import Sobre from "@/components/sobre";
import Footer from "@/components/footer";

function Adicionar() {

  return (<>
    <div className="overflow-hidden bg-white dark:bg-[#2f2f2f]">
      <div className="absolute w-full bg-[#222]">
        <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md'>
          <BottomNavBar/>
        </header>
      </div>
      <div className="flex flex-col justify-center items-center bg-white w-screen top-10 dark:bg-[#2f2f2f]">
        <Carousel/>
        <h3 className="flex justify-center text-lg font-semibold mt-10">Próximos Eventos</h3>
        <CardsHome/>
      </div>
      <div>
        <Sobre/>
      </div>
      
      <footer>
        <Footer/>
      </footer>
    </div>
  </>);
}

export default Adicionar;
