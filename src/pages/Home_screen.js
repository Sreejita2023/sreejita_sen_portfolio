import React,{useEffect} from 'react'
import Home from '../components/home/Home'
import Skills from '../components/home/Skills'
import Education from '../components/home/Education'
import About from '../components/home/About'
import Testimonial from '../components/home/Testimonial'
function H_page() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
       <div className='flex flex-col items-center overflow-hidden'>
        <div className='w-full'>
        <Home />
        </div>
        <div className='w-full'>
        <Skills />
        </div>
        <div className='w-full'>
        <Education/>
        </div>
        <div className='w-full '>
        <About/>
        </div>
        <div className='w-full'>
        <Testimonial/>
        </div>
       </div>
    </div>
  )
}

export default H_page