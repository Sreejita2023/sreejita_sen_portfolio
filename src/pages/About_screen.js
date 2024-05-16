import React, { useEffect } from "react";
import block from "../assests/block.png";
import { NavLink } from "react-router-dom";
import { contactsData } from "../utils/data/contactsData";
function A_page() {
  const heading = "About Me";
  const title =
    "Please take a moment to review my profile, where you can also find my LeetCode and GitHub accounts for further insight and exploration.";

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className=" bg-orange-50 flex flex-col items-center py-10">
        <div className="flex flex-col items-start gap-y-4 py-3 px-5 ">
          <div className="GabrielPires text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
            {contactsData.name}
          </div>
          <div className="ProfessionalWebDes max-w-[570px]  text-orange-950 text-[56px] font-extrabold font-['Epilogue'] leading-[64px]">
          Hello, World! 
          </div>
          <div className="AbilityToPutThems max-w-[570px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
            {contactsData.aboutMe}
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
          className=" lg:w-7/12 md:w-9/12 w-10/12  mb-4"
        />
      </div>
      <div className="bg-red-100 grid lg:grid-cols-3 grid-cols-1 place-items-center items-center gap-y-4 py-2">
        <div className="flex flex-col lg:items-start items-center gap-y-2">
          <div className="  text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
            I Help Companies Move Faster
          </div>
          <button className='bg-red-400  px-6 py-3 rounded-md text-center text-white text-sm font-black font-["Epilogue"] uppercase'>
            <NavLink to="/contact">Contact Me</NavLink>
          </button>
        </div>
        <div className="PutThemselvesInTh w-[370px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
          Thank you for taking the time to review my profile. Your attention to
          my accomplishments and skills is greatly appreciated.
        </div>
        <div>
          <img src={block} className="max-w-[350px] max-h-[300px]" />
        </div>
      </div>
    </div>
  );
}

export default A_page;
