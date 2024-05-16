import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../utils/data/projectsData";
import github from "../assests/projects/github.svg";
import web from "../assests/projects/web.svg";
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
      <div className=" bg-orange-50 flex flex-col items-center py-4">
        <div className="w-10/12 grid grid-cols-1 gap-y-12">
          {projectsData.map((data, index) => {
            return (
              <div className="grid  grid-cols-1 place-items-center">
                <div className="">
                  <img
                    src={data.image}
                    alt="Logo"
                    className=" w-[580px] h-[400px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="flex flex-col items-center"
                >
                  <div className=" text-black text-[48px]  font-extrabold font-['Epilogue'] leading-[64px]">
                    {data.name}
                  </div>
                  <div className="flex flex-row gap-x-8 py-4">
                    <img
                      src={github}
                      width={40}
                      height={40}
                      className="cursor-pointer"
                      onClick={() => openInNewTab(data.code)}
                    />
                    <img
                      src={web}
                      width={40}
                      height={40}
                      className="cursor-pointer"
                      onClick={() => openInNewTab(data.demo)}
                    />
                  </div>
                  <div className=" text-orange-950 text-lg  font-normal font-['Epilogue'] leading-loose">
                    <span className="font-semibold text-black">
                      Techstack Used:
                    </span>{" "}
                    {data.tools.map((tool, id) => {
                      return <span>{tool},</span>;
                    })}
                  </div>
                  <div className="  text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose grid grid-cols-1 self-center">
                    <div>{data.description}</div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default P_page;
