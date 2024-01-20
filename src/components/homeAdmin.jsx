import Image from "next/image";
import Link from "next/link";


function HomeAdmin() {

    return (
        <>
            <div className="flex w-full mt-44 justify-between ml-10">
                <div className="flex">
                    <ul className="menu bg-white w-80 h-96 rounded-box ">
                        
                        <li className="menu-title text-black text-xl font-semibold pt-4"> Menu de Opções </li>
                        <Link href='/ger_eventos'><li className="text-xl ml-6 pb-4"><p>Eventos</p></li></Link>
                        <li className="text-xl ml-6 pb-4"><p>Figuras</p></li>
                        <li className="text-xl ml-6 pb-4"><p>Usuários</p></li>
                        <li className="text-xl ml-6 pb-4"><p>Presença</p></li>
                        <li className="text-xl ml-6 pb-4"><p>Formulários</p></li>
                    </ul>
                </div>

                <div className="w-9/12 bg-white rounded-box mr-24">

                    <div className="flex justify-between mx-24 mt-12">
                        <h2 className="text-black text-lg font-semibold"> Quadro de Eventos </h2>

                        <Link href='/ger_eventos'><button className="btn btn-sm bg-[#d9d9d9] rounded-box"> + Adicionar Evento </button></Link>
                    </div>

                    <div className="h-9/12">
                        <div className="overflow-x-hidden mt-6 mx-10">
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
        </>
    );
}

export default HomeAdmin;