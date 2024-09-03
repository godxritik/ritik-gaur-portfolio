import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Projects from "./Projects";
import Others from "./Others";

function Portfolio() {
    return ( 
        <div className="overflow-y-scroll no-scrollbar">
            <FrontEnd/>
            <BackEnd/>
            <Projects/>
            <Others/>
        </div>
     );
}

export default Portfolio;