import AboutCaseStudy from "../components/about/AboutCaseStudy";
import DesignProcess from "../components/designProcess/DesignProcess";
import Final from "../components/final/Final";
import NavBarCaseStudy from "../components/navbar/NavBarCaseStudy";


const CaseStudyPage = () => {
  return (
    <>
      <NavBarCaseStudy />
      <AboutCaseStudy />
      <DesignProcess/>
      <Final/>
    </>
  );
};

export default CaseStudyPage;
