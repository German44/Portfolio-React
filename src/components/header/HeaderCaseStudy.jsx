import { Link } from "react-router-dom";

const HeaderCaseStudy = () => {
  return (
    <header className=" bg-black/20 h-[80px] backdrop-blur-2xl  w-full fixed top-0 z-50">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="navbar bg-black/20 backdrop-blur-2xl">
          <div className="flex-1">
            <h1 className="text-white hidden text-3xl sm:block font-bold font-primary text-center">
              Case Study Page
            </h1>
          </div>
          <div className="flex-none mr-20">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  to="/"
                  className="text-white sm:text-xl text-sm  font-primary text-center hover:text-accent hover:scale-105 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <details>
                  <summary className="text-white sm:text-xl text-sm font-primary text-center">
                    Parent
                  </summary>
                  <ul className="bg-black/20  backdrop-blur-xl  rounded-t-none p-2 w-[250px]">
                    <li>
                      <Link
                        to="/case-study"
                        className="text-white sm:text-xl text-xs  font-primary text-center hover:text-accent hover:scale-105 transition duration-300"
                      >
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/case-study"
                        className="text-white sm:text-xl text-xs  font-primary text-center hover:text-accent hover:scale-105 transition duration-300"
                      >
                        Desing Process
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/case-study"
                        className="text-white sm:text-xl text-xs font-primary text-center hover:text-accent hover:scale-105 transition duration-300"
                      >
                        Final Result
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderCaseStudy;
