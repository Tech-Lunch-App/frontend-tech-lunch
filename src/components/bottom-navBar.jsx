import Logo from 'public/images/Logo.png'
import Bosch from 'public/images/bosch.png'
import Link from "next/link";
import Image from "next/image";


function BottomNavBar() {
  return (<>

    <Image className="w-full h-2" src={Bosch}/>
    <div className="navbar bg-base-100 h-20">
      <div className="navbar-start">
        <Image className="p-1 w-52" src={Logo}/>

        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
            <Link href="/"><li><p>Home</p></li></Link>
            <Link href="eventos"><li><p>Meus Eventos</p></li></Link>
            <Link href="album"><li><p>Meu Album</p></li></Link>
            <Link href="certificados"><li><p>Certificados</p></li></Link>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 p-1 space-x-40 text-base font-normal">
          <Link href="/"><li><p>Home</p></li></Link>
          <Link href="eventos"><li><p>Meus Eventos</p></li></Link>
          <Link href="album"><li><p>Meu Álbum</p></li></Link>
          <Link href="certificados"><li><p>Certificados</p></li></Link>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none">

          <div className="dropdown dropdown-end">
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
        <h3 className='px-2'>User</h3>
      </div>
    </div>

  </>);
}


export default BottomNavBar;