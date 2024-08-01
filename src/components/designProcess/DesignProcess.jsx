import DividerTag from "../dividerTag/DividerTag";
import Process from "./Process";
/* import Sphere from "./Sphere";
import sphereData from "../../data/sphereData.json"; */
import processData from "../../data/processData.json";
import SphereColors from "./SphereColors";
import caseStudyData from "../../data/caseStudyData.json"

console.log(caseStudyData)
const DesignProcess = () => {
  return (
    <>
      <section
        className="min-h-[100vh] mt-9  flex flex-col w-full items-center"
        id="DesignProcess"
      >
        <DividerTag tag="Design Process" />
        <div className="container mx-auto min-h-[82vh] bg-black/20 backdrop-blur-2xl rounded-xl flex items-center">
          <div className="w-full min-h-[82vh] flex flex-col justify-start items-start ">
            {/*  <div className="mt-4 px-8 w-full h-[80px] sm:h-[150px] flex justify-center items-center gap-1 sm:gap-4 ">
              {sphereData.map((sphere) => (
                <Sphere
                  key={sphere.id}
                  color={sphere.color}
                  title={sphere.title}
                  hover={sphere.hover}
                />
              ))}
            </div> */}
            <SphereColors />
            <div className="w-full flex justify-center items-center">
              <h3 className="sm:text-2xl text-lg font-semibold text-yellow-50/40 px-8 mt-4 ">
                Click into any process to see
              </h3>
            </div>
            <div className="w-full flex justify-center items-center">
              <p className="sm:text-2xl text-lg font-semibold  px-8 mt-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo nisi facilis autem asperiores consequatur cum minus
                molestiae! Commodi nostrum minus consequuntur, rem consequatur
                quisquam, consectetur tempore totam tempora eos non ipsa fugiat
                fuga ipsum ratione culpa asperiores, numquam sunt quod
                voluptatum doloremque veritatis eaque. Sed quam eaque
                repudiandae. Necessitatibus, ullam?
              </p>
            </div>
            {processData.map((process) => (
              <Process
                key={process.id}
                title={process.title}
                content={process.content}
                image={process.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignProcess;
