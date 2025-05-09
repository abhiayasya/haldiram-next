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

export default function HeroSlider({ slides, sliderBtn }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

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
                      src={_.get(slide, "image[0].url")}
                      alt="slide image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <MaxWidthContainer className="z-20 w-full h-screen grid grid-cols-1 md:grid-cols-2 place-items-center bg-cover bg-center">
                  <div className="text-white max-w-[480px] justify-self-start flex flex-col h-[400px] z-10">
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
                    {slide?.cta?.title && (
                      <Button
                        title={_.get(slide, "cta.title", "")}
                        icon={slide?.cta?.Icon}
                        url={slide?.cta?.url}
                        className="font-coconat text-base leading-[24px] md:text-lg"
                      />
                    )}
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
          <div className="absolute max-md:bottom-20 bottom-5 md:max-w-[400px] max-md:max-w-[343px] max-sm:max-w-[288px] w-full flex flex-col space-x-4 z-10">
            <div className="flex justify-between items-center w-full">
              <div className="text-white/80 text-base leading-[24px]">
                <span className="text-[20px] text-white leading-[24px]">
                  {activeIndex}
                </span>{" "}
                of {_.size(slides)}
              </div>
              <div className="flex gap-2 mb-2">
                <button
                  disabled={activeIndex == 1}
                  onClick={goPrev}
                  className={`w-8 h-8 border-[0.69px] ${
                    activeIndex == 1 ? "border-white/40" : "border-white"
                  }  p-2 rounded-full cursor-pointer`}
                >
                  <img
                    src="/assets/icon/arrow_backward.png"
                    alt="previousImage"
                  />
                </button>
                <button
                  disabled={activeIndex == slides.length}
                  onClick={goNext}
                  className={`w-8 h-8 border-[0.69px] ${
                    activeIndex == slides.length
                      ? "border-white/40"
                      : "border-white"
                  } p-2 rounded-full cursor-pointer`}
                >
                  <img
                    src="/assets/icon/arrow_forward.png"
                    alt="forwordImage"
                  />
                </button>
              </div>
            </div>
            {/* Progress Bar */}
            <div className=" h-0.5 bg-gray-400/50">
              <div
                className="absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-500"
                style={{ width: `${(activeIndex / _.size(slides)) * 100}%` }}
              ></div>
            </div>
          </div>
        </MaxWidthContainer>
      )}
    </div>
  );
}
