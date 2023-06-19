import logo from "./assets/logo2.svg"
import hamburger from "./assets/icon-hamburger.svg"
import resume from "./assets/resume_le_hoang_hai.pdf"

export const Navbar = () => {
  return(
    <nav

    className="fixed top-0 z-50 flex px-6 sm:px-10 lg:px-16 xl:px-24 w-screen py-3 text-white justify-between bg-[#0000003f] backdrop-blur-[40px] border-b-[1px] border-b-neutral-800 items-center ">
      <div className="flex font-Inter font-normal  items-center text-sm text-slate-400 "> 
      <a href="localhost:3000">
        <img src={logo} className="cursor-pointer w-[100px] h-[40 px] sm:w-[120px] sm:h-[50px] mr-28 z-50" alt="logo"></img>
      </a>
        
        <div className="hidden lg:flex gap-28 z-50">
          <a href="#skills" className="cursor-pointer hover:text-white duration-300">Skills</a>
          <a href="#projects" className="cursor-pointer hover:text-white duration-300">Projects</a>
          <a href="#contacts" className="cursor-pointer hover:text-white duration-300">Contacts</a>
        </div>
        
      </div>
      <a href={resume} target="_blank" rel="noopener noreferrer" className="flex items-center px-5 sm:px-10 hover:bg-white duration-[400ms] ease-in-out hover:text-black text-white font-Inter font-bold py-2 sm:py-3 rounded-[8px] cursor-pointer text-[12px] sm:text-sm z-10">Get Resume</a>
      {/* <img src={hamburger} className="sm:hidden w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] self-center"></img> */}
      
    </nav>
  )
}