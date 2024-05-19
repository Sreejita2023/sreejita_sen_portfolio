import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Short from "./MenuBar";
import { contactsData } from "../../utils/data/contactsData";
function Nav() {
  const [add, setAdd] = useState("none");
  function handleHighlightTab() {
    setAdd("underline white solid");
  }
  return (
    <div className="bg-white flex flex-row top-0 left-0 right-0 py-2 fixed justify-around items-center z-20  shadow-b shadow-lg ">
      {/* my name as the main logo header */}
      <div className="flex flex-row md:pl-8 pl-2">
        <span className="text-[#5928E5] text-4xl font-black leading-[70px] font-['Helvetica'] tracking-tighter">
        {contactsData.name}
        </span>
      </div>
      {/* navigation links at header */}
      <div className=" font-['Helvetica'] text-center  hidden  text-black text-base font-normal leading-loose md:grid grid-cols-5 gap-5">
          <NavLink
            to="/"
            className="cursor-pointer transition ease-in-out duration-300 hover:border-[#5928E5] hover:border hover:scale-105 rounded-md hover:text-[#5928E5]"
          >
          Home
          </NavLink>
          <NavLink
            to="/project"
            className="cursor-pointer transition ease-in-out duration-300 hover:border-[#5928E5] hover:border hover:scale-105 rounded-md hover:text-[#5928E5]"
          >
          Projects
          </NavLink>
          <NavLink
            to="/skill/web"
            className="cursor-pointer transition ease-in-out duration-300 hover:border-[#5928E5] hover:border hover:scale-105 rounded-md hover:text-[#5928E5]"
          >
          Skills
          </NavLink>
          <NavLink
            to="/experience"
            className=" cursor-pointer transition ease-in-out duration-300 px-2 hover:border-[#5928E5] hover:border hover:scale-105 rounded-md hover:text-[#5928E5]"
          >
          Experience
          </NavLink>
          <NavLink
            to="/about"
            className="cursor-pointer transition ease-in-out duration-300 hover:border-[#5928E5] hover:border hover:scale-105 rounded-md hover:text-[#5928E5]"
          >
          About me
          </NavLink>
      </div>
      <div className="font-['Helvetica'] right-0 md:flex hidden">
      {/* border-white border-opacity-30 */}
      <NavLink to="/contact"><button className="text-center text-black text-sm font-bold  uppercase  rounded-md border bg-[#F8CFD6] py-3 px-4 transition ease-in-out duration-300 hover:scale-110 tracking-tight">
          Contact me
        </button></NavLink>
      </div>
      {/* menu bar for small screen */}
      <div className="md:hidden flex bg-[#FFD9D9] rounded-md transition ease-in-out duration-300 hover:scale-105">
        <Short />
      </div>
    </div>
  );
}

export default Nav;
