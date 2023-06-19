import tabletbg from "./assets/HEROMAINSVG.svg"
import sphere from "./assets/hero-sphere.svg"
import octo from "./assets/hero-octo.svg"
import tetra from "./assets/hero-tetraeder.svg"

export const HeroSmall = () => {
  return(
    <div className=" lg:hidden relative pt-[80px]">
  
    <div className="sm:hidden absolute top-[-200px] opacity-30 left-0 blur-2xl
    -0 rounded-full w-screen h-[250px] bg-gradient-to-r from-mainblue to-maingreen z-[-1] "></div>

    <div className="hidden sm:flex absolute top-[-200px] left-[-120px] rounded-full w-[300px] h-[300px] bg-gradient-to-r from-mainblue to-maingreen z-[-1]  blur-[150px]"></div>

    <div className=" absolute bottom-[0px] right-[25%] rounded-full w-[300px] h-[300px] bg-gradient-to-r from-mainblue to-maingreen z-[-1]  blur-[150px]"></div>

      <div
      className="flex flex-col items-center px-10">
      <h1 className="font-Inter font-bold max-w-[700px] text-[2.5rem] sm:text-6xl text-white mb-8 mt-16 mt- leading-none text-center">A Portfolio of a Full-Stack Developer</h1>
      <p className=" text-grey max-w-[600px] font-Inter text-base sm:text-lg text-center">My name is <span className="font-semibold">Le Hoang Hai</span>, and this portfolio showcases my progress and potential in front-end design, data analysis, and more. Join me on my journey to explore new techniques and take on new challenges.</p>
      <a href="#contacts" className="text-white bg-[#724FE5] font-Inter px-8 py-3 mt-12  font-bold text-[12px] sm:text-[14px] rounded-[8px] max-w-[200px] hover:bg-[#4c3598] duration-300" >Get in Touch</a>
    </div>
    <div className="w-screen relative mt-12">
        <img src={tabletbg} className="w-full" alt="backgound" ></img>
        <img src={sphere} className="levitate2 absolute -top-10 sm:right-10 right-5 sm:w-[67px]" alt=""></img>
        <img src={octo} className="laptop absolute top-0 left-10 sm:top-10 sm:left-16 sm:w-[80px]" alt=""></img>
        <img src={tetra} className="levitate absolute top-14 sm:top-32 sm:w-[120px] w-[65px] right-[45%]" alt=""></img>
      </div>
    </div>
    
  )
}