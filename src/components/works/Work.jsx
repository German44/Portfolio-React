import { useState } from "react";
import { WorkCards } from "./WorkCards";
import projects from "../../data/projects.json";
import DividerTag from "../dividerTag/DividerTag";
import { WorkCardsleft } from "./WorkCardsLeft";
import caseStudyData from "../../data/caseStudyData.json";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.type === selectedCategory;
  });

  return (
    <section id="work" className="min-h-[100vh] mt-9 flex items-center flex-col">
      <DividerTag tag="Works" />
      <div className="container mx-auto min-h-[82vh] bg-black/20 backdrop-blur-2xl rounded-xl flex items-center">
        <div className="min-h-[82vh] w-full flex flex-col gap-6">
          <div className="w-full h-auto sm:h-[150px] flex flex-col sm:flex-row justify-center items-center gap-4">
            <h3 className="text-white font-bold font-primary sm:text-2xl text-md mt-1 mx-8">
              Filter My Works by
            </h3>
            <button
              className={`w-[250px] rounded-full border-solid border-2 "border-white" ${
                selectedCategory === "UX/UI Designer" ? "bg-white text-accent" : "bg-transparent text-white hover:text-accent hover:bg-white/40 hover:border-accent " 
              } text-sm sm:text-xl text-md font-semibold p-4 mx-4`}
              onClick={() => handleCategoryClick("UX/UI Designer")}
            >
             UX/UI Designer
            </button>
            <button
              className={`w-[250px] rounded-full border-solid border-2 ${
                selectedCategory === "Frontend Developer" ? "bg-white text-accent" : "bg-transparent text-white hover:text-accent hover:bg-white/40 hover:border-accent "
              }  text-sm sm:text-xl text-md font-semibold p-4 mx-4`}
              onClick={() => handleCategoryClick("Frontend Developer")}
            >
              Frontend Developer
            </button>
          </div>
          {filteredProjects.map((project) => {
            return project.position === "left" ? (
              <WorkCardsleft key={project.id} projects={project} id={project.id} />
            ) : (
              <WorkCards key={project.id} projects={project} id={project.id} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
