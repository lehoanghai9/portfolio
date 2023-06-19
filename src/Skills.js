import { SkillsInfinite } from "./SkillsInfinite"


export const Skills = () => {
  return(
    <div id="skills" className="flex flex-col lg:flex-row lg:px-16 xl:px-24 bg-black pt-16 sm:pt-32 gap-16 mb-20 w-screen lg:items-center items-center relative ">
      <div className="gradient-04 h-[100px] pointer-events-none "></div>
      <div className="gradient-041 h-[100px] pointer-events-none "></div>
      <div className="lg:w-[50%] max-w-[800px] px-6 sm:px-10 lg:px-0">
        <h1 className="text-[2.3rem] lg:text-left font-Inter font-bold text-white font sm:text-6xl mb-10 leading-none sm:text-center">A Look at the Technical Skillset</h1>
        <p className="lg:text-left text-grey font-Inter sm:text-lg lg:max-w-[90%] leading-[1.8rem] max-w-[700px] sm:text-center" >With a deep understanding of programming concepts and data structures, they have the ability to solve complex problems and develop innovative solutions. Additionally, their experience in [related field] has given them a well-rounded perspective on technical projects, enabling them to collaborate {/* effectively with team members and stakeholders. Overall, their expertise and achievements in the technical field make them an excellent candidate for any programming role. */}</p>
      </div>
      <SkillsInfinite/>
    </div>
  )
}