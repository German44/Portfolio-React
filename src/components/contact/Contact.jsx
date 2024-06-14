import { motion } from "framer-motion"
import { fadeIn } from "../../utils/variants"
import ContactForm from "./ContactForm";


// Reemplaza 'ID_DEL_ARCHIVO' con el ID real de tu archivo en Google Drive
const googleDriveFileId = '1LTja5061INTTENK-pJXuo0nfOeaoabEa';

// Construye el enlace de descarga directa desde Google Drive
const googleDriveDownloadLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

const Contact = () => {
  return (


    <section id="contact" className="min-h-[86vh] mt-9 flex items-center ">
      <div className="container mx-auto">
        <div className="min-h-[75vh] relative top-6 mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl  bg-black/20 backdrop-blur-2xl">
          <div className=" w-[80%] relative min-h-[35vh] flex flex-col text-center  justify-center font-secondary lg:text-left">
            <div className=" w-2/3 lg:absolute lg:top-0 hidden lg:h-[50%] lg:flex  items-center ">
              <motion.div
                variants={fadeIn('left', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:text-[150px] text-[90px] font-bold ">H</motion.div>
              <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:text-[150px] text-[90px] font-bold ">o</motion.div>
              <motion.div
                variants={fadeIn('left', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:text-[150px] text-[90px] font-bold ">l</motion.div>
              <motion.div
                variants={fadeIn('left', 0.7)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:text-[150px] text-[90px] font-bold ">a</motion.div>
              <motion.div
                variants={fadeIn('left', 0.9)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:text-[150px] text-[90px] font-bold text-accent ">!</motion.div>
            </div>
            <div className=" w-full h-[50%] flex justify-start lg:absolute lg:bottom-0">
              <motion.p
                variants={fadeIn('top', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="text-2xl font-semibold text-justify ">
                Muchas Gracias por tomarte el tiempo para conocerme. Estoy entusiasmado por la posibilidad de trabajar juntos o colaborar en futuros proyectos.
                Si tienes alguna consulta o proyecto para realizar, no dudes en contactarme.
                <br />Saludos.
              </motion.p>
            </div>
          </div>
          <div className="  w-[80%] min-h-[35vh] flex lg:flex-row flex-col items-center  text-center  lg:justify-between font-secondary lg:text-left">
            <div className=" lg:w-[60%] w-[100%] flex">
              <ContactForm />
            </div>
            <div className=" min-h-[37vh]  w-[100%] flex justify-center items-center lg:items-end lg:justify-end lg:mb-4">
              <motion.a
                href={googleDriveDownloadLink}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn('left', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="btn  lg:btn-lg"
              >
                Descargar C.V.
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
