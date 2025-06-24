import React from "react";
import Slider from "react-slick";
import blur from "../../assests/education/blur-23.svg";
import { testimonialsData } from "../../utils/data/testimonialsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight,faLeftLong } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Testimonial() {
  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 1200,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    margin: 3,
    loop: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
  };
  return (
    <div className="bg-white left-0 right-0 flex flex-col relative  z-10 px-4 pb-28 pt-8 font-['Helvetica']">
      <div className="flex flex-col items-center justify-center">
        <div className="md:w-8/12 w-10/12">
          <div className="LatestWork  text-[#5928E5] text-[44px] uppercase font-extrabold leading-[64px] mb-2 text-center tracking-tighter">
            Testimonials
          </div>
          <div>
          <Slider {...settings}>
            {testimonialsData.map((d) => (
              <div
                key={d.name}
                className="p-8 relative mt-20 text-black bg-[#FFD9D9]  h-[400px] w-[300px] "
              >
                <div className="  flex justify-center items-center rounded-t-xl">
                  <img
                    src={d.image}
                    alt=""
                    className="h-20 w-20 rounded-full"
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-lg font-medium tracking-wide">{d.name}</p>
                  <p className=" text-[#5928E5] text-xl font-extrabold tracking-tighter text-center  uppercase">
                    {d.title}
                  </p>
                  <p className="text-center italic text-sm ">
                    <FontAwesomeIcon icon={faQuoteLeft} size="2x" /> {d.text}{" "}
                    <FontAwesomeIcon icon={faQuoteRight} size="2x" />
                  </p>
                  {/* <button className="bg-[#8B5BF6] text-white text-lg px-6 py-1 rounded-xl font-semibold cursor-pointer" onClick={() => openInNewTab(d.link)}>
                        Read More
                      </button> */}
                </div>
              </div>
            ))}
          </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
