
import Img1 from "../assets/ClimaApp.png"
import Img2 from "../assets/E-CommerceRock.png"
import Img3 from "../assets/agenda.png"
import Img4 from "../assets/portfolio-img2.png"
import { WorkCards } from "./WorkCards"



const projects = [
  {
    id: 1,
    name: "ClimaApp",
    image: Img1,
    github: "https://github.com/German44/clima-app-vite.git",
    live: "https://clima-app-vite.vercel.app/",
    position: "right",
    description: "ClimaApp es una aplicacion que permite visualizar datos climáticos de una ciudad. Se utilizo React, Tailwind, OpenWeatherMap para el desarrollo de usuario"
  }, {
    id: 2,
    name: "E-CommerceRock",
    image: Img2,
    github: "https://github.com/German44/E-Commerce-TWUI.git",
    live: "https://e-commerce-twui.vercel.app/",
    position: "left",
    description: "E-Commerce realizado con React y tailwind CSS, se usaron librerias como NextUI, TailwindUI y Firebase."
  }, {
    id: 3,
    name: "Agenda",
    image: Img3,
    github: "https://github.com/German44/Proyecto-final-JavaScript.git",
    live: "https://german44.github.io/Proyecto-final-JavaScript/",
    position: "right",
    description: "Agenda de clientes hecha con HTML, CSS y JavaScript puros"
  }, {
    id: 4,
    name: "Portfolio",
    image: Img4,
    github: "https://github.com/German44/Portfolio-React.git",
    live: "https://portfolio-react-german44.vercel.app/",
    position: "left",
    description: "Portfolio personal hecho en React y tailwind CSS, librerias Framer Motion y React Scroll"
  }
]


const Work = () => {
  return (
    <section id="work" className="min-h-[86vh] mt-9 flex items-center">
      <div className="container mx-auto">
        <div className="min-h-[75vh] w-full relative top-6  bg-black/20 backdrop-blur-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-12">
          {
            projects.map((projects) => {
              return (
                <WorkCards key={projects.id} projects={projects} />
              )
            })
          }
        </div>
      </div>
    </section >
  );
};

export default Work;

