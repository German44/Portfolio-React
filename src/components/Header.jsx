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
            <a href=""><FaLinkedin /></a>
            <a href=""><FaGithub /></a>
            <a href=""><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
