import Logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"

const Header = () => {
  return (
    <header className="py-6  bg-black/20 h-[96px] backdrop-blur-2x1">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img src={Logo}></img>
          </Link>
          <div className="flex text-[20px] lg:text-[40px] gap-x-8 max-w-max mx-auto lg:mx-0 items-center">
            {/* <a  href=""><FaLinkedin color="#8C113E" className="rounded-full"/></a>
            <a href=""><FaGithub color="#8C113E"/></a>
            <a href=""><FaEnvelope color="#8C113E" /></a> */}
            <a className="social_links" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/german-ravarotto/"><i
              className="fa-brands fa-linkedin"></i></a>
            <a className="social_links" target="_blank" rel="noreferrer" href="https://github.com/German44"><i
              className="fa-brands fa-github"></i></a>
            <a className="social_links" target="_blank" rel="noreferrer" href="mailto:g44ravarotto@gmail.com"><i
              className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
