import Image from "next/image";

function MenuAdmin() {

    return (
        <>
            <div className="flex w-full mt-44 justify-between ml-10">
                <div className="flex">
                    <ul className="menu bg-white w-80 h-96 rounded-box ">
                        <li className="menu-title text-black text-xl font-semibold pt-4"> Menu de Opções </li>
                        <li className="text-xl ml-6 pb-4"><a>Eventos</a></li>
                        <li className="text-xl ml-6 pb-4"><a>Figuras</a></li>
                        <li className="text-xl ml-6 pb-4"><a>Usuários</a></li>
                        <li className="text-xl ml-6 pb-4"><a>Presença</a></li>
                        <li className="text-xl ml-6 pb-4"><a>Formulários</a></li>
                    </ul>
                </div>

                <div className="w-9/12 bg-white rounded-box mr-24">

                    <div className="flex justify-between mx-24 mt-12">
                        <h2 className="text-black text-lg font-semibold"> Quadro de Eventos </h2>

                        <button className="btn btn-sm bg-[#d9d9d9] rounded-box"> + Adicionar Evento </button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default MenuAdmin;