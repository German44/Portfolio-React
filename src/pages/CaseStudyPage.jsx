import { useEffect } from "react";
import AboutCaseStudy from "../components/about/AboutCaseStudy";
import DesignProcess from "../components/designProcess/DesignProcess";
import Final from "../components/final/Final";
import NavBarCaseStudy from "../components/navbar/NavBarCaseStudy";

const CaseStudyPage = () => {
  useEffect(() => {
    // Desplazar la página a la sección AboutCaseStudy cuando se monta el componente
    const element = document.getElementById("aboutCaseStudy");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <NavBarCaseStudy />
      <AboutCaseStudy />
      <DesignProcess />
      <Final />
    </>
  );
};

export default CaseStudyPage;
