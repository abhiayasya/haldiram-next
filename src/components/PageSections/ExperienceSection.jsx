import React from "react";

const ExperienceSection = ({ data }) => {
  return (
    <div className="revenue-container flex flex-col md:flex-row items-center">
      <div className="card-img md:w-[22%] w-full flex flex-row md:flex-col max-md:rounded-md overflow-hidden">
        <img src={"/assets/revenue1.png"} alt="" className="md:max-w-[324px] w-[40%] object-cover md:w-full aspect-square" />
        <img src={"/assets/revenue2.png"} alt="" className="md:max-w-[324px] w-[60%] object-cover md:w-full aspect-square"/>
      </div>

      <div className="revenue-section md:w-[78%] md:mx-4 m-2 mt-6 md:p-5 grid grid-cols-1 md:grid-cols-2 gap-y-6 items-center ">
        {data.map((revenue, index) => (
          <div
            className="revenue-card md:nth-[1]:border-b md:nth-[2]:border-b border-gray-400 flex flex-col gap-y-2 md:nth-[1]:pb-8 md:nth-[2]:pb-8"
            key={index}
          >
            <div className="mb-2 space-y-2">
              <h3 className="font-light text-2xl uppercase tracking-wider">
                <span className="text-4xl font-normal">{revenue.supTag}</span>
                {revenue.tagline}
              </h3>
              <span className="text-xl font-normal tracking-widest">
                {revenue.title}
              </span>
            </div>
            <p className="text-gray-700 font-normal text-md max-w-[450px]">
              {revenue.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
