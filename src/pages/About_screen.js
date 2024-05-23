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
      <div className=" bg-white flex flex-col items-center py-10 font-['Helvetica']">
        <div className="flex flex-col items-start gap-y-4 py-10 px-5 ">
          <div className="GabrielPires text-black text-base font-extrabold uppercase leading-loose tracking-[3px]">
            {contactsData.name}
          </div>
          <div className="ProfessionalWebDes max-w-[570px]  text-[#5928E5] text-[56px] font-extrabold leading-[64px] tracking-tight">
          Hello, World! 
          </div>
          <div className="AbilityToPutThems max-w-[570px] text-orange-950 text-opacity-60 text-base font-normal leading-loose">
            {contactsData.aboutMe}
          </div>
        </div>
        <img alt="photo of girl"
          src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
          className=" lg:w-7/12 md:w-9/12 w-10/12  mb-4 py-8"
        />
      </div>
      <div className="bg-red-100 grid lg:grid-cols-3 grid-cols-1 place-items-center items-center gap-y-4 py-8">
        <div className="flex flex-col lg:items-start items-center gap-y-2">
          <div className="  text-black text-2xl font-bold leading-loose tracking-tighter">
            I Help Companies Move Faster
          </div>
          <NavLink to="/contact"><button className='bg-[#5928E5] rounded-sm text-center text-[#FFD9D9] text-sm font-black uppercase px-10 py-4 transition duration-300 ease-in-out hover:bg-black hover:scale-x-110'>
            Contact Me
          </button></NavLink>
        </div>
        <div className="PutThemselvesInTh w-[370px] text-orange-950 text-opacity-60 text-base font-normal leading-loose">
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
