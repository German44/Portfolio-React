import DividerTag from "../dividerTag/DividerTag";

const About = () => {
  return (
    <>
      <section
        className="min-h-[85vh] mt-9 flex flex-col w-full items-center"
        id="about"
      >
        <DividerTag tag="About" />
        <div className="container mx-auto min-h-[82vh] bg-black/20 backdrop-blur-2xl rounded-xl flex items-center">
          <div className="w-full min-h-[82vh]  grid-cols-1 grid-rows-8 grid sm:grid-cols-4 sm:grid-rows-4 gap-1">
            <div className="w-full h-1/4 items-end justify-end  bg-slate-100 sm:col-span-2">1</div>
            <div className="w-full h-3/4  bg-slate-300 row-span-3 sm:col-span-2 sm:row-span-3 sm:col-start-1 sm:row-start-2">
              2
            </div>
            <div className="w-full h-1/4 bg-slate-500 sm:col-span-2 sm:col-start-3 sm:row-start-1">
              3
            </div>
            <div className="w-full h-3/4 bg-slate-800 row-span-3 sm:col-span-2 sm:row-span-3 sm:col-start-3 sm:row-start-2">
              4
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
