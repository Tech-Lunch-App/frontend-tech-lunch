function GerEventos() {

    return (
        <>
            <div className="flex w-full mt-36 justify-between ml-10">
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
                <div className=" w-9/12 bg-white rounded-box mr-24">
                    <div className="flex justify-center mt-12">
                        <h2 className="text-black text-lg font-semibold"> Gerenciamento de Eventos </h2>
                    </div>
                    <div className="flex justify-center">
                        <div className=" w-4/5 bg-[#e8e8e8] m-8 rounded-box">
                            <div className="flex justify-evenly  pb-10">
                                <div id="left">
                                    <div className=" m-6">
                                        <p className="font-medium mb-2"> Título </p>
                                        <input type="text" placeholder="Adicionar Título" className="input input-bordered input-sm w-full max-w-xs" />
                                        <div className="flex  gap-4 items-center">
                                            <p className="font-medium mt-10"> Data do evento: </p>
                                            <input className="rounded-box p-1.5 mt-10" id="date" type="date" />
                                        </div>
                                        <div className="flex items-center gap-5 mt-10">
                                            <p className="font-medium"> das: </p>
                                            <select className="select select-bordered select-sm max-w-xs rounded-box">
                                                <option> 08:00 </option>
                                                <option> 08:30 </option>
                                                <option> 09:00 </option>
                                                <option> 09:30 </option>
                                                <option> 10:00 </option>
                                                <option> 10:30 </option>
                                                <option> 11:00 </option>
                                                <option> 11:30 </option>
                                                <option> 12:00 </option>
                                                <option> 12:30 </option>
                                                <option> 13:00 </option>
                                                <option> 13:30 </option>
                                                <option> 14:00 </option>
                                                <option> 14:30 </option>
                                                <option> 15:00 </option>
                                                <option> 15:30 </option>
                                                <option> 16:00 </option>
                                                <option> 16:30 </option>
                                                <option> 17:00 </option>
                                            </select>
                                            <p className="font-medium "> às: </p>
                                            <select className="select select-bordered select-sm max-w-xs rounded-box">
                                                <option> 08:00 </option>
                                                <option> 08:30 </option>
                                                <option> 09:00 </option>
                                                <option> 09:30 </option>
                                                <option> 10:00 </option>
                                                <option> 10:30 </option>
                                                <option> 11:00 </option>
                                                <option> 11:30 </option>
                                                <option> 12:00 </option>
                                                <option> 12:30 </option>
                                                <option> 13:00 </option>
                                                <option> 13:30 </option>
                                                <option> 14:00 </option>
                                                <option> 14:30 </option>
                                                <option> 15:00 </option>
                                                <option> 15:30 </option>
                                                <option> 16:00 </option>
                                                <option> 16:30 </option>
                                                <option> 17:00 </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div id="right">
                                    <div className="m-6">
                                        <p className="font-medium mb-2"> Insira os e-mails dos colaboradores da organização </p>
                                        <div className="flex items-center gap-3">
                                            <input type="text" placeholder="example@techlunch.com" className="input input-bordered input-sm w-full max-w-s" />
                                            <button className="btn-xs btn btn-circle border-none  border-black bg-[#b6b6b6] hover:bg-[#919191] items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-4 h-4 ">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <label class="form-control mt-10 ml-6">
                                        <textarea class="textarea textarea-bordered h-24 w-96" placeholder="Descrição"></textarea>
                                    </label>
                                </div>
                            </div>
                            <div className="flex justify-center mt-2 pb-10">
                                <button className="btn rounded-box bg-[#2CA2F0] text-white hover:bg-sky-700">Criar Evento</button>
                            </div>
                        </div>
                    </div>  

                </div>
            </div>
        </>
    );
}

export default GerEventos;