"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Button from "../Button/Button";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

const BrandsSlider = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[90vh] text-white">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        spaceBetween={10}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={item.bannerImg}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <MaxWidthContainer className="absolute inset-0">
              <div>
                <div className="text-white max-w-[500px] flex flex-col justify-end h-[300px] gap-6">
                  <span className="text-2xl mb-4">{item.title}</span>
                  <img src={item.image} alt={item.title} className="w-fit" />
                  <h3 className="mb-4 w-fit text-4xl font-coconat">
                    {item.description}
                  </h3>
                  <Button title="View All" className="font-coconat" />
                </div>
              </div>
            </MaxWidthContainer>
          </SwiperSlide>
        ))}
      </Swiper>
      <MaxWidthContainer  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 w-full flex items-center justify-between">
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 w-full flex items-center justify-between"> */}
          <button className="custom-prev w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-black/50 border-2 border-white text-white rounded-full z-20">
            ❮
          </button>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={15}
            slidesPerView={3}
            breakpoints={{ 1024: { slidesPerView: 7 } }}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper w-full sm:w-2/3 overflow-hidden"
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="cursor-pointer transition-opacity duration-300"
              >
                <img
                  src={item.innerSliderImg}
                  alt={`Thumb ${index + 1}`}
                  className={`w-full h-full object-cover rounded-xl border-3 transition ${
                    activeIndex === index
                      ? "border-[#E1251B] opacity-100"
                      : "border-transparent opacity-90"
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-next w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-black/50 border-2 border-white text-white rounded-full z-20">
            ❯
          </button>
        {/* </div> */}
      </MaxWidthContainer>
    </div>
  );
};

export default BrandsSlider;
