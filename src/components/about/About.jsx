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
          <div className="w-full min-h-[82vh] flex justify-center items-center">
            <div className="w-full min-h-[70vh] flex flex-col sm:flex-row ">
              <div className="w-full sm:w-1/2 min-h-[35vh] sm:min-h-[70vh]  flex justify-center items-center">
                <div className="w-full sm:w-[90%] min-h-[35vh] sm:min-h-[65vh]  flex flex-col justify-center items-center">
                  <div className=" w-full min-h-[5vh] sm:min-h-[10vh] flex justify-center items-end ">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[44px] font-bold text-white font-primary text-center">
                      Hello I'm German
                    </h2>
                  </div>
                  <div className=" w-full min-h-[40vh] sm:min-h-[60vh] flex justify-center items-center ">
                    <p className="min-h-[30vh] sm:min-h-[50vh] text-xl sm:text-2xl md:text-3xl lg:text-[44px] m-2 text-white font-secondary text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae expedita animi veniam nam fugiat neque ea
                      distinctio harum magni officia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 min-h-[35vh] sm:min-h-[70vh]  flex flex-col justify-center items-center">
                <div className="w-full min-h-[5vh] sm:min-h-[5vh] flex justify-center items-end  ">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[44px] font-bold text-white font-primary text-center">
                    Skills & Tools
                  </h2>
                </div>
                <div className=" w-full min-h-[40vh] sm:min-h-[65vh] flex justify-center items-center  ">
                  <div className=" w-[90%] min-h-[30vh] sm:min-h-[60vh] grid grid-cols-3 grid-rows-5 gap-4 ">
                    <div className="bg-red-700 rounded-xl">1</div>
                    <div>2</div>
                    <div className="bg-red-700 rounded-xl">3</div>
                    <div>4</div>
                    <div className="bg-red-700 rounded-xl">5</div>
                    <div>6</div>
                    <div className="bg-red-700 rounded-xl">7</div>
                    <div>8</div>
                    <div className="bg-red-700 rounded-xl">9</div>
                    <div>10</div>
                    <div className="bg-red-700 rounded-xl">11</div>
                    <div>12</div>
                    <div className="bg-red-700 rounded-xl">13</div>
                    <div>14</div>
                    <div className="bg-red-700 rounded-xl">15</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
