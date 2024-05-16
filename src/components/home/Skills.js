import React from "react";
import dev from "../../assests/dev.png";
import prog from "../../assests/prog.png";
import learn from "../../assests/learn.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Skills_Slider from '../skill_slider/base'
import { progHeading } from "../../utils/data/progData";
import { webHeading } from "../../utils/data/webData";
function Skills() {
  return (
    <div className="bg-orange-50 left-0 right-0 relative flex flex-col items-center z-10 px-4 py-4 ">
      <div className=" text-center text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px] mb-2">
        Skills
      </div>
      <div className=" text-center text-orange-950 text-[56px] font-extrabold font-['Epilogue'] leading-[64px] ">
        How I Can Help <br />
        You With
      </div>
      <div className=" w-full">
      <Skills_Slider/>
      </div>
    <div className="flex lg:flex-row  lg:justify-around flex-col items-center gap-y-6 w-11/12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: -10 }}
          transition={{ ease: "anticipate", duration: 0.2 }}
          className="box1 rounded-tl-md rounded-bl-md border border-red-200 flex flex-col items-start p-5 max-w-[500px]"
        >
          <div className="flex flex-row justify-start items-center mb-2">
            <img src={dev} className="w-12 h-12 mr-4" />
            <div className="Design text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
              Development
            </div>
          </div>
          <div className="AgencyIsABusiness  text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose mb-2">
          {webHeading.title}
          </div>
          <NavLink to="/skill/web">
          <div className="flex flex-row justify-start items-center">
            <img src={learn} className="w-12 h-12 mr-2" />
            <div className=" text-orange-950 text-base font-normal font-['Epilogue'] leading-loose cursor-pointer">
             Learn More
            </div>
          </div></NavLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: -10 }}
          transition={{ ease: "anticipate", duration: 0.2 }}
          className="box2  rounded-tr-md rounded-br-md border border-red-200 flex flex-col items-start p-5 max-w-[500px]"
        >
          <div className="flex flex-row justify-start items-center mb-2">
            <img src={prog} className="w-12 h-12 mr-4" />
            <div className="Design text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
              Programming
            </div>
          </div>
          <div className="AgencyIsABusiness  text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose mb-2">
           {progHeading.title}
          </div>
          <NavLink to="/skill/programming">
          <div className="flex flex-row justify-start items-center">
            <img src={learn} className="w-12 h-12 mr-2" />
            <div className=" text-orange-950 text-base font-normal font-['Epilogue'] leading-loose cursor-pointer">
             Learn More
            </div>
          </div></NavLink>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
