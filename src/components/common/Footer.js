import React from "react";
import leetcode from "../../assests/leetcode.png";
import linkedin from "../../assests/linkedin.png";
import github from "../../assests/github.png";
import { contactsData } from "../../utils/data/contactsData";
function Footer() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="bg-slate-800 left-0 right-0 relative z-10  py-4 flex flex-col items-center  ">
      <div className="flex flex-row justify-between pb-2 items-center w-10/12">
        <div className="Personal  text-white text-2xl font-bold font-['Epilogue'] leading-loose">
          Portfolio
        </div>
        <div className="grid grid-cols-3 gap-x-4">
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
      </div>
      <div className="Rectangle mx-auto w-10/12 h-px bg-gray-700" />
      <div className="flex flex-col items-start pt-4 w-10/12">
        <div className=" text-white text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
          © Designed and developed by Sreejita Sen.
        </div>
      </div>
    </div>
  );
}

export default Footer;
