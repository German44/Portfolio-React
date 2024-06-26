import {
  FaGithub,
  FaExternalLinkAlt,
  FaFigma,
  FaBehance,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const WorkCardsleft = ({ projects }) => {
  /* console.log(projects) */
  return (
    <div className="h-[500px] sm:h-[340px] rounded-lg overflow-hidden flex flex-col sm:justify-center items-center">
      <div className="w-[95%] h-[10%] flex sm:justify-end">
        <h2 className="text-white font-bold text-justify text-2xl underline">
          {projects.type}
        </h2>
      </div>
      <div className="w-[95%] h-[100%]  sm:w-[95%] sm:h-[70%] m-4 bg-black/50 rounded-xl flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full h-[180px] sm:h-[90%] sm:w-[50%]  m-2">
          <div className="w-full h-[100%] sm:h-[140%] sm:relative sm:-top-20 rounded-xl hover:scale-x-105 transition duration-300">
            <img
              className="w-full h-full object-cover rounded-xl border-4 border-black hover:border-white transition duration-300"
              src={projects.image}
              alt="Projects"
            />
          </div>
        </div>
        <div className="w-full sm:w-[50%] h-[50%] sm:h-[90%] m-2 rounded-xl">
          <div className="w-full h-full flex flex-col justify-around">
            <h4 className="text-white font-bold text-justify text-3xl">
              {projects.name}
            </h4>
            <p className="text-justify m-2 text-xl">{projects.description}</p>
            <div className="flex sm:justify-end mt-2">
              {projects.type === "Frontend Developer" ? (
                <>
                  <a
                    href={projects.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent mr-4 hover:scale-105 transition duration-300"
                  >
                    <FaGithub size={40} />
                  </a>
                  <a
                    href={projects.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent hover:scale-105 transition duration-300"
                  >
                    <FaExternalLinkAlt size={40} />
                  </a>
                </>
              ) : (
                <>
                  <a
                    href={projects.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent mr-4 hover:scale-105 transition duration-300"
                  >
                    <FaFigma size={40} />
                  </a>
                  <a
                    href={projects.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent hover:scale-105 transition duration-300"
                  >
                    <FaBehance size={40} />
                  </a>
                  <Link to="/work/CaseStudyPage">
                  <h3 className="text-gray-300 text-xl hover:text-accent hover:scale-105 transition duration-300 text-bold">View Case Study</h3>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
