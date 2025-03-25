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

export default function HeroSlider({ slides, sliderBtn }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex + 1);
  };

  const goNext = () => {
    if (nextRef.current) nextRef.current.slideNext();
  };

  const goPrev = () => {
    if (prevRef.current) prevRef.current.slidePrev();
  };

  const goToSlide = (index) => {
    if (swiperRef.current) swiperRef.current.slideToLoop(index);
  };

  return (
    <div className="hero-slider relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (
          (prevRef.current = swiper),
          (nextRef.current = swiper),
          (swiperRef.current = swiper)
        )}
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {slide?.videoMedia ? (
                <div className="video-container absolute w-full h-screen">
                  <div className="absolute w-full h-full bg-black/50" />
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    id="myVideo"
                    autoPlay
                    preload="none"
                    loop
                    muted={true}
                    playsInline
                  >
                    <source src={slide?.videoMedia[0]?.url} type="video/mp4" />
                    <source src={slide?.videoMedia[0]?.url} type="video/webm" />
                    <source src={slide?.videoMedia[0]?.url} type="video/ogv" />
                  </video>
                </div>
              ) : (
                <div className="absolute w-full h-full">
                  <div className="absolute w-full h-full bg-black/50" />
                  <img
                    src={slide.image}
                    alt="slide image"
                    className="w-full h-full"
                  />
                </div>
              )}
              <MaxWidthContainer
                className={
                  "z-20 w-full h-screen grid grid-cols-1 md:grid-cols-2 place-items-center bg-cover bg-center"
                }
              >
                <div className="text-white max-w-[480px] justify-self-start flex flex-col justify-between h-[400px] z-10">
                  <h2 className="md:text-[40px] md:leading-[48px] leading-[40px] text-[32px]">
                    {slide?.title}
                  </h2>
                  <img
                    src="/assets/icon/separator-icon.png"
                    alt=""
                    className="w-full max-w-[111px] md:max-w-[222px] my-4"
                  />
                  <p className="text-[20px] leading-[28px] md:leading-[32px] mb-10 md:mb-12">
                    {slide?.description}
                  </p>
                  <Button
                    title={slide?.cta?.title}
                    className={
                      "font-coconat text-base leading-[24px] md:text-lg"
                    }
                  />
                </div>
              </MaxWidthContainer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      {sliderBtn && (
        <MaxWidthContainer className={"relative"}>
          <div className="absolute bottom-5 md:max-w-[400px] max-md:max-w-[343px] w-full flex flex-col space-x-4 z-10">
            <div className="flex justify-between items-center">
              <div className="text-white text-lg md:text-2xl">
                {activeIndex} of {slides.length}
              </div>
              <div className=" flex gap-2 mb-2">
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
            <div className="relative w-full h-1 bg-gray-400/50">
              <div
                className="absolute left-0 top-0 h-full bg-white transition-all duration-500"
                style={{ width: `${(activeIndex / slides.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </MaxWidthContainer>
      )}
      {sliderBtn && (
        <MaxWidthContainer className={"relative max-md:hidden"}>
          <div className="absolute bottom-[50vh] translate-y-1/2 right-0 flex flex-col z-10">
            <div className="flex flex-col space-y-2">
              {slides.map((_, index) => (
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
      {/* Pagination Dots */}
      {/* <MaxWidthContainer className={"relative"}>
        <div className="absolute bottom-10 left-0 space-x-4 z-20">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  activeIndex === index + 1 ? "bg-white" : "bg-red-500"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </MaxWidthContainer> */}
    </div>
  );
}
