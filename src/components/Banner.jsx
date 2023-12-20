
import Image from "../assets/ger1.png"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"


// 'ID_DEL_ARCHIVO' de Google Drive
const googleDriveFileId = '1LTja5061INTTENK-pJXuo0nfOeaoabEa';

// Enlace de descarga de Google Drive
const googleDriveDownloadLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

const Banner = () => {
  return (
    <section className="min-h-[86vh] mt-[150px]" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-y-12">
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[0.8] lg:text-[100px]">GERMAN <span>RAVAROTTO </span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font font-semibold uppercase leading-[1]">
              <span className="mr-4">Soy </span>
              <TypeAnimation
                sequence={[
                  'Desarrolador',
                  2000,
                  'Artista',
                  2000,
                  'Creativo',
                  2000,
                  'Musico',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0">
              ¡Bienvenido a mi portfolio, donde podrás explorar mi trabajo y mi dedicación por el desarrollo web!
            </motion.p>
            <motion.a
              href={googleDriveDownloadLink}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="btn btn-lg"
            >
              Descargar C.V.
            </motion.a>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto">
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>);
};

export default Banner;
