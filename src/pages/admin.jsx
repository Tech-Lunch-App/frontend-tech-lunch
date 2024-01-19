import BottomNavBar from '@/components/bottom-navBar';
import Footer from "@/components/footer";
import MenuAdmin from "@/components/menuAdmin";

function Adicionar() {

  return (<>
    <div className="overflow-hidden dark:bg-[#2f2f2f]">
      <div className="absolute w-full bg-[#e2e2e2]">
        <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md bg-[#e2e2e2]'>
          <BottomNavBar/>
        </header>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#e2e2e2] w-screen top-10 dark:bg-[#2f2f2f]">

        <div className='w-full'>
          <div className="">
            <MenuAdmin/>
            <div className="bg-[#e8e8e8] h-9/12">
                        <div className="overflow-x-auto  mt-6">
                            <table className="table bg-[#d9d9d9]">
                                {/* head */}
                                <thead>
                                    <tr className="bg-[#e8e8e8] text-sm text-[#100]">
                                        <th>Nome</th>
                                        <th >Data</th>
                                        <th>Presenças</th>
                                        <th> NFT's coletadas </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="h-14">
                                        <td>1º Edição TechLunch</td>
                                        <td>17/01/2024</td>
                                        <td>300</td>
                                        <td>250</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr  className="h-14" >
                                        <td>2º Edição TechLunch</td>
                                        <td>19/01/2024</td>
                                        <td>90</td>
                                        <td>23</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className="h-14">
                                        <td>3º Edição TechLunch</td>
                                        <td>21/01/2024</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
          </div>
        </div>

      </div>  
    </div>
    <footer className='pt-80 bg-[#e2e2e2]'>
        <Footer/>
      </footer>
  </>);
}

export default Adicionar;
