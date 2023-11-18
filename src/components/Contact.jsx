import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import ContactForm from "./ContactForm";


const Contact = () => {
  return (

    <section id="contact" className="min-h-[86vh] mt-9 flex items-center ">
      <div className="container mx-auto">
        <div className="min-h-[75vh] relative top-6 mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl  bg-black/20 backdrop-blur-2x1">
          <div className=" w-[80%] relative min-h-[37vh] flex flex-col text-center  justify-center font-secondary lg:text-left">
            <div className=" w-2/3 absolute top-0 h-[50%] flex items-center justify-start">
              <motion.div
                variants={fadeIn('left', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="text-[150px] font-bold ">H</motion.div>
              <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="text-[150px] font-bold ">o</motion.div>
              <motion.div
                variants={fadeIn('left', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="text-[150px] font-bold ">l</motion.div>
              <motion.div
                variants={fadeIn('left', 0.7)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="text-[150px] font-bold ">a</motion.div>
              <motion.div
                variants={fadeIn('left', 0.9)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="text-[150px] font-bold text-accent ">!</motion.div>
            </div>
            <div className=" w-full h-[50%]  absolute bottom-0">
              <motion.p
                variants={fadeIn('top', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="text-xl font-semibold text-justify p-6">
                Muchas Gracias por tomarte el tiempo para conocerme. Estoy entusiasmado por la posibilidad de trabajar juntos o colaborar en futuros proyectos.
                Si tienes alguna consulta o proyecto para realizar, no dudes en contactarme.
              </motion.p>
            </div>
          </div>
          <div className=" w-[80%] min-h-[37vh] flex  text-center justify-around font-secondary lg:text-left">
            <div className=" w-[60%] ">
              <ContactForm />
            </div>
            <div className=" w-[40%] flex items-end justify-center mb-4">
              <motion.button
                variants={fadeIn('left', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="btn btn-lg">Descargar C.V.
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
