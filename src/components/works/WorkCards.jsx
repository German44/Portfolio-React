import { motion } from "framer-motion"
import { fadeIn } from "../../utils/variants"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export const WorkCards = ({ projects }) => {

    return (
        <motion.div
            variants={fadeIn(projects.position, 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={{ scale: 1.05 }}
            // initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black h-[340px] relative rounded-lg overflow-hidden">
            <div className="h-[340px] relative border-radius-8 overflow-hidden shadow-lg flex group">
                <img
                    src={projects.image}
                    alt="Foto Proyecto"
                    className="max-w-full h-400 object-cover  "
                />

                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-pink-600/80 to-indigo-900/80 flex justify-center items-center flex-col text-center px-16 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    <h4 className="text-white font-bold text-justify text-2xl underline">{projects.name}</h4>
                    <p className="text-white font-bold text-justify text-1.5xl my-16">{projects.description}</p>
                    <div className="flex mt-2">
                        <a
                            href={projects.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white mr-3"
                        >
                            <FaGithub size={30} />
                        </a>
                        <a
                            href={projects.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white"
                        >
                            <FaExternalLinkAlt size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
