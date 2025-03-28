"use client";
import React from "react";
import { get } from "lodash";

const ExperienceSection = ({ data }) => {
  const experienceTitle = get(data, "teaser.title", "0 EXPERIENCE");
  const [numberPart, textPart] = experienceTitle.split(" ") || [
    "0",
    "EXPERIENCE",
  ];

  return (
    <div className="flex flex-col gap-6 lg:flex-row items-center">
      <div className="card-img lg:w-[30%] w-full flex flex-row lg:flex-col rounded-[20px] overflow-hidden">
        <img
          src={"/assets/revenue1.png"}
          alt="Experience Image"
          className="w-[40%] object-cover md:w-full max-md:aspect-square"
        />
        <div className="bg-primary text-white py-4 px-3 md:py-[42px] md:px-[32px]">
          <div className="mb-2 md:mb-6">
            <h3 className="text-[32px] leading-[32px] font-coconat md:text-[80px] md:leading-[88px]">
              {numberPart}
            </h3>
            <span className="text-base leading-[24px] md:text-[24px] md:leading-[32px] font-satoshi tracking-[5.12px] md:tracking-[6px]">
              {textPart?.toUpperCase()}
            </span>
          </div>
          <p className="text-[12px] leading-[18px] md:text-base md:leading-[24px] font-satoshi">
            {get(data, "teaser.description", "No description available")}
          </p>
        </div>
      </div>

      <div className="lg:w-2/3 px-2 grid grid-cols-1 md:grid-cols-2">
        {get(data, "metricSection", []).map((revenue, index) => {
          const experienceTitle = get(revenue, "title", "0 METRIC");
          const [numberPart, textPart] = experienceTitle.split(" ") || [
            "0",
            "METRIC",
          ];
          return (
            <div
              className="space-y-4 md:space-y-6 py-3 pr-2 md:py-[62px] md:px-[38px] border-b-[1px] border-black/40 last:border-0 md:nth-last-[2]:border-0"
              key={index}
            >
              <div className="space-y-2">
                <h3 className="font-coconat text-base leading-[48px] md:text-[24px] md:leading-[64px]">
                  <span className="text-[40px] leading-[48px] md:text-[56px] md:leading-[64px]">
                    {numberPart}
                  </span>
                  {textPart}
                </h3>
                <span className="text-base leading-[24px] tracking-[5.12px] md:text-[20px] md:leading-[32px] md:tracking-[6px]">
                  {get(revenue, "subTitle", "No Subtitle")}
                </span>
              </div>
              <p className="text-sm leading-[20px] font-[300] md:text-base md:leading-[24px]">
                {get(revenue, "description", "No description available")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
