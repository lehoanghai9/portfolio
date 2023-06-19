import react from "./assets/tech-logos/react.svg"
import javascript from "./assets/tech-logos/javascript.svg"
import tailwindcss from "./assets/tech-logos/tailwindcss.svg"
import framermotion from "./assets/tech-logos/framermotion.svg"

import r from "./assets/tech-logos/r.svg"
import sql from "./assets/tech-logos/sql.svg"
import python from "./assets/tech-logos/pythonn.svg"
import tensorflow from "./assets/tech-logos/tensorflow.svg"

import d3 from "./assets/tech-logos/d3.svg"
import chartjs from "./assets/tech-logos/chartjs.svg"
import numpy from "./assets/tech-logos/numpy.svg"
import pandas from "./assets/tech-logos/pandas.svg"

import figma from "./assets/tech-logos/figma.svg"
import adobeillustrator from "./assets/tech-logos/adobeai.svg"
import adobephotoshop from "./assets/tech-logos/adobeps.svg"
import github from "./assets/tech-logos/github.svg"




export const SkillsInfinite = () => {
  const technologies1 = [
    { name: "React", logo: react },
    { name: "JavaScript", logo: javascript },
    { name: "Tailwind CSS", logo: tailwindcss },
    { name: "Framer Motion", logo: framermotion },
  ];

  const technologies2 = [
    { name: "R", logo: r },
    { name: "Python", logo: python },
    { name: "SQL", logo: sql },
    { name: "Tensorflow", logo: tensorflow },
  ];

  const technologies3 = [
    { name: "NumPy", logo: numpy },
    { name: "Pandas", logo: pandas },
    { name: "D3", logo: d3 },
    { name: "ChartJS", logo: chartjs},
  ];

  const technologies4 = [
    { name: "Adobe Illustrator", logo: adobeillustrator },
    { name: "Figma", logo: figma },
    { name: "Adobe Photoshop", logo: adobephotoshop },
    { name: "GitHub", logo: github},
  ];


  return(
    <div className="w-screen lg:w-[50%] max-w-[900px] overflow-hidden h-fit relative py-3 ">
      {/* <div className="hidden lg:flex w-[50px] h-[1000px] -top-10 bg-black absolute z-10 -right-5 blur-[10px]"></div>
      <div className="hidden lg:flex w-[40px] h-[1000px] -top-10 bg-black absolute z-10 -left-5 blur-[10px]"></div> */}
      <div className="flex gap-4 slide">
        {technologies1.map((tech, key) => 
        {
          return(
            <div className="flex gap-2 technology "
            key ={"1.1."+ key }>
              <img src={tech.logo} className="w-[20px] h-[20px]" alt={tech.name}></img>
              {tech.name}
            </div>
          )
        })}
        
        {technologies1.map((tech, key) => 
        {
          return(
            <div className="flex gap-2 technology "
            key ={"1.2."+ key }>
              <img src={tech.logo} className="w-[20px] h-[20px]" alt={tech.name}></img>
              {tech.name}
            </div>
          )
        })}
      </div>
        
      <div className="flex gap-4 mt-4 slide2">
      {technologies2.map((tech, key) => 
        {
          return(
            <div className="flex gap-2 technology "
            key ={"2.1."+ key }>
              <img src={tech.logo} className="w-[20px] h-[20px]" alt={tech.name}></img>
              {tech.name}
            </div>
          )
        })}
        
        {technologies2.map((tech, key) => 
        {
          return(
            <div className="flex gap-2 technology "
            key ={"2.2."+ key }>
              <img src={tech.logo} className="w-[20px] h-[20px]" alt={tech.name}></img>
              {tech.name}
            </div>
          )
        })}
        
      </div>

      <div className="flex gap-4 mt-4 slide3">
      {technologies3.map((tech, key) => 
        {
          return(
            <div className="flex gap-2 technology "
            key ={"3.1."+ key }>
              <img src={tech.logo} className="w-[20px] h-[20px]" alt={tech.name}></img>
              {tech.name}
            </div>
          )
        })}

      {technologies3.map((tech, key) => 
        {
          return(
            <div className="flex gap-2 technology "
            key ={"3.2."+ key }>
              <img src={tech.logo} className="w-[20px] h-[20px]" alt={tech.name}></img>
              {tech.name}
            </div>
          )
        })}
      </div>

      <div className="flex gap-4 mt-4 slide4">
      {technologies4.map((tech, key) => 
        {
          return(
            <div className="flex gap-2 technology "
            key ={"4.1."+ key }>
              <img src={tech.logo} className="w-[20px] h-[20px]" alt={tech.name}></img>
              {tech.name}
            </div>
          )
        })}

{technologies4.map((tech, key) => 
        {
          return(
            <div className="flex gap-2 technology "
            key ={"4.2."+ key }>
              <img src={tech.logo} className="w-[20px] h-[20px]" alt={tech.name}></img>
              {tech.name}
            </div>
          )
        })}
      </div>
      
    </div>
  )
}