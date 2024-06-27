import { Link as LinkScroll } from "react-scroll/modules";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const NavBarCaseStudy = () => {
  return (
    <nav className="fixed bottom-3 lg:bottom-4 w-full overflow-hidden z-50 ">
      <div className="container mx-auto">
        <div className="w-full bg-black/30 h-[78px] backdrop-blur-2xl border-white border-solid border-2 rounded-full max-w-[600px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50">
          <Link
            to="/"
            activeClass="active"
            className=" text-xs cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-black/40 rounded-full "
          >
            Home
          </Link>
          <LinkScroll
            to="aboutCaseStudy"
            activeClass="active"
            smooth={true}
            spy={true}
            className="text-xs cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-black/40 rounded-full "
          >
            Case Study
          </LinkScroll>
          <Link className="hidden lg:flex " to="/">
            <img src={Logo}></img>
          </Link>
          <LinkScroll
            to="DesignProcess"
            activeClass="active"
            smooth={true}
            spy={true}
            className="text-xs cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-black/40 rounded-full "
          >
            Design Process
          </LinkScroll>
          <LinkScroll
            to="Final"
            activeClass="active"
            smooth={true}
            spy={true}
            className="text-xs cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-black/40 rounded-full "
          >
            Final
          </LinkScroll>
        </div>
      </div>
    </nav>
  );
};

export default NavBarCaseStudy;
