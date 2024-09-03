import fitnessLogo from "../assets/fitnessLogo.png"
import keepNotes from "../assets/keepNotes.png"
import netflixLogo from "../assets/netflix.svg"
import calculatorLogo from "../assets/calculatorLogo.png"

function Projects() {
    return ( 
        <div className="w-full  px-2 py-4">
        <span className="mx-2 py-1 text-lg font-semibold  text-[rgb(235,61,55)] hover:border-b-2 hover:border-[#eb3d37] transition-all">Projects</span>

     <div className="flex gap-4 overflow-x-scroll no-scrollbar  ">
        <div className="flex flex-col  p-2 h-[200px] ">
           <div className="w-[250px] h-[160px]  py-4 shadow-md shadow-[#ae9fea] rounded-lg flex items-center " >
              <img className="mx-auto w-[200px] "  src={fitnessLogo} alt="" />
           </div>
           <p className="text-[#7454F4] my-1">Fitpro - the fitness app</p>
        </div>
     
        <div className="flex flex-col  p-2 h-[200px] ">
           <div className="w-[250px] h-[160px]   py-4 shadow-md shadow-[#ae9fea] rounded-lg flex items-center  " >
              <img className="mx-auto  " width="120px" src={keepNotes} alt="" />
           </div>
           <p className="text-[#7454F4] my-1">Keeper - a notes app</p>
        </div>

        <div className="flex flex-col  p-2 h-[200px] ">
           <div className="w-[250px] h-[160px]   py-4 shadow-md shadow-[#ae9fea] rounded-lg flex items-center " >
              <img className="mx-auto" width="50px" src={netflixLogo} alt="" />
           </div>
           <p className="text-[#7454F4] my-1">Netflix clone</p>
        </div>

        <div className="flex flex-col  p-2 h-[200px] ">
           <div className="w-[250px] h-[160px]  py-4 shadow-md shadow-[#ae9fea] rounded-lg flex items-center " >
              <img className="mx-auto" width="140px" src={calculatorLogo} alt="" />
           </div>
           <p className="text-[#7454F4] my-1">Calculator - ios theme</p>
        </div>

        
     </div>


  </div>
     );
}

export default Projects;