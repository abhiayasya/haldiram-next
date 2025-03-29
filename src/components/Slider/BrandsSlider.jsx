"use client";
import React, { useState } from "react";
import _get from "lodash/get";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Button from "../Button/Button";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

const BrandsSlider = ({ data = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full text-white max-md:h-screen">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        spaceBetween={10}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-full"
      >
        {data.length > 0 &&
          data.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={_get(item, "image[0].url", "/assets/default-image.jpg")}
                alt={_get(item, "title", "No Title Available")}
                className="w-full h-full object-cover"
              />
              <div className=" bg-gradient-to-t from-black to-transparent absolute top-0 left-0 w-full h-full "></div>
              <MaxWidthContainer className="absolute inset-0 z-10">
                <div className="flex items-center h-full">
                  <div className="text-white max-w-[500px] flex flex-col h-[300px] gap-4">
                    <span className="text-base leading-[24px] md:text-[20px] md:leading-[32px] font-[500]">
                      {_get(item, "tag", "No Tag")}
                    </span>
                    <img
                      src="/assets/images/opertunitySmallImage.png"
                      alt={_get(item, "title", "No Title Available")}
                      className="max-w-[111px] md:max-w-[222px] w-full"
                    />
                    <h3 className="text-[32px] leading-[40px] font-coconat mb-6 md:text-[40px] md:leading-[56px] md:mb-8">
                      {_get(item, "title", "No Title Available")}
                    </h3>
                    <div className="flex flex-col h-full justify-end">
                      {item?.cta?.title && (
                        <Button
                          title={_get(item, "cta.title", "Explore All")}
                          icon={item?.cta?.Icon}
                          className="text-white"
                          url={_get(item, "cta.url", "#")}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </MaxWidthContainer>
            </SwiperSlide>
          ))}
      </Swiper>

      <MaxWidthContainer className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 w-full flex items-center justify-between">
        <button className="cursor-pointer custom-prev w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-black/50 border-2 border-white text-white rounded-full z-20 max-md:mr-3 px-3">
          ❮
        </button>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={32}
          slidesPerView={3}
          breakpoints={{ 1024: { slidesPerView: 8 } }}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper w-full sm:w-[95%] sm:!ml-4 overflow-hidden"
        >
          {data.length > 0 &&
            data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="cursor-pointer transition-opacity duration-300 max-w-[80px] md:max-w-[120px]"
              >
                <img
                  src={_get(
                    item,
                    "image[0].url",
                    "/assets/default-thumbnail.jpg"
                  )}
                  alt={`Thumb ${index + 1}`}
                  className={`w-full h-full max-w-[80px] md:min-w-[100px] md:w-full object-cover rounded-xl aspect-square border-3 transition ${
                    activeIndex === index
                      ? "border-[#E1251B] opacity-100"
                      : "border-transparent opacity-90"
                  }`}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <button className="cursor-pointer custom-next w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-black/50 border-2 border-white text-white rounded-full z-20 max-md:ml-3 px-3">
          ❯
        </button>
      </MaxWidthContainer>
    </div>
  );
};

export default BrandsSlider;
