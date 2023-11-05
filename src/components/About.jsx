import { motion } from "framer-motion"
import { fadeIn } from "../variants"


const About = () => {
  return (
    <section className="min-h-[86vh] mt-9 flex items-center  " id="about">
      <div className="container mx-auto">
        <div className="min-h-[60vh] mt-12 flex flex-col items-center gap-4 rounded-3xl lg:flex-row lg:items-center lg:justify-around lg:gap-y-12 bg-black/20 backdrop-blur-2x1">
          <motion.article
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="w-[80%] h-auto lg:w-[400px] lg:h-[430px] flex flex-col text-center  font-secondary lg:text-left">
            <div className="bg-red-500">
              Foto
            </div>
            <p className=" text-lg text-justify lg:text-xl">
              ¡Hola! Soy German , soy de Rosario Argentina, desarrollador web orientado al FrontEnd. <br />

              Mi filosofía se basa en la búsqueda constante de aprendizaje y perfeccionamiento. <br />

              Gracias por tomarte el tiempo para conocerme. Estoy entusiasmado por la posibilidad de trabajar juntos o colaborar en futuros proyectos.
            </p>
          </motion.article>
          <motion.article
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="w-[80%] h-auto lg:w-[400px] lg:h-[430px] flex flex-col text-justify p-3 font-secondary lg:text-left  ">
            <div>
              <motion.h3
                className="font-bold text-3xl"
                variants={fadeIn('left', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>
                Cursos y Certificaciones
              </motion.h3>
            </div>
            <motion.div
              variants={fadeIn('left', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="m-1">
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
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default About