import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Short from "./MenuBar";
import { contactsData } from "../../utils/data/contactsData";
function Nav() {
  const [select, setSelect] = useState("none");
  return (
    <div className="bg-white flex flex-row top-0 left-0 right-0 py-2 fixed justify-around items-center z-20  shadow-b shadow-lg ">
      {/* my name as the main logo header */}
      <div className="flex flex-row md:pl-8 pl-2">
        <NavLink
           onClick={()=>setSelect('home')}
            to="/" className="text-[#5928E5] cursor-pointer text-4xl font-black leading-[70px] font-['Helvetica'] tracking-tighter">
        {contactsData.name}
        </NavLink>
      </div>
      {/* navigation links at header */}
      <div className=" font-['Helvetica'] text-center  hidden  text-black text-base font-normal leading-loose md:grid grid-cols-5 gap-5">
          <NavLink
            to="/"
            onClick={()=>setSelect('home')}
            className={`cursor-pointer transition ease-in-out duration-300 hover:border-[#5928E5] hover:border hover:scale-105 rounded-md hover:text-[#5928E5] ${select === 'home'|| window.location.pathname==='/' ? 'text-[#5928E5] border-[#5928E5] border' : ''}`}
          >
          Home
          </NavLink>
          <NavLink
            to="/experience"
            onClick={()=>setSelect('experience')}
            className={`cursor-pointer transition ease-in-out duration-300 hover:border-[#5928E5] hover:border hover:scale-105 rounded-md hover:text-[#5928E5] ${select === 'experience' || window.location.pathname==='/experience'? 'text-[#5928E5] border-[#5928E5] border' : ''}`}
          >
          Experience
          </NavLink>
          <NavLink
            to="/skill"
            onClick={()=>setSelect('skill')}
            className={`cursor-pointer transition ease-in-out duration-300 hover:border-[#5928E5] hover:border hover:scale-105 rounded-md hover:text-[#5928E5] ${select === 'skill' || window.location.pathname==='/skill'? 'text-[#5928E5] border-[#5928E5] border' : ''}`}
          >
          Skills
          </NavLink>
          <NavLink
            to="/project"
            onClick={()=>setSelect('project')}
            className={`cursor-pointer transition ease-in-out duration-300 hover:border-[#5928E5] hover:border hover:scale-105 rounded-md hover:text-[#5928E5] ${select === 'project'|| window.location.pathname==='/project' ? 'text-[#5928E5] border-[#5928E5] border' : ''}`}
          >
          Projects
          </NavLink>
          <NavLink
            to="/about"
            onClick={()=>setSelect('about')}
            className={`cursor-pointer transition ease-in-out duration-300 hover:border-[#5928E5] hover:border hover:scale-105 rounded-md hover:text-[#5928E5] ${select === 'about'|| window.location.pathname==='/about' ? 'text-[#5928E5] border-[#5928E5] border' : ''}`}
          >
          About me
          </NavLink>
      </div>
      <div className="font-['Helvetica'] right-0 md:flex hidden">
      {/* border-white border-opacity-30 */}
      <NavLink to="/contact"
        onClick={()=>setSelect('none')}
      ><button className="text-center text-black text-sm font-bold  uppercase  rounded-md border bg-[#F8CFD6] py-3 px-4 transition ease-in-out duration-300 hover:scale-110 tracking-tight">
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
