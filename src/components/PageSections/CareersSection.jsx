"use client"
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {  ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button/Button";
// import Button from "./Button";

const CareersSection = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = data.jobs.length;
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex + 1);
  };

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <>
        <h2 className="text-xl font-semibold text-primary mb-4">CAREERS</h2>

        {/* Responsive Wrapper */}
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          {/* Left Section */}
          <div className="w-full lg:max-w-[70%]">
            {/* Opportunities Card */}
            <div
              className="p-6 text-white rounded-xl pb-8 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: `url(${data.opportunities.backgroundImage})`,
              }}
            >
              <div>
                <p className="text-base mb-4 md:mb-8">For Employee</p>
                <h3 className="text-2xl md:text-lg font-normal max-w-[280px] w-full">
                  {data.opportunities.title}
                </h3>
                <img
                  className="my-4 w-12 md:w-auto"
                  src={data.opportunities.icon}
                  alt="Opportunity Icon"
                />
                <p className="text-lg md:text-xl leading-7 md:leading-8 max-w-[357px] w-full font-light mb-6 md:mb-[42px]">
                  {data.opportunities.description}
                </p>
              </div>
              <Button
                title="Explore All"
                className="text-white"
                url={data.opportunities.link}
              />
            </div>

            {/* Jobs & Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Jobs Card */}
              <div className="bg-primary text-white p-6 rounded-[20px] shadow-lg">
                <p className="text-sm">Careers</p>
                <div className="flex flex-col justify-between h-full pb-6">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-normal mt-2">
                        Featured Jobs
                      </span>
                      <div className="flex justify-between gap-1 w-24 items-center mt-2">
                        <button
                          onClick={goPrev}
                          className="text-white border border-white rounded-full p-1"
                        >
                          <ChevronLeft size={12} />
                        </button>
                        <p className="text-sm">{`${currentSlide} / ${totalSlides}`}</p>
                        <button
                          onClick={goNext}
                          className="text-white border border-white rounded-full p-1"
                        >
                          <ChevronRight size={12} />
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
                      {data.jobs.map((jobGroup, index) => (
                        <SwiperSlide key={index}>
                          <div className="text-white p-2">
                            <ul className="list-disc list-inside marker:text-2xl marker:mr-0">
                              {jobGroup.map((job, jobIndex) => (
                                <li key={jobIndex} className="text-lg py-2">
                                  <span className="font-medium -ml-3">
                                    {job.title}
                                  </span>
                                  <p className="text-sm ml-5">{job.location}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <Button title="Explore All" className="text-white" />
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-[#FAF6F0] rounded-[20px] shadow-lg p-6 flex flex-col space-y-4 items-center justify-center">
                <p className="text-base text-black text-left w-full">
                  {data.stats.label}
                </p>
                <img
                  className="mb-4 w-20 md:w-auto"
                  src={data.stats.image}
                  alt="Stats Image"
                />
                <h3 className="text-xl md:text-3xl leading-8 md:leading-10 font-normal text-primary">
                  {data.stats.count}
                </h3>
                <p className="text-lg md:text-xl leading-5 md:leading-6 font-light text-center">
                  {data.stats.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Beware Card (Moves Below on Mobile) */}
          <div className="bg-white rounded-[20px] shadow-lg w-full lg:max-w-[30%]">
            <div className="scammer-image">
              <img
                src={data.beware.image}
                alt="Beware Image"
                className="w-full max-h-[300px] md:max-h-[402px] object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-xl md:text-2xl leading-7 md:leading-8 pb-4 md:pb-6">
                Careers
              </p>
              <h3 className="text-lg font-normal pb-4 md:pb-6">
                {data.beware.title}
              </h3>
              <p className="text-lg md:text-xl leading-6 font-light">
                {data.beware.description}
              </p>
              <Button title="Explore All Jobs" className="text-black" />
            </div>
          </div>
        </div>
    </>
  );
};

export default CareersSection;
