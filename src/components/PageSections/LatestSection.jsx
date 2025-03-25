import React from "react";
import TabView from "../TabView/TabView";
import CardWithDescription from "../Cards/CardWithDescription";

const LatestSection = ({ latestSectionData, socialMediaData }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-[400] text-red-700 text-left">
        {latestSectionData?.heading}
      </h1>
      <TabView newsTeaser={latestSectionData?.newsTeaser} />
      <div className="grid lg:grid-cols-2 gap-6 ">
        {latestSectionData?.socialTeaser?.map((socialData, index) => (
          <CardWithDescription
            key={socialData?.id}
            name={socialData?.title}
            title={socialData?.description}
            // logo={"/assets/instagram.png"}
            productImageDesktop={socialData?.image[0]?.url} 
            productImageMobile={socialData?.image[0]?.url} 
            buttonText="View All"
            hasGradient={true}
          />
         
        ))}
      </div>
    </div>
  );
};

export default LatestSection;
