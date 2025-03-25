"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button/Button";
// import Button from "./Button";

const CareersSection = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = data?.slider?.length;
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper?.activeIndex + 1);
  };

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <>
      <h2 className="text-[24px] leading-[24px] uppercase font-coconat mb-6">
        {data?.heading}
      </h2>

      {/* Responsive Wrapper */}
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        {/* Left Section */}
        <div className="w-full lg:max-w-[70%]">
          {/* Opportunities Card */}
          <div
            className="flex flex-col px-4 py-6 md:px-6 text-white rounded-[20px] max-md:h-[400px] bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${data?.carrerTeaser[0]?.image[0]?.url})`,
            }}
          >
            <div className="max-w-1/2 md:max-w-[357px] w-full">
              <p className="text-base leading-[24px] mb-8 font-coconat">
                {data?.carrerTeaser[0]?.tag}
              </p>
              <h3 className="text-[24px] md:text-[32px] md:leading-[40px] leading-[32px] font-coconat">
                {data?.carrerTeaser[0]?.title}
              </h3>
              <img
                className="max-w-[111px] w-full my-4"
                src={"/assets/images/opertunitySmallImage.png"}
                alt="Opportunity Icon"
              />
              <p className="text-lg leading-[24px] md:text-[20px] md:leading-[32px] md:mb-[42px] font-satoshi">
                {data?.carrerTeaser[0]?.description}
              </p>
            </div>
            <div className=" flex flex-col h-full justify-end">
              <Button
                title="Explore All"
                className="text-white"
                url={data?.opportunities?.link}
              />
            </div>
          </div>

          {/* Jobs & Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Jobs Card */}
            <div className="bg-primary text-white p-6 rounded-[20px] shadow-lg px-4 py-6">
              <p className="text-base leading-[24px] font-coconat mb-6">
                Careers
              </p>
              <div className="flex flex-col">
                <div className="mb-10">
                  <div className="flex justify-between items-center mb-[38px]">
                    <span className="text-[24px] leading-[32px] font-medium font-coconat">
                      Featured Jobs
                    </span>
                    <div className="flex justify-between gap-1 w-24 items-center mt-2">
                      <button
                        onClick={goPrev}
                        className="text-white border border-white rounded-full p-1"
                      >
                        <ChevronLeft size={14} />
                      </button>
                      <p className="text-sm">{`${currentSlide} / ${totalSlides}`}</p>
                      <button
                        onClick={goNext}
                        className="text-white border border-white rounded-full p-1"
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={handleSlideChange}
                    className="mt-4"
                  >
                    {data?.slider?.map((jobGroup, index) => {
                    
                      const jobEntries = jobGroup?.description
                        ?.split("\n")
                        .map((line) => line.trim())
                        .filter((line) => line !== "");

                      const jobs = [];
                      for (let i = 0; i < jobEntries.length; i += 2) {
                        jobs.push({
                          title: jobEntries[i],
                          location: jobEntries[i + 1] || "", 
                        });
                      }
                      return (
                        <SwiperSlide key={index}>
                          <div className="text-white p-2">
                            <ul className="list-disc list-outside pl-6">
                              {jobs?.map((job, jobIndex) => {

                                return (
                                  <li key={jobIndex} className="mb-6 last:mb-0">
                                    <span className="text-[24px] leading-[24px] font-medium font-satoshi">
                                      {job?.title}
                                    </span>
                                    <p className="text-base leading-[24px] font-satoshi">
                                      {job?.location}
                                    </p>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <Button title="Explore All" className="text-white" />
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-[#FAF6F0] rounded-[20px] shadow-lg px-4 py-6 flex flex-col items-center">
              <p className="text-base leading-[24px] font-coconat  text-left w-full mb-10">
                {data?.carrerTeaser[1]?.tag}
              </p>
              <img
                className="w-full max-w-[136px] mb-6 "
                src={data?.carrerTeaser[1]?.image[0]?.url}
                alt="Stats Image"
              />
              <h3 className="text-[48px] leading-[40px] font-coconat mb-6 text-primary">
                {data?.carrerTeaser[1]?.title}
              </h3>
              <p className="text-[20px] leading-[24px] font-medium font-satoshi max-w-[280px] w-full text-center">
                {data?.carrerTeaser[1].description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Beware Card (Moves Below on Mobile) */}
        <div className="bg-white rounded-[20px] max-sm:min-h-[480px] shadow-lg w-full overflow-hidden lg:max-w-[30%] sm:flex lg:flex-col">
          <div className="scammer-image sm:w-1/3 lg:w-full">
            <img
              src={data?.carrerTeaser[2]?.image?.[0]?.url}
              alt="Beware Image"
              className="w-full h-full max-sm:max-h-[197px] md:max-h-[402px] object-cover"
            />
          </div>
          <div className="py-6 px-4 flex flex-col justify-between sm:w-2/3 lg:w-full">
            <div className="flex flex-col">
              <p className="text-[16px] leading-[24px] font-coconat mb-6">
                {data?.carrerTeaser[2]?.tag}
              </p>
              <h3 className="text-[24px] leading-[32px] mb-4 font-coconat">
                {data?.carrerTeaser[2]?.title}
              </h3>
              <p className="text-[20px] leading-[25px] font-satoshi mb-10">
                {data?.carrerTeaser[2]?.description}
              </p>
            </div>
            <div>
              <Button
                title="Explore All Jobs"
                className="text-black text-lg leading-[24px] font-coconat"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersSection;
