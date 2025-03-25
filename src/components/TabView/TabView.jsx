"use client";
import React, { useState } from "react";
import _ from "lodash"; // Import Lodash
import Button from "../Button/Button";

const TabView = ({ newsTeaser }) => {
  // Ensure `newsTeaser` is a valid array
  const safeNewsTeaser = _.isArray(newsTeaser) ? newsTeaser : [];

  const [selectedNews, setSelectedNews] = useState(
    _.get(safeNewsTeaser, "[0]", {})
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 border border-gray-200 rounded-lg overflow-hidden h-full">
      {/* Featured News */}
      <div className="md:border border-b border-gray-200 bg-white overflow-hidden flex flex-col sm:flex-row lg:col-span-2">
        <div className="w-full md:w-1/2">
          <img
            src={_.get(selectedNews, "image[0].url", "/default.jpg")}
            alt="Featured News"
            className="w-full h-full"
          />
        </div>
        <div className="px-4 pt-8 pb-10 md:w-1/2 h-full">
          <div className="space-y-4 mb-10">
            <h3 className="text-sm leading-[20px] pb-2 text-[#9c6f4d]">
              {_.get(selectedNews, "tag", "No Category")}
            </h3>
            <p className="text-[20px] leading-[28px] font-medium md:text-[32px] md:leading-[40px] font-satoshi">
              {_.get(selectedNews, "title", "No Title Available")}
            </p>
            <p className="text-sm leading-[20px] font-satoshi text-[#0000008F]">
              {_.get(selectedNews, "description", "No description available.")}
            </p>
          </div>
          <div>
            <Button className={""} title={"Read More"} />
          </div>
        </div>
      </div>

      {/* Sidebar News List */}
      <div className="flex flex-col md:border-l border-gray-200 h-full flex-grow col-span-1">
        {_.map(safeNewsTeaser, (news, index) => (
          <div
            key={index}
            className="flex gap-2 p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedNews(news)}
          >
            <img
              src={_.get(news, "image[0].url", "/default.jpg")}
              alt={_.get(news, "title", "News Image")}
              className="max-w-[88px] w-full aspect-square object-cover"
            />
            <div className="flex flex-col justify-between pt-2.5">
              <h4 className="text-sm leading-[20px] font-satoshi">
                {_.get(news, "title", "Untitled News")}
              </h4>
              <p className="text-[#0000008F] text-[10px] leading-[16px]">
                {_.get(news, "description", "No description available.")}
              </p>
            </div>
          </div>
        ))}
        <div className="py-6 px-4 bg-[#F7EBE1]">
          <Button
            className={"font-coconat text-lg leading-[24px] text-[#8B5E3C] "}
            title={"View All"}
          />
        </div>
      </div>
    </div>
  );
};

export default TabView;
