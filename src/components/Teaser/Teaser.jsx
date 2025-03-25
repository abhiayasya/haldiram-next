import React from "react";
import Button from "../Button/Button";

const Teaser = ({ data, overlayTeaser }) => {
  return (
    <>
      <section
        className="relative w-full  min-h-screen bg-cover bg-no-repeat bg-center flex items-end justify-center text-white"
        style={{ backgroundImage: `url(${data?.image[0]?.url})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div
          className={`relative z-10 flex flex-col justify-center items-center gap-y-4 md:px-10 pb-10 md:p-12 ${
            overlayTeaser ? "max-w-[336px] md:max-w-[600px]" : "max-w-[950px]"
          }`}
        >
          <h1 className="text-[32px] leading-[40px] md:text-[48px] md:leading-[64px] text-center tracking-[0]">
            {data?.title}
          </h1>

          <img src="/assets/icon/separator-icon.png" alt="" className="max-w-[111px] w-full md:w-full" />

          <p className="text-center text-[20px] leading-[28px] md:text-[20px] md:leading-[32px] text-white mb-6 md:mb-8">
            {data?.description}
          </p>

          <Button className={"text-base  leading-[24px]"} title={data?.cta?.title}/>
        </div>
      </section>
    </>
  );
};

export default Teaser;
