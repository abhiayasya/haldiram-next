"use client";
import React from "react";
import Button from "../Button/Button";
import { get } from "lodash";

const Teaser = ({ data, overlayTeaser }) => {
  return (
    <section className="relative  w-full flex items-end justify-center text-white">
      <div className="absolute w-full h-full bg-radial from-[rgba(16,0,2,0.8)] to-[rgba(16,0,2,0.5)] z-20 top-0" />
      <img
        src={data?.mobileImage?.[0]?.url}
        alt=""
        className="w-full max-h-[812px]  sm:hidden"
      />
      <img
        src={data?.desktopImage?.[0]?.url}
        alt=""
        className="w-full h-full object-cover max-sm:hidden"
      />

      <div
        className={`absolute z-20 flex flex-col justify-center items-center gap-y-4 md:px-10 pb-10 md:p-12 ${
          overlayTeaser ? "max-w-[336px] md:max-w-[600px]" : "max-w-[950px]"
        }`}
      >
        <h1 className="text-[32px] leading-[40px] md:text-[48px] md:leading-[64px] text-center tracking-[0] max-md:uppercase max-md:px-5">
          {get(data, "title", "")}
        </h1>

        <img
          src="/assets/icon/separator-icon.png"
          alt="separator"
          className="max-w-[111px] md:max-w-[222px] w-full md:w-full"
        />

        <p className="text-center text-[20px] leading-[28px] md:text-[20px] md:leading-[32px] text-white mb-6 md:mb-8">
          {get(data, "description", "Default description text")}
        </p>
        <div className="flex flex-col h-full justify-end">
          {data?.cta?.title && (
            <Button
              title={_.get(data, "cta.title", "Explore All")}
              className="text-white"
              icon={cta?.Icon}
              url={_.get(data, "cta.url", "#")}
            />
          )}
        </div>
        {/* <Button
          className="text-base leading-[24px]"
          title={get(data, "cta.title", "Learn More")}
        /> */}
      </div>
    </section>
  );
};

export default Teaser;
