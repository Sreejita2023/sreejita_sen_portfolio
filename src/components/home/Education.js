import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { educations } from "../../utils/data/educationData";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { BsPersonWorkspace } from "react-icons/bs";
import laptop from "../../assests/education/laptop.gif";
function Education() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="bg-slate-800 left-0 right-0 relative z-10  flex flex-col items-center py-8">
      <div className="w-10/12 ">
        <div className="LatestWork  text-white text-[30px] font-extrabold font-['Epilogue'] leading-[64px] mb-2">
          Education
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-4">
          <div className="flex flex-col gap-6">
            {educations.map((education) => (
              <GlowCapture>
                <Glow
                  color="#87C159"
                  key={education.id}
                  identifier={`education-${education.id}`}
                >
                  <div className="p-3 relative text-white border-2 rounded-md  border-white border-opacity-10 select-none glow:ring-1 glow:border-glow glow:ring-glow  glow:bg-glow/[.15] glow:transition-all glow:duration-300 ">
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#87C159]">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-[#87C159] transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {education.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </Glow>
              </GlowCapture>
            ))}
          </div>
          <img src={laptop}></img>
        </div>
      </div>
    </div>
  );
}

export default Education;
