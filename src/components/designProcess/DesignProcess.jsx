import DividerTag from "../dividerTag/DividerTag";
import Process from "./Process";
import Sphere from "./Sphere";
/* import { Link as LinkScroll } from "react-scroll/modules"; */

const sphereData = [
  {
    id: 1,
    title: "Define",
    color: "bg-red-400/80",
    hover: "bg-red-400",
  },
  {
    id: 2,
    title: "Empathize",
    color: "bg-orange-400/80",
    hover: "bg-orange-400",
  },
  {
    id: 3,
    title: "Ideate",
    color: "bg-yellow-400/80",
    hover: "bg-yellow-400",
  },
  {
    id: 4,
    title: "Design",
    color: "bg-lime-400/80",
    hover: "bg-lime-400",
  },
  {
    id: 5,
    title: "Prototype",
    color: "bg-emerald-400/80",
    hover: "bg-emerald-400",
  },
];

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
            <div className="mt-4 px-8 w-full h-[80px] sm:h-[150px] flex justify-center items-center gap-1 sm:gap-4 ">
              {sphereData.map((sphere) => (
                <Sphere
                  key={sphere.id}
                  color={sphere.color}
                  title={sphere.title}
                  hover={sphere.hover}
                />
              ))}
            </div>
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
            <Process
              title="Define"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo nisi facilis autem asperiores consequatur cum minus
                molestiae! Commodi nostrum minus consequuntur, rem consequatur
                quisquam, consectetur tempore totam tempora eos non ipsa fugiat
                fuga ipsum ratione culpa asperiores, numquam sunt quod
                voluptatum doloremque veritatis eaque. Sed quam eaque
                repudiandae. Necessitatibus, ullam?"
              image="/public/pictures/portfolio-img2.png"
            />
            <Process
              title="Empathize"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo nisi facilis autem asperiores consequatur cum minus
                molestiae! Commodi nostrum minus consequuntur, rem consequatur
                quisquam, consectetur tempore totam tempora eos non ipsa fugiat
                fuga ipsum ratione culpa asperiores, numquam sunt quod
                voluptatum doloremque veritatis eaque. Sed quam eaque
                repudiandae. Necessitatibus, ullam?"
              image="/public/pictures/portfolio-img2.png"
            />
            <Process
              title="Ideate"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo nisi facilis autem asperiores consequatur cum minus
                molestiae! Commodi nostrum minus consequuntur, rem consequatur
                quisquam, consectetur tempore totam tempora eos non ipsa fugiat
                fuga ipsum ratione culpa asperiores, numquam sunt quod
                voluptatum doloremque veritatis eaque. Sed quam eaque
                repudiandae. Necessitatibus, ullam?"
              image="/public/pictures/portfolio-img2.png"
            />
            <Process
              title="Design"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo nisi facilis autem asperiores consequatur cum minus
                molestiae! Commodi nostrum minus consequuntur, rem consequatur
                quisquam, consectetur tempore totam tempora eos non ipsa fugiat
                fuga ipsum ratione culpa asperiores, numquam sunt quod
                voluptatum doloremque veritatis eaque. Sed quam eaque
                repudiandae. Necessitatibus, ullam?"
              image="/public/pictures/portfolio-img2.png"
            />
            <Process
              title="Prototype"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo nisi facilis autem asperiores consequatur cum minus
                molestiae! Commodi nostrum minus consequuntur, rem consequatur
                quisquam, consectetur tempore totam tempora eos non ipsa fugiat
                fuga ipsum ratione culpa asperiores, numquam sunt quod
                voluptatum doloremque veritatis eaque. Sed quam eaque
                repudiandae. Necessitatibus, ullam?"
              image="/public/pictures/portfolio-img2.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignProcess;
