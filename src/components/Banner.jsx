
import Image from "../assets/avatar.svg"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
// import { fadeIn } from "../variants"


const Banner = () => {
  return (
    <section className="min-h-[70vh] mt-9" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-y-12">
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <h1 className="text-[50px] font-bold leading-[0.8] lg:text-[100px]">GERMAN <span>RAVAROTTO </span></h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font font-semibold uppercase leading-[1]">
              <span className="mr-4">Soy </span>
              <TypeAnimation
                sequence={[
                  'Desarrolador',
                  2000,
                  'Diseñador',
                  2000,
                  'Creativo',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ut. Facere ab quidem, quam tempore, repellendus similique mol</p>
            <button className="btn btn-lg">Descargar C.V.</button>
          </div>
          <div><img src={Image} alt="" /></div>
        </div>
      </div>
    </section>);
};

export default Banner;
