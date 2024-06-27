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
          <div className="w-full min-h-[82vh] flex justify-center items-center">CASOS DE STUDIOS</div>
        </div>
      </section>
    </>
  );
};

export default AboutCaseStudy;
