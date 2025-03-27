"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./heroSlider.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import Button from "../Button/Button";
import _ from "lodash"; // Import Lodash

export default function HeroSlider({ slides, sliderBtn, timeline = false }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  // Timeline data (you can pass this as a prop if needed)
  const timelineData = [
    { year: 1937 },
    { year: 1983 },
    { year: 1990 },
    { year: 1993 },
    { year: 2016 },
  ];
  const timelineheadings = [
    "Our Legacy",
    "Our Vision and Mission",
    "Business",
    "Global Reach",
    "Financial",
    "Certifications",
    "Sustainability",
    "Career",
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex + 1);
  };

  const goNext = () => nextRef.current?.slideNext();
  const goPrev = () => prevRef.current?.slidePrev();
  const goToSlide = (index) => swiperRef.current?.slideToLoop(index);

  return (
    <div className="hero-slider relative w-full h-screen">
      {!_.isEmpty(slides) && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            prevRef.current = swiper;
            nextRef.current = swiper;
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
        >
          {_.map(slides, (slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {_.get(slide, "videoMedia", false) ? (
                  <div className="video-container absolute w-full h-screen">
                    <div className="absolute w-full h-full bg-black/50" />
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                      id="myVideo"
                      autoPlay
                      preload="none"
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src={_.get(slide, "videoMedia[0].url", "")}
                        type="video/mp4"
                      />
                      <source
                        src={_.get(slide, "videoMedia[0].url", "")}
                        type="video/webm"
                      />
                      <source
                        src={_.get(slide, "videoMedia[0].url", "")}
                        type="video/ogv"
                      />
                    </video>
                  </div>
                ) : (
                  <div className="absolute w-full h-full">
                    <div className="absolute w-full h-full bg-black/50" />
                    <img
                      src={_.get(slide, "image", "/default-image.jpg")}
                      alt="slide image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <MaxWidthContainer className="z-20 w-full h-screen grid grid-cols-1 md:grid-cols-2 place-items-center bg-cover bg-center">
                  <div className="text-white max-w-[480px] justify-self-start flex flex-col justify-between h-[300px] z-10">
                    <h2 className="md:text-[40px] md:leading-[48px] leading-[40px] text-[32px]">
                      {_.get(slide, "title", "Default Title")}
                    </h2>
                    <img
                      src="/assets/icon/separator-icon.png"
                      alt="separator"
                      className="w-full max-w-[111px] md:max-w-[222px] my-4"
                    />
                    <p className="text-[20px] leading-[28px] md:leading-[32px] mb-10 md:mb-12">
                      {_.get(slide, "description", "Default Description")}
                    </p>
                    <Button
                      title={_.get(slide, "cta.title", "Learn More")}
                      className="font-coconat text-base leading-[24px] md:text-lg"
                    />
                  </div>
                </MaxWidthContainer>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Custom Navigation Buttons */}
      {sliderBtn && (
        <MaxWidthContainer className="relative">
          <div className={`${!timeline ? "bottom-5" : "bottom-20"} absolute md:max-w-[400px] max-md:max-w-[343px] max-sm:max-w-[288px] w-full flex flex-col space-x-4 z-10`}>
            <div className="flex justify-between items-center w-full">
              <div className="text-white text-lg md:text-2xl">
                {activeIndex} of {_.size(slides)}
              </div>
              <div className="flex gap-2 mb-2">
                <button
                  onClick={goPrev}
                  className="w-8 h-8 border-2 border-white p-2 rounded-full cursor-pointer"
                >
                  <img
                    src="/assets/icon/arrow_backward.png"
                    alt="previousImage"
                  />
                </button>
                <button
                  onClick={goNext}
                  className="w-8 h-8 border-2 border-white p-2 rounded-full cursor-pointer"
                >
                  <img
                    src="/assets/icon/arrow_forward.png"
                    alt="forwordImage"
                  />
                </button>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="h-1 bg-gray-400/50">
              <div
                className="absolute left-0 bottom-0 h-1 bg-white transition-all duration-500"
                style={{ width: `${(activeIndex / _.size(slides)) * 100}%` }}
              ></div>
            </div>
          </div>
        </MaxWidthContainer>
      )}

      {!timeline && (
        <MaxWidthContainer className="relative max-md:hidden">
          <div className="absolute bottom-[50vh] translate-y-1/2 right-0 flex flex-col z-10">
            <div className="flex flex-col space-y-2">
              {_.map(slides, (_, index) => (
                <button
                  key={index}
                  className={`w-0.5 h-10 cursor-pointer ${
                    activeIndex === index + 1 ? "bg-white" : "bg-white/20"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </MaxWidthContainer>
      )}
      {timeline && (
        <MaxWidthContainer className="relative max-md:hidden">
          <div className="absolute bottom-[50vh] translate-y-1/2 right-0 flex flex-col z-10">
            <div className="flex flex-col space-y-2">
              {_.map(timelineheadings, (tag, index) => (
                <div
                  key={index}
                  className="text-white border-2 rounded-lg px-2 py-1 bg-black/40 first:bg-red-800/40 first:border-red-800"
                >
                  {tag}
                </div>
                // <button
                //   key={index}
                //   className={`w-0.5 h-10 cursor-pointer ${
                //     activeIndex === index + 1 ? "bg-white" : "bg-white/20"
                //   }`}
                //   onClick={() => goToSlide(index)}
                // />
              ))}
            </div>
          </div>
        </MaxWidthContainer>
      )}

      {/* Timeline Section */}
      {timeline && (
        <MaxWidthContainer className="relative">
          <div className="absolute bottom-5 w-[97%] flex justify-between items-center z-10">
            <div className="flex items-center w-full">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center flex-1 last:flex-none"
                >
                  {/* Dot and Year */}
                  <div
                    className="cursor-pointer flex items-center gap-2 justify-center"
                    onClick={() => goToSlide(index)}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center transition-colors duration-300 ${
                        activeIndex === index + 1 ? "bg-white" : "bg-gray-400"
                      }`}
                    >
                      {activeIndex === index + 1 && (
                        <div className="w-3 h-3 rounded-full bg-black" />
                      )}
                    </div>
                    <span
                      className={`${
                        activeIndex === index + 1 ? "scale-150" : ""
                      } transition-all duration-700 text-white text-sm`}
                    >
                      {item.year}
                    </span>
                  </div>
                  {/* Connecting Line (not for the last item) */}
                  {index < timelineData.length - 1 && (
                    <div
                      className={`flex-1 h-1 transition-all duration-700 rounded-full overflow-hidden bg-white/50 mx-2 ${
                        activeIndex === index + 1 ? " h-1" : ""
                      }`}
                    >
                      <div
                        className={`h-1 transition-all duration-700 w-0 ${
                          activeIndex === index + 1 ? "bg-white w-full " : " "
                        }`}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </MaxWidthContainer>
      )}
    </div>
  );
}
