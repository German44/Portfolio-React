import DividerTag from "../dividerTag/DividerTag";

const AboutCaseStudy = () => {
  return (
    <>
      <section
        className="min-h-[100vh] flex flex-col w-full items-center"
        id="aboutCaseStudy"
      >
        <DividerTag tag="Case Study" />
        <div className="container mx-auto min-h-[82vh] bg-black/20 backdrop-blur-2xl rounded-xl flex items-center">
          <div className="w-full min-h-[82vh] flex justify-center items-center">
            {/* Grid */}
            <div className="w-full min-h-[82vh] grid grid-cols-2 grid-rows-10 sm:grid-cols-4 sm:grid-rows-10 gap-4 ">
              {/* Title */}
              <div className="col-span-2 sm:col-span-2  flex flex-col justify-center items-start px-8">
                <h2 className="font-bold text-3xl">Title</h2>
                <h4 className="font-normal text-2xl">UX-UI Designer</h4>
              </div>
              {/* Overview */}
              <div className="col-span-2 row-span-4 row-start-2 sm:col-span-2 sm:row-span-3 sm:col-start-1 sm:row-start-2 px-8 flex flex-col justify-start items-start">
                <h4 className="font-semibold text-2xl">Overview</h4>
                <p className="font-normal text-lg text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  sequi itaque magni rem sit qui cupiditate officia eum ut,
                  adipisci distinctio, inventore delectus consequatur. Rerum
                  nisi sapiente minima vel, voluptatum ad tempore id doloremque
                  aspernatur. Repellendus consequuntur fugiat ipsum praesentium.
                </p>
              </div>
              {/* Table */}
              <div className="col-span-2 row-span-4 col-start-1 row-start-6 sm:col-span-2 sm:row-span-4 sm:col-start-3 sm:row-start-1 px-8">
                <h4 className="font-semibold text-2xl">Team</h4>
                <h5 className="font-normal text-lg text-justify">
                  German Ravarotto
                </h5>
                <h4 className="font-semibold text-2xl">Duration</h4>
                <h5 className="font-normal text-lg text-justify">
                  5 Weeks
                </h5>
                <h4 className="font-semibold text-2xl">Tools</h4>
                <h5 className="font-normal text-lg text-justify">
                  Figma, Paper & Pencil, Zoom.
                </h5>
              </div>
             {/*  Image */}
              <div className=" col-span-2 col-start-1 row-start-10 sm:col-span-4 sm:row-start-10 px-8">
                <img
                className="rounded-lg"
                  src="../public/pictures/portfolio-img2.png"
                  alt="Project Picture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCaseStudy;
