import laptop from "./assets/laptop.svg";
import robot from "./assets/robot.svg";
import under from "./assets/under.svg";

export const Hero = () => {
  return (
    <div className="pt-[110px] hidden lg:flex w-screen relative items-center h-[800px] max-w-[2000px] mt-[-50px]">
      {/* <motion.div
      initial = {initial}
      animate= {animate}

       className=" absolute top-[-300px] left-[-300px] rounded-full w-[500px] h-[500px] bg-gradient-to-r from-maingreen to-mainblue z-[-1]  blur-[250px]"></motion.div> */}

      {/* <motion.div
      initial = {initial}
      animate= {animate}
      className=" absolute bottom-[0px] right-[-200px] rounded-full w-[500px] h-[500px] bg-gradient-to-r from-maingreen to-mainblue z-[-1]  blur-[200px] opacity-80"></motion.div> */}

      <div className=" absolute top-[-20px] right-[100px] rounded-full w-[200px] h-[80px] bg-gradient-to-r from-maingreen to-mainblue z-[-1]   blur-[70px] opacity-80"></div>

      {
        <img
          src={robot}
          className="hidden lg:flex flinch absolute right-0 top-[px] h-[800px] object-none -z-20 select-none opacity-90"
          alt=""
        ></img>
      }

      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10">
        <div className="flex flex-col lg:w-[40%] ml-16 xl:ml-24 justify-center lg:justify-start ">
          <h1 className="text-white text-left text-[2.5rem] font-Inter font-bold sm:text-6xl xl:text-[4.25rem] mb-12 ">
            {" "}
            A Portfolio of a Full-Stack Developer
          </h1>
          <p className="font-Inter  text-left text-lg leading-7  text-grey  max-w-[600px] font-light">
            {" "}
            My name is <span className="font-semibold">Le Hoang Hai</span>, and
            this portfolio showcases my progress and potential in front-end
            design, data analysis, and more. Join me on my journey to explore
            new techniques and take on new challenges.
          </p>
          <a
            href="#contacts"
            className="text-white bg-[#724FE5] font-Inter py-3 mt-12 text-center  font-bold text-[14px] rounded-[8px] max-w-[200px] hover:bg-[#4c3598] duration-300"
          >
            Get in Touch
          </a>
        </div>
        <div className="hidden lg:flex mr-24 relative">
          <img src={laptop} className="laptop" alt="floating laptop"></img>
          <img
            src={under}
            className="absolute -bottom-12 -left-7 z-[-1]"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};
