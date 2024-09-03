import Pages from "./Pages";
import Home from "./Home";
import Portfolio from "./Portfolio";

function Navbar() {
    return ( 
        <div>
            <ul className="flex">
                <li className="px-4 py-2 hover:scale-110 transition-all"><a className="hover:text-[#7454F4] hover:border-b-2 hover:border-[#7454F4] py-1 transition-all cursor-pointer" href="/">Home</a></li>
                
                <li  className="px-4 py-2 hover:scale-110 transition-all"><a className="hover:text-[#7454F4] hover:border-b-2 hover:border-[#7454F4] py-1 transition-all cursor-pointer" href="/Portfolio">Portfolio</a></li>
                <li  className="px-4 py-2 hover:scale-110 transition-all "><a className=" hover:text-[#7454F4] hover:border-b-2 hover:border-[#7454F4] py-1 transition-all cursor-pointer " href="/Pages">Pages</a></li>
            </ul>
        </div>
     );
}

export default Navbar;