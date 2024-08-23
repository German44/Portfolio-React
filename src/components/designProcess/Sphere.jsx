import { Link as LinkScroll } from "react-scroll/modules";

const Sphere = ({ title, color, hover }) => {
  return (
    <div>
      <LinkScroll
        to={title}
        smooth={true}
        spy={true}
        className={`font-bold text-[10px] sm:text-xl cursor-pointer sm:w-[150px] sm:h-[150px] w-[50px] h-[50px] flex items-center justify-center border-solid border-2 border-${color}-400  bg-${color}-400/80 hover:bg-${hover}-400 rounded-full`}
      >
        {title}
      </LinkScroll>
    </div>
  );
};

export default Sphere;
