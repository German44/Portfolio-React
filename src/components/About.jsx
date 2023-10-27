import { motion } from "framer-motion"
import { fadeIn } from "../variants"


const About = () => {
  return (
    <section className="min-h-[86vh] mt-9 flex items-center  " id="about">
      <div className="container mx-auto">
        <div className="min-h-[60vh] flex flex-col items-center gap-4 rounded-3xl lg:flex-row lg:items-center lg:justify-around lg:gap-y-12 bg-black/20 backdrop-blur-2x1">
          <motion.article
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="w-[80%] h-auto lg:w-[400px] lg:h-[430px] flex text-center font-secondary lg:text-left bg-blue-500 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iure quaerat possimus impedit. Excepturi quo neque, debitis aliquid natus ut quae quod tempora deleniti corporis illo error labore culpa aspernatur.
          </motion.article>
          <motion.article
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="w-[80%] h-auto lg:w-[400px] lg:h-[430px] flex text-center font-secondary lg:text-left bg-blue-500 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi earum reiciendis porro tempore magnam exercitationem odio corporis consectetur, quisquam nisi quia quaerat. Corrupti laborum facere, quia sed magni fugit deserunt.
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default About