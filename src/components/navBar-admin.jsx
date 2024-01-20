import Logo from 'public/images/Logo.png'
import Bosch from 'public/images/bosch.png'
import Link from "next/link";
import Image from "next/image";


function NavBarAdmin() {
  return (<>

    <Image className="w-full h-2" src={Bosch}/>
    <div className="navbar bg-base-100 h-20">
      <div className="navbar-start">
        <Image className="p-1 w-52" src={Logo}/>
        <h1 className='text-2xl'>Administration</h1>

        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 p-1 space-x-40 text-base font-normal">
          
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none">

          <div className="dropdown dropdown-end">
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
        <h3 className='px-2'>User</h3>
      </div>
    </div>

  </>);
}

export default NavBarAdmin;