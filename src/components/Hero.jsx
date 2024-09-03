import pic from "../assets/pic.png"
import ritikResume from "../assets/ritikResume.pdf"
function Hero() {
    return ( 
        <div className="flex ">
            <div className="w-[400px] md:w-[500px] lg:w-[600px]  flex flex-col flex-wrap justify-center px-6  ">
                <div className="w-[70px] h-[4px] bg-[#7454F4] rounded-xl my-2"></div>
                <h1 className="text-5xl my-2 font-semibold text-[#272727] ">I'm Ritik Gaur,</h1>

                <p className="text-2xl">A <span className="text-3xl text-[#7454F4] font-semibold tracking-wider ">Full Stack Web Developer</span></p>

                <p className="my-2 text-[#7f7f7f]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi obcaecati inventore soluta, repudiandae laudantium eum laborum sit ullam sequi enim cupiditate, aperiam magni suscipit sunt deleniti quas. Fugit, esse?</p>

                <div className="w-[340px] flex justify-between my-4 ">
                    <a href={ritikResume} download={ritikResume.pdf} target="_blank"  className="px-4 py-2 rounded-lg bg-[#7454F4] text-white font-semibold hover:text-[#7454F4] hover:bg-white border-2 hover:border-[#7454F4] hover:scale-105 transition-all">Download Resume</a>
                   
                    <a className="px-4 py-2 rounded-lg border border-[#7454F4] text-[#7454F4] font-semibold hover:bg-[#ececed] hover:text-[#7f7d7d] transition-all duration-800 hover:scale-105 hover:border-1 hover:border-[#3f3f3f] " href="/Portfolio">Browse portfolio</a>
                </div>

            </div>


            <div className="w-[250px] md:w-[300px] lg:w-[400px]  ">
                <img  src={pic} alt="" />
            </div>
        </div>
     );
}

export default Hero;
