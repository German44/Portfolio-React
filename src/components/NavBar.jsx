import { BiHome, BiUser } from 'react-icons/Bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/Bs'
import { Link as LinkScroll } from 'react-scroll/modules'

const NavBar = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50'>
          <LinkScroll
            to="home"
            activeClass='active'
            smooth="true"
            spy="true"
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
            <BiHome />
          </LinkScroll>
          <LinkScroll
            to="about"
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser />
          </LinkScroll>
          <LinkScroll
            to="work"
            activeClass='active'
            smooth="true"
            spy="true"
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsBriefcase />
          </LinkScroll>
          <LinkScroll
            to="contact"
            activeClass='active'
            smooth="true"
            spy="true"
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboardData />
          </LinkScroll>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
