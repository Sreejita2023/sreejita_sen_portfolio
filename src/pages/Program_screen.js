import React,{useEffect} from 'react'
import Prog from '../components/skills/Prog'
import { NavLink } from 'react-router-dom'
function S_prog_page() {   
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      <div className='bg-orange-50 py-10 flex flex-col items-center relative z-10 '>
          <div className=' w-9/12  md:text-[25px]  text-[20px] font-extrabold leading-[48px] gap-5 flex flex-row text-slate-800 justify-around border-b border-[#EF6D58]'>
              <div className=' cursor-pointer '><NavLink to="/skill/web" style={({ isActive }) => ({textDecoration: isActive ? 'underline #EF6D58 solid 4px ' :'none' ,textUnderlineOffset: isActive ? '12px' : 'auto',})}>Development</NavLink></div>
              <div className=' cursor-pointer'><NavLink to="/skill/programming" style={({ isActive }) => ({textDecoration: isActive ? 'underline #EF6D58 solid 4px' :'none' ,textUnderlineOffset: isActive ? '12px' : 'auto',})}>Programming</NavLink></div>
           </div>
           <div className=''>
             <Prog/>
           </div>
      </div>
    </div>
  )
}

export default S_prog_page