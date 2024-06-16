// import { BsChatTextFill , BsBriefcaseFill,  BsFillHouseFill , BsFillPersonFill} from 'react-icons/bs'
import { Link as LinkScroll } from "react-scroll/modules";
import Logo from "../../assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="fixed bottom-3 lg:bottom-4 w-full overflow-hidden z-50 ">
      <div className="container mx-auto">
        <div className="w-full bg-black/30 h-[78px] backdrop-blur-2xl border-white border-solid border-2 rounded-full max-w-[600px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50">
          <LinkScroll
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-black/40 rounded-full "
          >
            {/* < BsFillHouseFill /> */}
            Home
          </LinkScroll>
          <LinkScroll
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-black/40 rounded-full "
          >
            {/* <BsFillPersonFill/> */}
            About
          </LinkScroll>
          <LinkScroll className="hidden lg:flex " to="home">
            <img src={Logo}></img>
          </LinkScroll>
          <LinkScroll
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-black/40 rounded-full "
          >
            {/* <BsBriefcaseFill /> */}
            Works
          </LinkScroll>
          <LinkScroll
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-black/40 rounded-full "
          >
            {/* <BsChatTextFill /> */}
            Contact
          </LinkScroll>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
