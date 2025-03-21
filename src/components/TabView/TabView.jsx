"use client";
import React, { useState } from 'react'
import Button from '../Button/Button';

const TabView = ({data}) => {
  const [selectedNews, setSelectedNews] = useState(data[0]);
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-lg overflow-hidden h-full">
        {/* Featured News */}
        <div className="md:col-span-2 relative md:border border-b border-gray-200 bg-white overflow-hidden flex flex-col md:flex-row h-full">
          <div className="max-w-[343px] w-full md:max-w-[440px]">
            <img
              src={selectedNews.image}
              alt="Featured News"
              className="w-full"
            />
          </div>
          <div className="px-4 pt-8 pb-10">
            <div className="space-y-4 mb-10">
              <h3 className="text-sm leading-[20px] pb-2  text-[#9c6f4d]">
                {selectedNews.pretitle}
              </h3>
              <p className="text-[20px] leading-[28px] font-medium font-satoshi">
                {selectedNews.title}
              </p>
              <p className="text-sm leading-[20px] font-satoshi text-[#0000008F]">
                {selectedNews.date}
              </p>
            </div>
            <div>
              <Button className={""} title={"Read More"} />
            </div>
          </div>
        </div>

        {/* Sidebar News List */}
        <div className="flex flex-col md:border-l border-gray-200 h-full flex-grow">
          {data.slice(1).map((news, index) => (
            <div
              key={index}
              className="flex gap-2 p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedNews(news)}
            >
              <img
                src={news.image}
                alt={news.title}
                className="max-w-[88px] w-full aspect-square object-cover"
              />
              <div className="flex flex-col justify-between pt-2.5">
                <h4 className="text-sm leading-[20px] font-satoshi">
                  {news.title}
                </h4>
                <p className="text-[#0000008F] text-[10px] leading-[16px]">
                  {news.date}
                </p>
              </div>
            </div>
          ))}
          <div className="py-6 px-4 bg-[#F7EBE1]">
           <Button className={"font-coconat text-lg leading-[24px] text-[#8B5E3C] "} title={"View All"}/>
          </div>
        </div>
      </div>
  )
}

export default TabView
