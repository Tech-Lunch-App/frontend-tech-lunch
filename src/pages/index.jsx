import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from '@/components/navbar';
import BottomNavBar from '@/components/bottom-navBar';
import { useRouter } from "next/router";



function Adicionar() {
  const router = useRouter()

  const [nome, setnome] = useState("")
  const [cpf, setcpf] = useState("")
  const [data, setdata] = useState("")
  const [hora, sethora] = useState("")
  const [motivo, setmotivo] = useState("")

  const handleNomeChange = (event) => {
    setnome(event.target.value);
  };

  const handleCpfChange = (event) => {
    setcpf(event.target.value);
  };

  const handleDataChange = (event) => {
    setdata(event.target.value);
  };

  const handleHoraChange = (event) => {
    sethora(event.target.value);
  };

  const handleMotivoChange = (event) => {
    setmotivo(event.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();

    formData.append('paciente', nome);
    formData.append("cpf",cpf)
    formData.append('data', data);
    formData.append('hora', hora);
    formData.append('motivo', motivo);

    try {
      const response = await axios.post('http://192.168.0.13:8000/agendamento/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(() => { router.push('/consultas') });
      


    } catch (error) {
      console.error('Erro ao agendar horario:', error.message);
    }

  }

  return (<>
    <div className="overflow-hidden">
      <div className="absolute w-full bg-[#222]">
        <header className='fixed top-0 left-0 w-full z-10 bg-white shadow-md'>
          <NavBar />
          <BottomNavBar />
        </header>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#222] h-screen w-screen">
      

      </div>
      <div>
      </div>

    </div>
  </>);
}

export default Adicionar;
