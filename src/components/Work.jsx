import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import Img1 from "../assets/portfolio-img1.png"
import Img2 from "../assets/E-CommerceRock.png"
import Img3 from "../assets/portfolio-img3.png"
import Img4 from "../assets/portfolio-img2.png"

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"


const Work = () => {
  return (
    <section id="work" className="min-h-[86vh] mt-9 flex items-center">
      <div className="container mx-auto">
        <div className="min-h-[75vh] w-full relative top-6  bg-black/20 backdrop-blur-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-12">
          {/* Proyecto 1 */}
          <motion.div
            variants={fadeIn('right', 0.3)}
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
                src={Img2}
                alt="e-commerce"
                className="max-w-full h-400 object-cover  "
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-pink-600/80 to-indigo-900/80 flex justify-center items-center flex-col text-center px-16 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                <h4 className="text-white font-bold text-justify text-2xl underline">E-Commerce de Indumentaria</h4>
                <p className="text-white font-bold text-justify text-1.5xl my-16">E-Commerce realizado con React y tailwind CSS, se usaron librerias como NextUI y TailwindUI. De base de datos se utilizo Firebase.</p>
                <div className="flex mt-2">
                  <a
                    href="https://github.com/German44/E-Commerce-TWUI.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white mr-3"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://e-commerce-twui.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Proyecto 2 */}
          <motion.div
            variants={fadeIn('left', 0.3)}
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
                src={Img1}
                alt="Calculadora"
                className="max-w-full h-400 object-cover "
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-pink-600/80 to-indigo-900/80 flex justify-center items-center flex-col text-center px-16 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                <h4 className="text-white text-justify font-bold text-2xl underline">Calculadora</h4>
                <p className="text-white text-justify font-bold text-1.5xl my-16">Calculadora hecha con HTML, CSS y JavaScript</p>
                <div className="flex mt-2">
                  <a
                    href="https://github.com/tu-usuario/tu-repositorio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white mr-3"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://tu-enlace-externo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Proyecto 3 */}
          <motion.div
            variants={fadeIn('right', 0.3)}
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
                src={Img3}
                alt=""
                className="max-w-full h-400 object-cover "
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-pink-600/80 to-indigo-900/80 flex justify-center items-center flex-col text-center px-16 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                <h4 className="text-white text-justify font-bold text-2xl underline">Agenda de Clientes</h4>
                <p className="text-white text-justify font-bold text-1.5xl my-16">Agenda de clientes hecha con HTML, CSS y JavaScript</p>
                <div className="flex mt-2">
                  <a
                    href="https://github.com/German44/Proyecto-final-JavaScript.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white mr-3"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://german44.github.io/Proyecto-final-JavaScript/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Proyecto 4 */}
          <motion.div
            variants={fadeIn('left', 0.3)}
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
                src={Img4}
                alt="Calculadora"
                className="max-w-full h-400 object-cover "
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-pink-600/80 to-indigo-900/80 flex justify-center items-center flex-col text-center px-16 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                <h4 className="text-white text-justify font-bold text-2xl underline">Calculadora</h4>
                <p className="text-white text-justify font-bold text-1.5xl my-16">Calculadora hecha con HTML, CSS y JavaScript</p>
                <div className="flex mt-2">
                  <a
                    href="https://github.com/tu-usuario/tu-repositorio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white mr-3"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://tu-enlace-externo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default Work;

