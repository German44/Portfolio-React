import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import Img1 from "../assets/portfolio-img1.png"
// import Img2 from "../assets/E-commerceRock.png"
// import Img3 from "../assets/portfolio-img3.png"




const Work = () => {
  return (
    <section id="work" className="min-h-[86vh] mt-9 flex items-center ">
      <div className="container mx-auto">
        <div className="min-h-[75vh] w-full relative top-6 mt-12 flex flex-col items-center gap-4 rounded-3xl lg:grid lg:grid-cols-[repeat(2,1fr)] lg:grid-rows-[repeat(2,1fr)] lg:gap-x-2.5 lg:gap-y-2.5 bg-black/20 backdrop-blur-2x1">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="w-1/2 h-auto lg:w-full lg:h-full bg-black">

          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.9 }}
            className="w-1/2 h-auto lg:w-full lg:h-full flex">
            <div className="w-3/4 h-full flex items-center justify-center ">
              <div className="w-[90%] h-[90%] rounded-2xl">
                <img src={Img1} alt="proyecto1" className="object-cover w-full h-full rounded-2xl hover:scale-110 transition-[0.4s] duration-[ease] " />
              </div>
            </div>
            <div className="w-1/4 h-[100px] absolute right-0 top-12 bg-accent">
              <p>E-Commerce hecho con React.js </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="w-1/2 h-auto lg:w-full lg:h-full bg-black relative overflow-hidden shadow-[0_0_1rem_var(--color-3)] flex rounded-[2rem]">


          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.9 }}
            className="w-1/2 h-auto lg:w-full lg:h-full flex">
            <div className="w-3/4 h-full flex items-center justify-center ">
              <div className="w-[90%] h-[90%] rounded-2xl">
                <img src={Img1} alt="proyecto1" className="object-cover w-full h-full rounded-2xl hover:scale-110 transition-[0.4s] duration-[ease] z-10 " />
              </div>
            </div>
            <div className="w-1/4 h-[100px] absolute right-0 top-12 z-0 bg-accent">
              <p>E-Commerce hech con React.js </p>
            </div>
          </motion.div>
        </div>
      </div>



    </section >
  );
};

export default Work;
