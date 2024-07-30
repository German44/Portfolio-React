import { Link as LinkScroll } from "react-scroll/modules";

const SphereColors = () => {
  return (
    <div className="mt-4 px-8 w-full h-[80px] sm:h-[150px] flex justify-center items-center gap-1 sm:gap-4 ">
      <LinkScroll
        to="Define"
        smooth={true}
        spy={true}
        className="font-bold text-[10px] sm:text-xl cursor-pointer sm:w-[150px] sm:h-[150px] w-[50px] h-[50px] flex items-center justify-center border-solid border-2 border-red-400  bg-red-400/80 hover:bg-red-400 rounded-full"
      >
        Define
      </LinkScroll>
      <LinkScroll
        to="Empathize"
        smooth={true}
        spy={true}
        className="font-bold text-[10px] sm:text-xl cursor-pointer sm:w-[150px] sm:h-[150px] w-[50px] h-[50px] flex items-center justify-center border-solid border-2 border-orange-400  bg-orange-400/80 hover:bg-orange-400 rounded-full"
      >
        Empathize
      </LinkScroll>
      <LinkScroll
        to="Ideate"
        smooth={true}
        spy={true}
        className="font-bold text-[10px] sm:text-xl cursor-pointer sm:w-[150px] sm:h-[150px] w-[50px] h-[50px] flex items-center justify-center border-solid border-2 border-yellow-400  bg-yellow-400/80 hover:bg-yellow-400 rounded-full"
      >
        Ideate
      </LinkScroll>
      <LinkScroll
        to="Design"
        smooth={true}
        spy={true}
        className="font-bold text-[10px] sm:text-xl cursor-pointer sm:w-[150px] sm:h-[150px] w-[50px] h-[50px] flex items-center justify-center border-solid border-2 border-lime-400  bg-lime-400/80 hover:bg-lime-400 rounded-full"
      >
        Design
      </LinkScroll>
      <LinkScroll
        to="Prototype"
        smooth={true}
        spy={true}
        className="font-bold text-[10px] sm:text-xl cursor-pointer sm:w-[150px] sm:h-[150px] w-[50px] h-[50px] flex items-center justify-center border-solid border-2 border-emerald-400  bg-emerald-400/80 hover:bg-emerald-400 rounded-full"
      >
        Prototype
      </LinkScroll>
    </div>
  );
};

export default SphereColors;
