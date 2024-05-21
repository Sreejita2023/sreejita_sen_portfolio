import React, { useEffect } from "react";
import Form from "../components/common/Form";
import group from "../assests/contact/communicate.webp";
import { motion } from "framer-motion";
import { contactsData } from "../utils/data/contactsData";
function C_page() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="bg-white flex flex-col items-center font-['Helvetica']">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-10/12  py-24 ">
        <div className="Rectangle  bg-[#FFD9D9] rounded-md py-7 flex flex-col gap-y-4 items-center ">
          <div className="GetInTouch text-[#5928E5] text-2xl font-extrabold tracking-tighter uppercase leading-loose ">
            Let's Collaborate
          </div>
          <Form />
        </div>
        <div className="flex  flex-row justify-center ">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src={group}
            alt="Logo"
            className="   lg:h-[500px] h-[400px] md:h-[500px]"
          />
        </div>
      </div>
      <div className="Rectangle w-10/12 h-px mx-auto block  bg-red-200" />
    </div>
  );
}

export default C_page;
