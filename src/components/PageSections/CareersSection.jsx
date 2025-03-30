"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button/Button";
import _get from "lodash/get";

const CareersSection = ({ careersSection }) => {
  const { heading, slider, numberTeaser, socialTeaser, carrerTeaser } =
    careersSection;
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = _get(slider, "slide.length", 0);
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
      <h2 className="text-[24px] md:text-[32px] md:leading-[40px] leading-[24px] uppercase font-coconat mb-6 text-primary">
        {heading}
      </h2>

      {/* Responsive Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6">
        {/* Opportunities Card */}
        <div
          className="lg:col-span-2 flex flex-col px-4 py-6 md:px-6 text-white rounded-[20px] max-md:h-[400px] bg-no-repeat bg-cover bg-center md:bg-[left_top] relative overflow-hidden "
          style={{
            backgroundImage: `linear-gradient(44deg, rgba(28,0,0,1) 10%, rgba(28,0,0,0.008) 80%, rgba(28,0,0,0.01) 100%), url(${_.get(
              carrerTeaser,
              "image[0].url",
              ""
            )})`,
          }}
        >
          <div className="max-w-1/2 md:max-w-[357px] w-full">
            <p className="text-base leading-[24px] mb-8 font-coconat">
              {_get(carrerTeaser, "tag", "")}
            </p>
            <h3 className="text-[24px] md:text-[32px] md:leading-[40px] leading-[32px] font-coconat">
              {_get(carrerTeaser, "title", "")}
            </h3>
            <img
              className="max-w-[111px] md:max-w-[222px] w-full my-4"
              src={"/assets/images/opertunitySmallImage.png"}
              alt="Opportunity Icon"
            />
            <p className="text-lg leading-[24px] md:text-[20px] md:leading-[32px] md:mb-[42px] font-satoshi">
              {_get(carrerTeaser, "description", "")}
            </p>
          </div>
          <div className="flex flex-col h-full justify-end">
            {carrerTeaser?.cta?.title && (
              <Button
                title={_get(carrerTeaser, "cta.title", "Explore All")}
                className="text-white"
                icon={carrerTeaser?.cta?.Icon}
                url={_get(carrerTeaser, "cta.url", "#")}
              />
            )}
          </div>
        </div>

        {/* Right Section - Beware Card */}
        <div className="lg:row-span-2 bg-white rounded-[20px] max-sm:min-h-[480px] shadow-lg w-full overflow-hidden sm:flex lg:grid lg:grid-rows-2">
          <div className="scammer-image sm:w-1/3 lg:w-full">
            <img
              src={_get(socialTeaser, "image.url", "")}
              alt="Beware Image"
              className="w-full h-full max-sm:max-h-[197px] md:max-h-[402px] md:object-cover object-none"
            />
          </div>
          <div className="py-6 px-4 flex flex-col justify-between sm:w-2/3 lg:w-full">
            <div className="flex flex-col">
              <p className="text-[16px] leading-[24px] font-coconat mb-6">
                {_get(socialTeaser, "tag", "")}
              </p>
              <div className="flex items-center  mb-4 gap-4">
                <h3 className="text-[24px] leading-[32px] font-coconat">
                  {_get(socialTeaser, "title", "")}
                </h3>
                <img
                  src={_get(socialTeaser, "Icon.url", "img")}
                  width={_get(socialTeaser, "Icon.width", "24")}
                  alt=""
                />
              </div>
              <p className="text-[20px] leading-[25px] font-satoshi mb-10 whitespace-pre-line">
                {_get(socialTeaser, "description", "")}
              </p>
            </div>
            <div className="flex flex-col h-full justify-end">
              {socialTeaser?.cta?.title && (
                <Button
                  title={_get(socialTeaser, "cta.title", "View All")}
                  className=""
                  icon={socialTeaser?.cta?.Icon}
                  url={_get(socialTeaser, "cta.url", "#")}
                />
              )}
            </div>
          </div>
        </div>

        {/* Jobs Card */}
        <div className="bg-primary text-white p-6 rounded-[20px] shadow-lg px-4 py-6">
          <p className="text-base leading-[24px] font-coconat mb-6">
            {slider?.tag}
          </p>
          <div className="flex flex-col">
            <div className="mb-10">
              <div className="flex justify-between items-center mb-[38px]">
                <span className="text-[24px] leading-[32px] font-medium font-coconat">
                  {slider?.title}
                </span>
                <div className="flex justify-between gap-1 w-24 items-center mt-2">
                  <button
                    onClick={goPrev}
                    className="text-white border border-white rounded-full p-1"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <p className="text-sm"><span className="text-xl">{`${currentSlide}`}</span>{` / ${totalSlides}`}</p>
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
                {slider?.slide?.map((jobGroup, index) => {
                  // Using _.map for iteration
                  const jobEntries = _.chain(jobGroup?.description) // Using Lodash chain
                    .split("\n")
                    .map((line) => _.trim(line))
                    .filter(Boolean)
                    .value();

                  const jobs = _.chunk(jobEntries, 2).map(
                    ([title, location]) => ({
                      title,
                      location: location || "",
                    })
                  );

                  return (
                    <SwiperSlide key={index}>
                      <div className="text-white p-2">
                        <ul className="list-disc list-outside pl-6">
                          {_.map(jobs, (job, jobIndex) => {
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
            <div className="flex flex-col h-full justify-end">
              {slider?.cta?.title && (
                <Button
                  title={_get(slider, "cta.title", "Expore All")}
                  className="text-white"
                  icon={slider?.cta?.Icon}
                  url={_get(slider, "cta.url", "#")}
                />
              )}
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-[#FAF6F0] rounded-[20px] shadow-lg px-4 py-6 flex flex-col items-center">
          <p className="text-base leading-[24px] font-coconat text-left w-full mb-10">
            {_get(numberTeaser, "tag", "")}
          </p>
          <img
            className="w-full max-w-[136px] mb-6"
            src={_get(numberTeaser, "image[0].url")}
            alt="Stats Image"
          />
          <h3 className="text-[48px] leading-[40px] font-coconat mb-6 text-primary">
            {_get(numberTeaser, "title")}
          </h3>
          <p className="text-[20px] leading-[24px] text-black font-medium font-satoshi max-w-[280px] w-full text-center">
            {_get(numberTeaser, "description", "")}
          </p>
        </div>
      </div>
    </>
  );
};

export default CareersSection;
