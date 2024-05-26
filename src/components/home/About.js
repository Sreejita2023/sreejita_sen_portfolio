import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../../utils/data/aboutData";
function About() {
  return (
    <div className="bg-white left-0 right-0 flex flex-col relative  z-10 px-4 py-10  font-['Helvetica'] items-center">
      <div className="HowWeWork mb-10 text-center text-[#5928E5] tracking-tighter text-[30px] uppercase font-extrabold leading-[64px]">
        My Strategies:
      </div>
      <div className="flex lg:flex-row lg:justify-between flex-col items-center  gap-y-12 md:w-10/12 w-11/12 py-10">
        <div className="flex flex-col gap-y-4 w-7/12">
          <img src={aboutData.icon1} className="w-[40px] h-[40px]"/>
          <div className="MakingYourProjects  text-black text-[26px] font-extrabold tracking-tighter ">
            1. {aboutData.heading1}
          </div>
          <div className="TechnicalSkillsDe   text-black text-opacity-50 text-[16px] font-normal tracking-wider">
            {aboutData.subheading1}
          </div>
        </div>
        <div>
          <motion.img
            initial={{ scale: 0.84 }}
            whileInView={{ scale: 0.94 }}
            transition={{ ease: "anticipate", duration: 4, delay: 0 }}
            src={aboutData.photo1}
          ></motion.img>
        </div>
      </div>
      <div className="flex lg:flex-row lg:justify-between flex-col items-center  gap-y-12 w-10/12 py-10">
        <div>
          <motion.img
            initial={{ scale: 0.84 }}
            whileInView={{ scale: 0.94 }}
            transition={{ ease: "anticipate", duration: 4, delay: 0 }}
            src={aboutData.photo2}
          ></motion.img>
        </div>
        <div className="flex flex-col gap-y-4 w-7/12">
        <img src={aboutData.icon2} className="w-[40px] h-[40px]"/>
          <div className="MakingYourProjects  text-black text-[26px] font-extrabold tracking-tighter ">
            2. {aboutData.heading2}
          </div>
          <div className="TechnicalSkillsDe   text-black text-opacity-50 text-[16px] font-normal tracking-wider">
            {aboutData.subheading2}
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row lg:justify-between flex-col items-center  gap-y-12 w-10/12 py-10">
        <div className="flex flex-col gap-y-4 w-7/12">
          <img src={aboutData.icon3} className="w-[40px] h-[40px]"/>
          <div className="MakingYourProjects  text-black text-[26px] font-extrabold tracking-tighter ">
            3. {aboutData.heading3}
          </div>
          <div className="TechnicalSkillsDe   text-black text-opacity-50 text-[16px] font-normal tracking-wider">
            {aboutData.subheading3}
          </div>
        </div>
        <div>
          <motion.img
            initial={{ scale: 0.84 }}
            whileInView={{ scale: 0.94 }}
            transition={{ ease: "anticipate", duration: 4, delay: 0 }}
            src={aboutData.photo3}
          ></motion.img>
        </div>
      </div>
    </div>
  );
}

export default About;
