import htmlLogo from "../assets/htmlLogo.png"
import cssLogo from "../assets/cssLogo.png"
import jsLogo from "../assets/jsLogo.png"
import reactLogo from "../assets/reactLogo.png"
import framerMotionLogo from "../assets/framerMotionLogo.svg";


function FrontEnd() {
    return ( 
        <div className="w-full px-2 py-4">
            <span className="mx-2 py-1 text-lg font-semibold text-[#eb3d37] hover:border-b-2 hover:border-[#eb3d37] transition-all">Front-end Technologies</span>
        

         <div className="flex gap-4 overflow-x-scroll no-scrollbar scroll-horizontal  ">
            <div className="flex flex-col  p-2 h-[200px] ">
               <div className="w-[250px] h-[160px]  py-4 shadow-md shadow-[#ae9fea] rounded-lg " >
                  <img className="mx-auto shadow-lg  shadow-[7454F4]" width="120px" src={htmlLogo} alt="" />
               </div>
               <p className="text-[#7454F4] my-1">HTML 5</p>
            </div>
         
            <div className="flex flex-col  p-2 h-[200px] ">
               <div className="w-[250px] h-[160px]   py-4 shadow-md shadow-[#ae9fea] rounded-lg " >
                  <img className="mx-auto" width="120px" src={cssLogo} alt="" />
               </div>
               <p className="text-[#7454F4] my-1">CSS</p>
            </div>

            <div className="flex flex-col  p-2 h-[200px] ">
               <div className="w-[250px] h-[160px]   py-4 shadow-md shadow-[#ae9fea] rounded-lg " >
                  <img className="mx-auto rounded-lg" width="120px" src={jsLogo} alt="" />
               </div>
               <p className="text-[#7454F4] my-1">JavaScript</p>
            </div>

            <div className="flex flex-col  p-2 h-[200px] ">
               <div className="w-[250px] h-[160px]  py-4 shadow-md shadow-[#ae9fea] rounded-lg " >
                  <img className="mx-auto" width="120px" src={reactLogo} alt="" />
               </div>
               <p className="text-[#7454F4] my-1">React.Js</p>
            </div>

            <div className="flex flex-col  p-2 h-[200px] ">
               <div className="w-[250px] h-[160px]   py-4 shadow-md shadow-[#ae9fea] rounded-lg " >
                  <img className="mx-auto" width="120px" src={framerMotionLogo} alt="" />
               </div>
               <p className="text-[#7454F4] my-1">Framer Motion library</p>
            </div>  

            
         </div>


      </div>
     );
}

export default FrontEnd;