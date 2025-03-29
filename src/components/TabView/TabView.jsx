"use client";
import React, { useState } from "react";
import _get from "lodash/get";
import _isArray from "lodash/isArray";
import _map from "lodash/map";
import Button from "../Button/Button";

const TabView = ({ newsTeaser }) => {
  const safeNewsTeaser = _isArray(newsTeaser) ? newsTeaser : [];

  const [selectedNews, setSelectedNews] = useState(
    _get(safeNewsTeaser, "[0]", {})
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 border border-gray-200 rounded-[20px] overflow-hidden h-full">
      {/* Featured News */}
      <div className="md:border border-b border-gray-200 bg-white overflow-hidden flex flex-col sm:flex-row lg:col-span-2">
        <div className="w-full md:w-1/2">
          <img
            src={_get(selectedNews, "image[0].url", "/default.jpg")}
            alt="Featured News"
            className="w-full h-full"
          />
        </div>
        <div className="px-4 pt-8 pb-10 md:w-1/2 h-full flex flex-col justify-between">
          <div className="space-y-4 mb-10">
            <h3 className="text-sm leading-[20px] pb-2 text-[#9c6f4d]">
              {_get(selectedNews, "tag", "")}
            </h3>
            <p className="text-[20px] leading-[28px] font-medium md:text-[32px] md:leading-[40px] font-satoshi">
              {_get(selectedNews, "title", "")}
            </p>
            <p className="text-sm leading-[20px] font-satoshi text-[#0000008F]">
              {_get(selectedNews, "description", "")}
            </p>
          </div>
          <div className="flex flex-col h-full justify-end">
            {selectedNews?.cta?.title && (
              <Button
                title={_get(selectedNews, "cta.title", "Explore All")}
                className="text-white"
                url={_get(selectedNews, "cta.url", "#")}
              />
            )}
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
              src={_get(news, "image[0].url", "/default.jpg")}
              alt={_get(news, "title", "News Image")}
              className="max-w-[88px] w-full aspect-square object-cover"
            />
            <div className="flex flex-col justify-between pt-2.5">
              <h4 className="text-sm leading-[20px] font-satoshi">
                {_get(news, "title", "Untitled News")}
              </h4>
              <p className="text-[#0000008F] text-[10px] leading-[16px]">
                {_get(news, "description", "No description available.")}
              </p>
            </div>
          </div>
        ))}
        <div className="py-6 px-4 bg-[#F7EBE1]">
          <button
            className={`flex items-center gap-3 font-coconat text-lg font-medium hover:opacity-80 transition-all cursor-pointer w-fit`}
          >
            <span className=" flex gap-4 items-center">
              {"View All"}
              <img
                src={"/assets/icon/ctaIconColor.png"}
                className=" w-8 h-8"
                alt="image"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabView;
