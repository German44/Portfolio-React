import DividerTag from "../dividerTag/DividerTag";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section
        className="min-h-[100vh] mt-9  flex flex-col w-full items-center"
        id="about"
      >
        <DividerTag tag="About" />
        <div className="container mx-auto min-h-[82vh] bg-black/20 backdrop-blur-2xl rounded-xl flex items-center">
          <div className="w-full min-h-[82vh] flex justify-center items-center">
            <div className="w-full min-h-[70vh] flex flex-col sm:flex-row ">
              <div className="w-full sm:w-1/2 min-h-[35vh] sm:min-h-[70vh]  flex justify-center items-center">
                <div className="w-full sm:w-[90%] min-h-[35vh] sm:min-h-[65vh]  flex flex-col justify-center items-center">
                  <div className=" w-full min-h-[5vh] sm:min-h-[10vh] flex justify-center items-end ">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-primary text-center">
                      Fusion of Design, and Art
                    </h2>
                  </div>
                  <div className=" w-full min-h-[40vh] sm:min-h-[60vh] flex justify-center items-center ">
                    <p className="min-h-[30vh] ext-xl sm:text-xl md:text-2xl lg:text-3xl text-white font-secondary m-2 text-justify">
                      Hi, I’m German Ravarotto from Argentina UX/UI Designer and
                      Frontend Developer with an background as a jewelry artist,
                      electronic technician, and musician. My designs blend
                      creativity with problem-solving to create innovative
                      digital experiences. I love crafting new things and
                      bringing them to life through responsive, high-performance
                      websites and applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 min-h-[35vh] sm:min-h-[70vh]  flex flex-col justify-center items-center">
                <div className="w-full min-h-[5vh] sm:min-h-[5vh] flex justify-center items-end  ">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[44px] font-bold text-white font-primary text-center">
                    Skills & Tools
                  </h2>
                </div>
                <div className=" w-full min-h-[40vh] sm:min-h-[65vh] flex justify-center items-center m-4 ">
                  <div className=" w-[90%] min-h-[30vh] sm:min-h-[60vh] grid grid-cols-3 grid-rows-5 gap-4 ">
                    <div className="border-2 border-white rounded-xl flex justify-center items-center ">
                      <FaHtml5 size={100} color="white" />
                    </div>
                    <div></div>
                    <div className="border-2 border-white rounded-xl flex justify-center items-center ">
                      <FaCss3 size={100} color="white" />
                    </div>
                    <div></div>
                    <div className="border-2 border-white rounded-xl flex justify-center items-center ">
                      <FaJs size={100} color="white" />
                    </div>
                    <div></div>
                    <div className="border-2 border-white rounded-xl flex justify-center items-center ">
                      <FaReact size={100} color="white" />
                    </div>
                    <div></div>
                    <div className="border-2 border-white rounded-xl flex justify-center items-center ">
                      <FaGitAlt size={100} color="white" />
                    </div>
                    <div></div>
                    <div className="border-2 border-white rounded-xl flex justify-center items-center ">
                      <FaFigma size={90} color="white" />
                    </div>
                    <div></div>
                    <div className="border-2 border-white rounded-xl flex justify-center items-center ">
                      <SiAdobephotoshop size={90} color="white" />
                    </div>
                    <div></div>
                    <div className="border-2 border-white rounded-xl flex justify-center items-center ">
                      <FaGithub size={90} color="white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
