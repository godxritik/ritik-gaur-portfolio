import gitLogo from "../assets/gitLogo.svg";
import githubLogo from "../assets/githubLogo.svg";
function Others() {
    return ( 
        <div className="w-full px-2 py-4">
            <span className="mx-2 py-1 text-lg font-semibold text-[#eb3d37] hover:border-b-2 hover:border-[#eb3d37] transition-all">Libraries & other technologies</span>
        

         <div className="flex gap-4 overflow-x-scroll no-scrollbar scroll-horizontal  ">
            <div className="flex flex-col  p-2 h-[200px] ">
               <div className="w-[250px] h-[160px]  py-4 shadow-md shadow-[#ae9fea] rounded-lg " >
                  <img className="mx-auto shadow-lg  shadow-[7454F4]" width="120px" src={gitLogo} alt="" />
               </div>
               <p className="text-[#7454F4] my-1">Git - version control</p>
            </div>
         
            <div className="flex flex-col  p-2 h-[200px] ">
               <div className="w-[250px] h-[160px]   py-4 shadow-md shadow-[#ae9fea] rounded-lg " >
                  <img className="mx-auto" width="120px" src={githubLogo} alt="" />
               </div>
               <p className="text-[#7454F4] my-1">Github - repositories</p>
            </div>  

           

         </div>


      </div>
     );
}

export default Others;