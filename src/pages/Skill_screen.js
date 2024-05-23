import React, { useEffect, useState } from "react";
import { data } from "../utils/data/webData";
import { contactsData } from "../utils/data/contactsData";
import DoughnutPie from "../components/skills/DoughnutPie";
import LineChart from "../components/skills/LineChart";
import { questions,contests } from "../utils/data/leetcodeData";
function S_page() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white pb-32 pt-20 flex flex-col items-center relative z-10 font-['Helvetica'] ">
      <div className="text-black text-[40px] font-extrabold tracking-tighter pb-20">
        What I know...
      </div>
      {/* skills demonstration */}
      <div className="grid lg:grid-cols-3 grid-cols-2 place-content-center w-10/12 gap-x-8 gap-y-16  ">
        {data.map((item, index) => {
          return (
            <div
              className="flex flex-col bg-[#FFD9D9] rounded-md px-4 py-4 transition duration-300 ease-in-out hover:bg-[#5928E5] hover:text-white text-black hover:scale-105"
              key={index}
            >
              <img src={item.image} className="w-12 h-12" />
              <div className="font-bold tracking-tighter text-[22px]">
                {item.heading}
              </div>
              <div className="text-[16px] font-normal leading-loose tracking-wide">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
      {/* leetcode questions */}
      <div className="flex lg:flex-row flex-col lg:justify-between items-center w-10/12 py-28 gap-x-40 gap-y-10">
        <DoughnutPie />
        <div className="flex flex-col gap-y-8">
          <div className="text-black font-extrabold tracking-tight text-[30px]">
            Leetcode
          </div>
          <div className=" tracking-wide">
            Solved {questions.total}+ LeetCode problems, ranked {contests.highRank} in {contests.contestName},
            and participated in {contests.total}+ contests.
          </div>
          <button
            className="bg-[#5928E5] rounded-sm text-center text-[#FFD9D9] text-sm font-black capitalize tracking-tight px-10 py-4 transition duration-300 ease-in-out hover:text-white hover:scale-x-110 hover:tracking-wider w-5/12"
            onClick={() => openInNewTab(contactsData.leetcode)}
          >
            Learn More
          </button>
        </div>
      </div>
      {/* leetcode contests */}
      <div className="w-10/12">
         <LineChart/>
      </div>
    </div>
  );
}

export default S_page;
