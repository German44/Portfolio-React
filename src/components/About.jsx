import { motion } from "framer-motion"
import { fadeIn } from "../variants"


const About = () => {
  return (
    <section className="min-h-[86vh] mt-9 flex items-center " id="about">
      <div className="container mx-auto">
        <div className="min-h-[75vh] relative top-6 mt-12 flex flex-col items-center gap-4 rounded-3xl lg:flex-row lg:items-center lg:justify-around lg:gap-y-12 bg-black/20 backdrop-blur-2x1">
          <motion.article
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="w-[80%] h-auto lg:w-[400px] lg:h-[430px] flex flex-col text-center justify-center font-secondary lg:text-left">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="bg-red-500 w-full h-full">
              <img
                className="w-full h-full object-cover overflow-hidden relative left-2 bottom-2"
                src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" />
            </motion.div>
            <p className=" text-lg text-justify lg:text-lg mt-1">
              ¡Hola! Soy German, de Rosario Argentina, desarrollador web orientado al FrontEnd.
            </p>
            <p className=" text-lg text-justify lg:text-lg mt-1">
              Estoy enfocado en aprender al maximo <strong>React.js</strong> y <strong>TypeScript</strong>.<br />
            </p>
            <p className=" text-lg text-justify lg:text-lg mt-1">
              Muchas Gracias por tomarte el tiempo para conocerme. Estoy entusiasmado por la posibilidad de trabajar juntos o colaborar en futuros proyectos.
            </p>
          </motion.article>
          <motion.article
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className=" w-full min-h-[75vh] lg:w-[400px] lg:h-[430px] flex flex-col justify-around items-center text-justify p-3 font-secondary lg:text-left  ">
            <div >
              <motion.h3
                className="font-bold text-3xl"
                variants={fadeIn('left', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>
                Cursos y Certificaciones
              </motion.h3>
              <motion.div
                variants={fadeIn('left', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="m-5">
                <ul>
                  <li className="m-3 font-bold text-xl ">
                    Coderhouse
                    <ul className="mx-7 list-disc">
                      <li>React.js</li>
                      <li>JavaScript</li>
                      <li>Desarrollo web</li>
                    </ul>
                  </li>
                  <li className="m-3 font-bold">
                    Scrum
                    <ul className=" mx-7 list-disc">
                      <li>Scrum</li>
                    </ul>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="w-full h-10 bg-black">
              <div className="w-full h-10 bg-black">
                tools
              </div>
              <div className="w-full h-10 bg-black">
                tools
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section >
  )
}

export default About