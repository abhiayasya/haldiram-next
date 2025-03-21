import React from "react";
import TabView from "../TabView/TabView";
import CardWithDescription from "../Cards/CardWithDescription";

const LatestSection = ({ LatestSectionData,socialMediaData }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-[400] text-red-700 text-left">
        LATEST ON HALDIRAM
      </h1>
      <TabView data={LatestSectionData} />
      <div className="grid lg:grid-cols-2 gap-6 ">
        {socialMediaData.map((platform, index) => (
          <CardWithDescription
            key={index}
            {...platform}
            backgroundImage={true}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestSection;
