import React, { useState, useNavigate } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { closeSpring } from "./mini-components/Animations";
import { Modal } from "./mini-components/Modal";
import { projectData } from "./mini-components/projectData";
import arrow from "./assets/arrow.svg";

export const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  const arrowVariant = {
    notvisible: {
      rotate: "-45deg",
      opacity: 0,
    },
    visible: {
      rotate: "-135deg",
      scale: 1.5,
      opacity: 1,
    },
  };

  const handleMouseEnter = (div) => {
    setHovered(div);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div id="projects" className="flex flex-col sm:items-center text-white mt-32 px-6 sm:px-10 lg:px-24 pb-32">
      {/* <Modal 
      selected={selected}
      setSelected={setSelected}/> */}

      <h1 className="text-left sm:text-center text-4xl sm:text-6xl font-Inter font-bold lg:text-6xl mb-12">
        Showcase of My Projects
      </h1>

      <p className="sm:text-lg leading-[2rem] text-grey lg:text-center font-Inter  max-w-[600px] lg:max-w-[1000px] lg:text-lg sm:text-center">
        {" "}
        In the course of my professional journey, I have had the privilege of
        working on a diverse range of projects spanning various domains and
        technologies.
      </p>

      <div className="flex flex-col  lg:grid lg:grid-cols-2 gap-12 mt-20">
        {projectData.map((project, key) => {
          return (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex rounded-[20px] cursor-pointer z-20  lg:h-[400px]  ${
                selected !== null && "cursor-auto"
              } shadw bg-cover bg-center brightness-75 overflow-hidden grayscale-[20%] relative`}
              key={project.id}
              onMouseEnter={() => {
                handleMouseEnter(project.id);
              }}
              onMouseLeave={handleMouseLeave}
              layoutId={`card-${project.id}`}
              whileHover={{ filter: "brightness(1)", filter: "grayscale(0)" }}
              transition={closeSpring}
              onClick={
                selected === null &&
                (() => {
                  setSelected(project);
                })
              }
            >
              {hovered === project.id && (
                <motion.img
                  variants={arrowVariant}
                  inital="notvisible"
                  onClick={() => {}}
                  animate="visible"
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 40,
                  }}
                  src={arrow}
                  className={` absolute left-[16px] top-[16px] w-[30px] h-[30px]  z-10 `}
                ></motion.img>
              )}
              <AnimatePresence>
                {hovered === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute bottom-0 left-0 z-20 backdrop-blur-lg  w-full ${project.title === "Invoice Manager App" && "backdrop-contrast-50"}`}
                  >
                    <section className="px-5 py-3 flex flex-col gap-1">
                      <h2 className=" font-bold ">{project.title}</h2>
                      <p>{project.description}</p>
                    </section>
                  </motion.div>
                )}
              </AnimatePresence>
              <img
                src={project.image}
                className="object-cover rounded-[20px] w-full h-full hover:scale-[1.02] duration-500"
                alt={project.title}
              ></img>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};
