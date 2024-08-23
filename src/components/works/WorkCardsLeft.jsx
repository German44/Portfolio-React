import {
  FaGithub,
  FaExternalLinkAlt,
  FaFigma,
  FaBehance,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const WorkCardsleft = ({ projects, id }) => {
  /* console.log(projects) */
  return (
    <div className="h-[500px] sm:h-[340px] rounded-lg overflow-hidden flex flex-col sm:justify-center items-center">
      <div className="w-[95%] h-[10%] flex sm:justify-end">
        <h2 className="text-white font-bold text-justify text-2xl underline mx-4">
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
            <h4 className="text-white font-bold text-justify text-3xl mx-4">
              {projects.name}
            </h4>
            <p className="text-justify m-2 text-xl mx-4 ">
              {projects.description}
            </p>
            <div className="flex sm:justify-end mt-2 items-center">
              {projects.type === "Frontend Developer" ? (
                <>
                  <a
                    href={projects.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent mr-4 hover:scale-105 transition duration-300 mx-4"
                  >
                    <FaGithub size={40} />
                  </a>
                  <a
                    href={projects.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent hover:scale-105 transition duration-300 mx-4"
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
                    className="text-gray-300 hover:text-accent mr-8 hover:scale-105 transition duration-300"
                  >
                    <FaFigma size={40} />
                  </a>
                  <a
                    href={projects.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent mr-8 hover:scale-105 transition duration-300"
                  >
                    <FaBehance size={40} />
                  </a>
                  <Link
                    to={`/CaseStudy/${id}`}
                    className="text-gray-300 text-xl hover:text-accent hover:scale-105 transition duration-300 text-bold"
                  >
                    Case Study
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
