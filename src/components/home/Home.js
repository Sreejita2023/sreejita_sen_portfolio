import React from "react";
import group from "../../assests/group.png";
import star from "../../assests/Star.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import { contactsData } from "../../utils/data/contactsData";
import leetcode from "../../assests/leetcode.png";
import linkedin from "../../assests/linkedin.png";
import github from "../../assests/github.png";
function Home() {

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="bg-slate-800 left-0 right-0 relative z-10 px-4 flex lg:flex-row lg:justify-around  flex-col gap-y-12 items-center py-10 ">
      <div className="">
        <div className=" text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px] mb-2">
          Portfolio
        </div>
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              duration: 0.8,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src={star}
            alt="Logo"
            className=" w-[100px] h-[100px] absolute -z-30 left-[320px] top-[60px]"
          />
          <div className=" text-white text-7xl font-extrabold font-['Epilogue'] leading-[80px] mb-2">
            I’m Here <br />
            To Build Your <br />
            Dream Project
          </div>
        </div>
        <div className=" max-w-[470px]  text-white text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
        App Development, Web Design & Coding.  Powered by Passion. Connected by Collaboration.
        </div>
        <div className="flex flex-row py-6 gap-x-4">
          <div
            className="cursor-pointer w-9 h-9"
            onClick={() => openInNewTab(contactsData.leetcode)}
          >
            <img src={leetcode} />
          </div>
          <div
            className="cursor-pointer w-9 h-9"
            onClick={() => openInNewTab(contactsData.linkedIn)}
          >
            <img src={linkedin} />
          </div>
          <div
            className="cursor-pointer w-9 h-9"
            onClick={() => openInNewTab(contactsData.github)}
          >
            <img src={github} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          <a
            role="button"
            target="_blank"
            href={contactsData.resume}
            className="bg-red-400 rounded-md text-center text-white text-base font-black font-['Epilogue'] uppercase py-4 hover:cursor-pointer  hover:bg-red-500"
          >
            Get Resume <DownloadIcon />
          </a>
          <NavLink to="/contact"><button className="text-white rounded-md text-base font-normal font-['Epilogue'] leading-loose uppercase cursor-pointer text-center py-4 px-8 border ">
            Contact Me 
          </button></NavLink>
        </div>
      </div>
      <div className="">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          src={group}
          alt="Logo"
          className=" w-[340px] h-[400px] "
        />
      </div>
    </div>
  );
}

export default Home;
