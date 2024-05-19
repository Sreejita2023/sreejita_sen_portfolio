import React from "react";
import leetcode from "../../assests/icons/leetcode.png";
import linkedin from "../../assests/icons/linkedin.svg";
import github from "../../assests/icons/github.svg";
import xtwitter from "../../assests/icons/x_twitter.svg";
import { contactsData } from "../../utils/data/contactsData";
function Footer() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="bg-[#5928E5] left-0 right-0 relative z-10  py-10 flex flex-col items-center font-['Helvetica']  ">
      <div className="flex md:flex-row md:justify-between md:items-start flex-col items-center gap-y-8 w-10/12  ">
        <div className="Personal  text-white text-3xl font-bold  leading-loose tracking-tighter">
          Portfolio
        </div>
        {/* contact details */}
        <div className="flex flex-col md:items-start items-center gap-y-4">
          <div className="text-white text-lg underline underline-offset-4 tracking-wider">
            Contact Details
          </div>
          {/* phone */}
          <div className="cursor-pointer font-medium tracking-wider text-base text-white hover:text-[#FFD9D8] hover:underline-offset-4 hover:scale-105 hover:underline transition ease-in-out duration-300">{contactsData.phone}</div>
          {/* email */}
          <div className="cursor-pointer font-medium tracking-wider text-base text-white hover:text-[#FFD9D8] hover:underline-offset-4 hover:scale-105 hover:underline transition ease-in-out duration-300">{contactsData.email}</div>
          {/* address */}
          <div className="cursor-pointer font-medium tracking-wider text-base text-white hover:text-[#FFD9D8] hover:underline-offset-4 hover:scale-105 hover:underline transition ease-in-out duration-300">{contactsData.address}</div>

        </div>
        {/* social details */}
        <div className="flex flex-col items-start gap-y-4">
          <div className="text-white text-lg underline underline-offset-4 tracking-wider">
            On Social
          </div>
          {/* leetcode */}
          <div
            className="flex flex-row gap-x-2 items-center text-white"
            onClick={() => openInNewTab(contactsData.leetcode)}
          >
            <div className="cursor-pointer w-6 h-6">
              <img src={leetcode} />
            </div>
            <div className="cursor-pointer font-medium tracking-wider text-base hover:text-[#FFD9D8] hover:underline-offset-4 hover:scale-105 hover:underline transition ease-in-out duration-300">Leetcode</div>
          </div>
          {/* linkedin */}
          <div
            className="flex flex-row gap-x-2 items-center text-white"
            onClick={() => openInNewTab(contactsData.linkedIn)}
          >
            <div className="cursor-pointer w-6 h-6">
              <img src={linkedin} />
            </div>
            <div className="cursor-pointer font-medium tracking-wider hover:text-[#FFD9D8] hover:underline-offset-4 hover:scale-105 hover:underline transition ease-in-out duration-300 ">LinkedIn</div>
          </div>
          {/* github */}
          <div
            className="flex flex-row gap-x-2 items-center text-white"
            onClick={() => openInNewTab(contactsData.github)}
          >
            <div className="cursor-pointer w-6 h-6">
              <img src={github} />
            </div>
            <div className="cursor-pointer font-medium tracking-wider hover:text-[#FFD9D8] hover:underline-offset-4 hover:scale-105 hover:underline transition ease-in-out duration-300">Github</div>
          </div>
          {/* twitter */}
          <div
            className="flex flex-row gap-x-2 items-center text-white"
            onClick={() => openInNewTab(contactsData.twitter)}
          >
            <div className="cursor-pointer w-6 h-6">
              <img src={xtwitter} />
            </div>
            <div className="cursor-pointer font-medium tracking-wider hover:text-[#FFD9D8] hover:underline-offset-4 hover:scale-105 hover:underline transition ease-in-out duration-300">Twitter</div>
          </div>
         
        </div>
      </div>
      <div className="flex flex-col items-start pt-10 w-10/12">
        <div className=" text-white  text-base font-normal  leading-loose">
          © Designed and developed by Sreejita Sen.
        </div>
      </div>
    </div>
  );
}

export default Footer;
