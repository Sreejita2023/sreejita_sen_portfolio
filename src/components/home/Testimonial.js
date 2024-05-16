import React from "react";
import Slider from "react-slick";
import blur from "../../assests/education/blur-23.svg";
import { testimonialsData } from "../../utils/data/testimonialsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Testimonial() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const settings = {
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 800,
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
    <div className="bg-slate-800 left-0 right-0 flex flex-col relative  z-10 px-4 pb-14 pt-8 ">
      <div className="w-10/12 border border-white border-opacity-30 self-center mb-2"></div>
      <div className="flex flex-col items-center justify-center">
        <div className="md:w-8/12 w-10/12">
          <div className="LatestWork  text-white text-[30px] font-extrabold font-['Epilogue'] leading-[64px] mb-2 text-center">
            Testimonials
          </div>

          <Slider {...settings}>
            {testimonialsData.map((d) => (
              <div
                key={d.name}
                className="p-3 relative text-white border-2 rounded-3xl  border-white border-opacity-10  "
              >
                <img
                  src={blur}
                  alt="Hero"
                  width={1080}
                  height={200}
                  className="absolute bottom-0  opacity-80"
                />
                <div className="  flex justify-center items-center rounded-t-xl">
                  <img
                    src={d.image}
                    alt=""
                    className="h-20 w-20 rounded-full"
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className=" text-[#8B5BF6] text-base">{d.title}</p>
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
  );
}
export default Testimonial;
