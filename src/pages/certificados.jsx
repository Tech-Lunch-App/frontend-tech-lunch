import BottomNavBar from '@/components/bottom-navBar';
import Certificates from "@/components/certificates";
import Footer from '@/components/footer';

function Adicionar() {

  return (<>
    <div className="overflow-x-hidden bg-white dark:bg-[#2f2f2f]">
      <div className="absolute w-full bg-[#222]">
        <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md dark:bg-[#2f2f2f]'>
          <BottomNavBar />
        </header>
      </div>
      <div className="flex flex-col items-center bg-white h-screen w-screen mt-28 dark:bg-[#2f2f2f]">
      <h3 className="flex text-xl font-semibold">Meus Certificados</h3>
          <Certificates />
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  </>);
}

export default Adicionar;
