import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { aboutData } from "../../utils/data/aboutData";
function About() {
  return (
    <div className="bg-orange-50 left-0 right-0 flex flex-col relative  z-10 px-4 py-10 ">

      <div className="flex lg:flex-row lg:justify-around flex-col items-center  gap-y-12">
        <div>
          <div className="HowWeWork mb-10 items-start text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
            How I work
          </div>
          <div className="MakingYourProjects mb-4 text-orange-950 text-[40px] font-extrabold font-['Epilogue'] leading-[48px]">
            Making Your Projects <br />
            Look Awesome
          </div>
          <div className="TechnicalSkillsDe mb-12 w-[470px] h-[68px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
            Technical skills, design, business understanding, ability to put
            themselves in the project.
          </div>
          <div className=' bg-white rounded-md shadow w-5/12 text-center text-orange-950 text-sm font-black font-["Epilogue"] uppercase px-8 py-4 transition delay-75 duration-300 ease-in-out hover:scale-110'>
            <NavLink to="/about">Read More</NavLink>
          </div>
        </div>
        <div className="Rectangle w-10/12 h-px mx-auto block lg:hidden bg-red-200" />
        <div>
          <motion.div
            className="flex flex-row items-center mb-8"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "anticipate", duration: 0.8, delay: 0}}
          >
            <div className=" text-orange-950 text-7xl font-extrabold font-['Epilogue'] leading-[80px] mr-5">
              1
            </div>
            <div className="FullServiceRangeI text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
            {aboutData.line1}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "anticipate", duration: 0.8, delay: 0.4 }}
            className="flex flex-row items-center mb-8"
          >
            <div className=" text-orange-950 text-7xl font-extrabold font-['Epilogue'] leading-[80px] mr-5">
              2
            </div>
            <div className="FullServiceRangeI text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
            {aboutData.line2}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "anticipate", duration: 0.8, delay: 0.8 }}
            className="flex flex-row items-center mb-8"
          >
            <div className=" text-orange-950 text-7xl font-extrabold font-['Epilogue'] leading-[80px] mr-5">
              3
            </div>
            <div className="FullServiceRangeI text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
              {aboutData.line3}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
