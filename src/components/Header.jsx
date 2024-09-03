import Navbar from "./Navbar";
import logo from "../assets/globe.svg"

function Header() {
    return ( 
        <div className="flex flex-wrap px-4 my-3 justify-between">
            <span className="py-2 text-lg flex hover:scale-105 transition-all "><img className="mx-2 w-[30px] " src={logo}  alt="" />Developer </span>
            <Navbar/>
            <button className="bg-[#7454F4] px-2 sm:invisible  md:visible text-sm  rounded-md text-white font-sans  " >Contact</button>
        </div>
     );
}

export default Header;