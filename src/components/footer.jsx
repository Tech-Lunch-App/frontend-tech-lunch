import Bosch from 'public/images/bosch.png'
import Image from "next/image";
import boschinho from 'public/images/boschinho.png'

function Footer() {
    return (<>
        <div className="bg-[#3d3d3d] text-gray-300 body-font ">
            <div className="container mx-auto py-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4 sm:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Ajuda</h2>
                        <p>Dúvidas Gerais</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4 sm:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Contato</h2>
                        <p>grupo@gmail.com</p>
                        <p>(19) 99824-0943</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4 sm:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Sobre nós</h2>
                        <a href="/" className="text-gray-300 hover:text-white">
                            História
                        </a>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4 sm:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Redes Sociais</h2>
                        <i className="bx bxl-instagram text-xl"></i> @techlunch
                    </div>
                </div>
            </div>
            <div className="bg-[#3d3d3d]">
                <div className="container mx-auto py-4 text-center text-sm">
                    <p>&copy; 2023 TechLunch Todos os direitos reservados.</p>
                </div>
            </div>
            {/* <Image className="w-full h-2" src={Bosch} /> */}
        </div>
    </>);
}

export default Footer;