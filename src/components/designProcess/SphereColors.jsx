import { Link as LinkScroll } from "react-scroll/modules";

const SphereColors = () => {
  return (
    <div className="mt-4 px-8 w-full h-[80px] sm:h-[150px] flex justify-center items-center gap-1 sm:gap-4 ">
      <LinkScroll
        to="Empatizar"
        smooth={true}
        spy={true}
        className="font-bold text-[10px] sm:text-xl cursor-pointer sm:w-[150px] sm:h-[150px] w-[50px] h-[50px] flex items-center justify-center border-solid border-2 border-red-400  bg-red-400/80 hover:bg-red-400 rounded-full"
      >
        Empatizar
      </LinkScroll>
      <LinkScroll
        to="Definir"
        smooth={true}
        spy={true}
        className="font-bold text-[10px] sm:text-xl cursor-pointer sm:w-[150px] sm:h-[150px] w-[50px] h-[50px] flex items-center justify-center border-solid border-2 border-orange-400  bg-orange-400/80 hover:bg-orange-400 rounded-full"
      >
        Definir
      </LinkScroll>
      <LinkScroll
        to="Idear"
        smooth={true}
        spy={true}
        className="font-bold text-[10px] sm:text-xl cursor-pointer sm:w-[150px] sm:h-[150px] w-[50px] h-[50px] flex items-center justify-center border-solid border-2 border-yellow-400  bg-yellow-400/80 hover:bg-yellow-400 rounded-full"
      >
        Idear
      </LinkScroll>
      <LinkScroll
        to="Diseñar"
        smooth={true}
        spy={true}
        className="font-bold text-[10px] sm:text-xl cursor-pointer sm:w-[150px] sm:h-[150px] w-[50px] h-[50px] flex items-center justify-center border-solid border-2 border-lime-400  bg-lime-400/80 hover:bg-lime-400 rounded-full"
      >
        Diseñar
      </LinkScroll>
      <LinkScroll
        to="Prototipar"
        smooth={true}
        spy={true}
        className="font-bold text-[10px] sm:text-xl cursor-pointer sm:w-[150px] sm:h-[150px] w-[50px] h-[50px] flex items-center justify-center border-solid border-2 border-emerald-400  bg-emerald-400/80 hover:bg-emerald-400 rounded-full"
      >
        Prototipar
      </LinkScroll>
    </div>
  );
};

export default SphereColors;
