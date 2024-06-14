import Logo from "../../assets/logo.svg"
import { Link as LinkScroll } from 'react-scroll/modules'

const Header = () => {
  return (
    /* fixed top-0 z-50 */
    <header className=" bg-black/20 h-[70px] backdrop-blur-2xl  w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <LinkScroll className="hidden lg:flex "  to="home">
            <img src={Logo}></img>
          </LinkScroll>
          <div className="flex text-[20px] lg:text-[40px] gap-x-8 max-w-max mx-auto lg:mx-0 items-center">
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