import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { experiences } from "../utils/data/experienceData";
function E_page() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className=" bg-white font-['Helvetica'] flex flex-col items-center">
      <div className="w-10/12 grid grid-cols-1 py-8 gap-y-8">
        {experiences.map((data, index) => {
          return (
            <div className="grid md:grid-cols-2 grid-cols-1 items-center my-20 ">
              <div classna
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 ,y:50}}
                  whileInView={{ opacity: 1, scale: 1,y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  src={data.image}
                  alt="Logo"
                  className=" w-[580px] h-[400px] "
                  loading="lazy"
                />
              </div>
              <div
                className="flex flex-col items-start gap-y-2"
              >
                <div className=" text-[#5625DE] text-[34px]  font-extrabold  leading-[64px] tracking-tighter">
                  {data.company}
                </div>
                <div className=" text-orange-950 text-lg  font-normal leading-loose flex flex-row gap-x-2">
                  <div>{data.title}</div>
                  <div>{data.duration}</div>
                </div>
                <div className="  text-orange-950 text-opacity-60 text-base font-normal  leading-loose grid grid-cols-1 gap-y-2">
                  <div>{data.details}</div>
                  <div className="text-black">
                    <span className="font-semibold text-[#5625DE]">
                      Techstack Used:
                    </span>{" "}
                    {data.techstack}
                  </div>
                </div>
                <button
                  className='bg-[#5928E5] rounded-sm text-center text-[#FFD9D9] text-sm font-black capitalize tracking-tight px-10 py-4 transition duration-300 ease-in-out hover:text-white hover:scale-x-110 hover:tracking-wider'
                  onClick={() => openInNewTab(data.link)}
                >
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default E_page;
