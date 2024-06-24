import { WorkCards } from "./WorkCards";
import projects from "../../data/projects.json";
import DividerTag from "../dividerTag/DividerTag";
import { WorkCardsleft } from "./WorkCardsLeft";

const Work = () => {

  return (
    <section
      id="work"
      className="min-h-[100vh] mt-9 flex items-center flex-col"
    >
      <DividerTag tag="Works" />
      <div className="container mx-auto min-h-[82vh] bg-black/20 backdrop-blur-2xl rounded-xl flex items-center">
        <div className="min-h-[82vh] w-full flex flex-col gap-6">
          {projects.map((project) => {
            return project.position === "left" ? (
              <WorkCardsleft key={project.id} projects={project} />
            ) : (
              <WorkCards key={project.id} projects={project} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
