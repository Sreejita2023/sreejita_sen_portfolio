import React, { useEffect } from "react";
import Form from "../components/common/Form";
import phone from "../assests/phone.png";
import address from "../assests/address.png";
import email from "../assests/email.png";
import group from "../assests/group1.png";
import { motion } from "framer-motion";
import { contactsData } from "../utils/data/contactsData";
function C_page() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="bg-orange-50 flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-10/12 bg-orange-50 py-8 ">
        <div className="Rectangle  bg-white rounded-md py-7 flex flex-col gap-y-4 items-center ">
          <div className="GetInTouch text-orange-950 text-2xl font-bold underline-offset-8 underline font-['Epilogue'] leading-loose ">
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
      <div className="bg-orange-50 grid grid-cols-1 lg:grid-cols-3 w-10/12 py-16">
        <div className="border border-red-200 flex flex-col gap-y-2 py-4  items-start  pl-6">
          <div className="flex flex-row gap-x-4 items-center">
            <div>
              <img src={phone} className="w-10 h-10" />
            </div>
            <div className=" text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
              Phone
            </div>
          </div>
          <div className=" text-orange-950 text-lg font-normal font-['Epilogue'] leading-loose pl-2">
            {contactsData.phone}
          </div>
        </div>
        <div className="border border-red-200 flex flex-col gap-y-2 py-4  items-start   pl-6">
          <div className="flex flex-row gap-x-4 items-center">
            <div>
              <img src={email} className="w-10 h-10" />
            </div>
            <div className=" text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
              EMail
            </div>
          </div>
          <div className=" text-orange-950 text-lg font-normal font-['Epilogue'] pl-2 leading-loose">
            {contactsData.email}
          </div>
        </div>
        <div className="border border-red-200 flex flex-col gap-y-2 py-4  items-start  pl-6">
          <div className="flex flex-row gap-x-4 items-center">
            <div>
              <img src={address} className="w-10 h-10" />
            </div>
            <div className=" text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px] pl-2">
              Address
            </div>
          </div>
          <div className=" text-orange-950 text-lg font-normal font-['Epilogue'] leading-loose">
            {contactsData.address}
          </div>
        </div>
      </div>
    </div>
  );
}

export default C_page;
