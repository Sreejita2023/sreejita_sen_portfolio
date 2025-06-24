import React, { useEffect, useRef } from "react";
import { educations } from "../../utils/data/educationData";
import eduIcon from "../../assests/education/education_icon.svg"


import laptop from "../../assests/education/laptop.webp";
function Education() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="bg-[#5022D2] left-0 right-0 relative z-10  flex flex-col items-center py-8 font-['Helvetica']">
      <div className="w-10/12 ">
        <div className="LatestWork  text-white text-[38px] tracking-tighter font-extrabold  leading-[64px] mb-8 uppercase">
          Education :
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-4">
          <div className="flex flex-col gap-6">
            {educations.map((education) => (
                  <div className="px-2 py-8 relative text-white rounded-md bg-[#4017B4] flex flex-col gap-y-2 shadow-md hover:scale-105 transition ease-in-out duration-500">
                    <div className="flex justify-center">
                      <p className="text-base text-[#FACED4] font-medium">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3">
                      <img src={eduIcon} className="w-[40px] h-[40px] self-start"/>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-extrabold uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {education.institution}
                        </p>
                      </div>
                    </div>
                  </div>
            ))}
          </div>
          <img src={laptop} className=" w-full h-full "></img>
        </div>
      </div>
    </div>
  );
}

export default Education;
