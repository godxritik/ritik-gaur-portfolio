import Header from "./Header";
import githubLogo from "../assets/githubLogo.svg"
import linkedinLogo from "../assets/linkedinLogo.svg"
import figmaLogo from "../assets/figmaLogo.svg"
import twitterLogo from "../assets/twitterLogo.svg"



function Pages() {
   return (
      <div className="w-full  flex justify-center py-3">
         <div>
            <div className=" m-4 p-2 shadow-md shadow-[#ae9fea] rounded-md hover:scale-105 transition-all"><a target="_blank" href="https://github.com/godxritik"><img className="w-[100px] m-2" src={githubLogo} alt="" /> </a></div>
            <div className=" m-4 p-2 shadow-md shadow-[#ae9fea] rounded-md hover:scale-105 transition-all"><a target="_blank" href="https://www.linkedin.com/in/ritik-gaur-172498227/" ><img className="w-[100px] m-2" src={linkedinLogo} alt="" /></a></div>
         </div>
         <div>
            <div className="m-4 p-2 shadow-md shadow-[#ae9fea] rounded-md hover:scale-105 transition-all"><a target="_blank" href="https://www.figma.com/files/team/1360483506155381578/recents-and-sharing/recently-viewed?fuid=1360483503816787411"><img className="w-[100px] m-2" src={figmaLogo} alt="https://github.com/godxritik" /></a></div>
            <div className=" m-4 p-2 shadow-md shadow-[#ae9fea] rounded-md  hover:scale-105 transition-all"><a target="_blank" href="#"><img className="w-[100px] m-2" src={twitterLogo} alt="" /></a></div>
         </div>
      </div>
   );
}

export default Pages;