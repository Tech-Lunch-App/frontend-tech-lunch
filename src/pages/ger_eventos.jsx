import GerEventos from "@/components/gerEventos";
import BottomNavBar from "@/components/bottom-navBar";
import Footer from "@/components/footer";
import NavBarAdmin from "@/components/navBar-admin";

function Adicionar() {

    return (<>
      <div className="overflow-hidden dark:bg-[#2f2f2f]">
        <div className="absolute w-full bg-[#e2e2e2]">
          <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md bg-[#e2e2e2]'>
            <NavBarAdmin/>
          </header>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#e2e2e2] w-screen top-10 dark:bg-[#2f2f2f]">
  
          <div className='w-full bg-[#e2e2e2]'>
            <div className="bg-[#e2e2e2]">
              <GerEventos/>
            </div>
          </div>
  
        </div>  
      </div>
      <footer className='pt-56 bg-[#e2e2e2]'>
          <Footer/>
        </footer>
    </>);
  }

export default Adicionar;
