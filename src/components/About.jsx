import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import image from "../assets/under.png"

const About = () => {
  return (
    <section className="min-h-[86vh] mt-9 flex items-center " id="about">
      <div className="container mx-auto">
        <div className="min-h-[75vh] relative top-6 mt-12 flex flex-col items-center gap-4 rounded-3xl lg:flex-row lg:items-center lg:justify-around lg:gap-y-12 bg-black/20 backdrop-blur-2xl">
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
              className="bg-accent w-full h-full">
              <img
                className="lg:w-full lg:h-full w-[400px] h-[430px] object-cover overflow-hidden relative left-2 bottom-2 "
                src={image}
                alt="" />
            </motion.div>
            <p className=" text-lg text-justify lg:text-lg m-3">
              Hola, Soy <strong className="text-purple-500">German</strong> de Rosario Argentina, desarrollador web orientado al FrontEnd. <br />
              Estoy enfocado en aprender al maximo <strong className="text-purple-500">React.js</strong>. <br />
              En mi tiempo libre me encanta <strong className="text-purple-500">escuchar música</strong> y <strong className="text-purple-500">programar</strong> proyectos nuevos para sumar experiencia .
            </p>
          </motion.article>
          <motion.article
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className=" w-full min-h-[75vh] lg:w-[400px] lg:h-[430px] flex flex-col justify-around items-center text-justify p-3 font-secondary lg:text-left  ">
            <div>
              <motion.h3
                className="font-bold text-purple-500 text-3xl underline decoration-accent underline-offset-8"
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
            <div>
              <motion.h3
                className="font-bold text-purple-500 text-3xl underline decoration-accent underline-offset-8 mb-6"
                variants={fadeIn('left', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>
                Herramientas y lenguajes
              </motion.h3>
              <div className="w-full h-[200px] grid grid-cols-[repeat(6,1fr)] grid-rows-[repeat(4,1fr)] gap-x-[5px] gap-y-[5px]">
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/HTML.svg" alt="HTML " className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/CSS.svg" alt="CSS" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Sass.svg" alt="SSas" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Figma-Dark.svg" alt="Figma" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Git.svg" alt="Git" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Github-Dark.svg" alt="Github" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Bootstrap.svg" alt="Bootstrap" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/JavaScript.svg" alt="JAvaScript" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Markdown-Dark.svg" alt="MarkDown" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/MaterialUI-Dark.svg" alt="MAterialUI" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NextJS-Dark.svg" alt="Next.js" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NodeJS-Dark.svg" alt="NodeJS" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg" alt="React" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Redux.svg" alt="Redux" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/TailwindCSS-Dark.svg" alt="TailwindCSS" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/TypeScript.svg" alt="typeScript" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Vite-Dark.svg" alt="Vite" className="w-11 h-11" />
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Firebase-Dark.svg" alt="Firebase" className="w-11 h-11" />
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section >
  )
}

export default About