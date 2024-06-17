// import { motion } from "framer-motion"
// import { fadeIn } from "../../utils/variants"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const WorkCards = ({ projects }) => {
  console.log(projects);
  return (
    <>
      <div className=" h-[340px]  rounded-lg overflow-hidden flex flex-col justify-center items-center">
        <div className="w-[95%] h-[10%] ">
          <h2 className="text-white font-bold  text-justify text-2xl underline">
            {projects.name}
          </h2>
        </div>
        <div className="w-[95%] h-[70%] m-4  bg-black/50 rounded-xl flex justify-between items-center">
          <div className="w-[50%] h-[90%] m-2   rounded-xl">
            <div className="w-full h-full   flex flex-col justify-around">
              <h4 className="text-white font-bold  text-justify text-3xl ">
                {projects.name}
              </h4>
              <p className="text-justify m-2 text-xl">{projects.description}</p>
              <div className="flex mt-2">
                <a
                  href={projects.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent mr-4 hover:scale-105  transition duration-300"
                >
                  <FaGithub size={40} />
                </a>
                <a
                  href={projects.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent hover:scale-105  transition duration-300"
                >
                  <FaExternalLinkAlt size={40} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-[90%] m-2">
            <div className="w-full h-[140%] relative -top-20  rounded-xl  hover:scale-x-105  transition duration-300 ">
              <img
                className="w-full h-full object-cover rounded-xl border-4 border-black hover:border-white transition duration-300"
                src={projects.image}
                alt="Projects"
              />
            </div>
          </div>
        </div>
      </div>
    </>
    // <motion.div
    //     variants={fadeIn(projects.position, 0.3)}
    //     initial='hidden'
    //     whileInView={'show'}
    //     viewport={{ once: false, amount: 0.7 }}
    //     whileHover={{ scale: 1.05 }}
    //     // initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 0.5 }}
    //     className="bg-black h-[340px] relative rounded-lg overflow-hidden">
    //     <div className="h-[340px] relative border-radius-8 overflow-hidden shadow-lg flex group">
    //         <img
    //             src={projects.image}
    //             alt="Foto Proyecto"
    //             className="max-w-full h-400 object-cover  "
    //         />

    //         <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-pink-600/80 to-indigo-900/80 flex justify-center items-center flex-col text-center px-16 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
    //             <h4 className="text-white font-bold text-justify text-2xl underline">{projects.name}</h4>
    //             <p className="text-white font-bold text-justify text-1.5xl my-16">{projects.description}</p>
    //             <div className="flex mt-2">
    //                 <a
    //                     href={projects.github}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="text-gray-300 hover:text-white mr-3"
    //                 >
    //                     <FaGithub size={30} />
    //                 </a>
    //                 <a
    //                     href={projects.live}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="text-gray-300 hover:text-white"
    //                 >
    //                     <FaExternalLinkAlt size={30} />
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // </motion.div>
  );
};
