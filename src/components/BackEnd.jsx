import nodeLogo from "../assets/nodeLogo.svg"
import sqlLogo from "../assets/sqlLogo.svg"
import expressLogo from "../assets/expressLogo.svg"
import mysqlLogo from "../assets/mysqlLogo.svg"

function BackEnd() {
    return ( 
        <div>
            <div className="w-full  px-2 py-4">
            <span className="mx-2 py-1 text-lg font-semibold  text-[#eb3d37] hover:border-b-2 hover:border-[#eb3d37] transition-all">Back-end Technologies</span>

         <div className="flex gap-4 overflow-x-scroll no-scrollbar  ">
            <div className="flex flex-col  p-2 h-[200px] ">
               <div className="w-[250px] h-[160px]  py-4 shadow-md shadow-[#ae9fea] rounded-lg " >
                  <img className="mx-auto shadow-lg  shadow-[7454F4]" width="100px" src={nodeLogo} alt="" />
               </div>
               <p className="text-[#7454F4] my-1">Node.Js</p>
            </div>
         
            <div className="flex flex-col  p-2 h-[200px] ">
               <div className="w-[250px] h-[160px]   py-4 shadow-md shadow-[#ae9fea] rounded-lg " >
                  <img className="mx-auto" width="120px" src={expressLogo} alt="" />
               </div>
               <p className="text-[#7454F4] my-1">Express.Js</p>
            </div>

            <div className="flex flex-col  p-2 h-[200px] ">
               <div className="w-[250px] h-[160px]   py-4 shadow-md shadow-[#ae9fea] rounded-lg " >
                  <img className="mx-auto" width="80px" src={sqlLogo} alt="" />
               </div>
               <p className="text-[#7454F4] my-1">SQL</p>
            </div>

            <div className="flex flex-col  p-2 h-[200px] ">
               <div className="w-[250px] h-[160px]  py-4 shadow-md shadow-[#ae9fea] rounded-lg " >
                  <img className="mx-auto" width="120px" src={mysqlLogo} alt="" />
               </div>
               <p className="text-[#7454F4] my-1">MySQL</p>
            </div>

            
         </div>


      </div>
        </div>
     );
}

export default BackEnd;