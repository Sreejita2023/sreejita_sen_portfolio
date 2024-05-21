import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../utils/data/projectsData";
import github from "../assests/projects/github.svg";
import web from "../assests/projects/web.svg";
import { contactsData } from "../utils/data/contactsData";
function P_page() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className=" bg-white flex flex-col items-center font-['Helvetica']">
        <div className="w-full grid grid-cols-1  ">
          {/* head */}
          <div className="flex flex-col items-center py-20 gap-y-4">
             <div className="text-black tracking-tighter font-extrabold text-[20px] uppercase" >Explore my Techstack</div>
             <div className="text-[#5928E5] tracking-tighter font-extrabold text-[50px] uppercase">My Major Projects</div>
             <div className="tracking-wider w-6/12  text-center">With our ready-to-use assets & step-by-step instructions, you’ll be designing a complete e-commerce website with all its bells and whistles…</div>
          </div>
          {projectsData.map((data, index) => {
            return (
              <div className="grid  grid-cols-1 place-items-center  py-32 bg-[#471DC4]">
                <div className="bg-[#FFD9D9] w-10/12 flex flex-row justify-center items-center pt-6 pb-12">
                  <img
                    src={data.image}
                    alt="Logo"
                    className=" w-[700px] h-[500px] scale-150 self-center"
                  />
                </div>
                <div
                  className="flex flex-col items-start w-10/12 py-4"
                >
                  <div className=" text-white text-[38px] tracking-tighter  font-extrabold leading-[64px]">
                    {data.name}
                  </div>
                  <div className="flex flex-row gap-x-8 py-4">
                    <img
                      src={github}
                      width={36}
                      height={36}
                      className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                      onClick={() => openInNewTab(data.code)}
                    />
                    <img
                      src={web}
                      width={36}
                      height={36}
                      className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                      onClick={() => openInNewTab(data.demo)}
                    />
                  </div>
                  <div className="text-lg  font-normal leading-loose text-white">
                    <span className="font-semibold tracking-tight">
                      Techstack Used:
                    </span>{" "}
                    {data.tools.map((tool, id) => {
                      return <span className="text-base tracking-wider">{tool},</span>;
                    })}
                  </div>
                  <div className="  text-white text-base italic font-normal leading-loose grid grid-cols-1 self-center">
                    <div>{data.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* foot */}
          <div className="flex flex-col items-center py-32 gap-y-10 bg-[#FFD9D9]">
             <div className="text-[#5928E5] tracking-tighter font-extrabold text-[30px] uppercase">My Major Projects</div>
             <div className="tracking-wider w-6/12  text-center">With our ready-to-use assets & step-by-step instructions, you’ll be designing a complete e-commerce website with all its bells and whistles…</div>
             <button
                  className='bg-[#5928E5] rounded-sm text-center text-[#FFD9D9] text-sm font-black capitalize tracking-tight px-10 py-4 transition duration-300 ease-in-out hover:text-white hover:scale-x-110 hover:tracking-wide'
                  onClick={() => openInNewTab(contactsData.github)}
                >
                  Explore More
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default P_page;
