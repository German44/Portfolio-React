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
          <div className="w-full h-[80px] sm:h-[150px] flex justify-center items-center ga">
            <h3 className="text-white font-bold font-primary sm:text-2xl text-lg mt-1 mx-8">Filter by</h3>
            <button className="w-[100px]  rounded-full border-solid border-2 border-white hover:border-accent p-4 mx-4 text-sm sm:text-xl font-semibold">UX-UI</button>
            <button className="w-[100px] rounded-full border-solid border-2 border-white hover:border-accent text-sm sm:text-xl font-semibold p-4 mx-4">FrontEnd</button>
            </div>
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
