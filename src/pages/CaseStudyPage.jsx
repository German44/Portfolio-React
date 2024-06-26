import HeaderCaseStudy from "../components/header/HeaderCaseStudy";
const CaseStudyPage = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <HeaderCaseStudy />
        <div className=" bg-black/50 backdrop-blur-2xl  container mx-auto w-full min-h-screen">
          <h1 className="text-white text-3xl font-bold font-primary text-center mt-20">
            Case Study Page
          </h1>
        </div>
      </div>
    </>
  );
};

export default CaseStudyPage;
