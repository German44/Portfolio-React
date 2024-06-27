import DividerTag from "../dividerTag/DividerTag";
import { Link as LinkScroll } from "react-scroll/modules";

const DesignProcess = () => {
  return (
    <>
      <section
        className="min-h-[100vh] mt-9  flex flex-col w-full items-center"
        id="DesignProcess"
      >
        <DividerTag tag="Design Process" />
        <div className="container mx-auto min-h-[82vh] bg-black/20 backdrop-blur-2xl rounded-xl flex items-center">
          <div className="w-full min-h-[82vh] flex flex-col justify-start items-start">
            <div className="mt-4 px-8 w-full h-[150px] flex gap-4 ">
              <LinkScroll
                to="Define"
                smooth={true}
                spy={true}
                className="font-bold text-xl  cursor-pointer w-[150px] h-[150px] flex items-center justify-center bg-red-400/80 hover:bg-red-400 rounded-full "
              >
                Define
              </LinkScroll>
              <LinkScroll
                to="Empathize"
                smooth={true}
                spy={true}
                className="font-bold text-xl  cursor-pointer w-[150px] h-[150px] flex items-center justify-center bg-orange-400/80 hover:bg-orange-400 rounded-full "
              >
                Empathize
              </LinkScroll>
              <LinkScroll
                to="Ideate"
                smooth={true}
                spy={true}
                className="font-bold text-xl  cursor-pointer w-[150px] h-[150px] flex items-center justify-center bg-yellow-400/80 hover:bg-yellow-400 rounded-full "
              >
                Ideate
              </LinkScroll>
              <LinkScroll
                to="Design"
                smooth={true}
                spy={true}
                className="font-bold text-xl   cursor-pointer w-[150px] h-[150px] flex items-center justify-center bg-lime-400/80 hover:bg-lime-400 rounded-full "
              >
                Design
              </LinkScroll>
              <LinkScroll
                to="Prototype"
                smooth={true}
                spy={true}
                className="font-bold text-xl cursor-pointer w-[150px] h-[150px] flex items-center justify-center bg-emerald-400/80 hover:bg-emerald-400 rounded-full "
              >
                Prototype
              </LinkScroll>
            </div>
            <div className="w-full flex justify-center items-center">
              <h3 className="text-xl font-semibold px-8 mt-4">
                Click into any process to see
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignProcess;
