import React from "react";
import _get from "lodash/get";
import TabView from "../TabView/TabView";
import CardWithDescription from "../Cards/CardWithDescription";

const LatestSection = ({ latestSectionData }) => {
  const { newsTeaser, socialTeaser } = latestSectionData;
  return (
    <div className="space-y-6">
      <h1 className="text-[24px] leading-[24px] md:text-[32px] md:leading-[40px] uppercase font-[400] text-red-700 text-left">
        {_get(latestSectionData, "heading", "")}
      </h1>
      <TabView newsTeaser={newsTeaser} />
      <div className="grid lg:grid-cols-2 gap-6">
        {_.map(socialTeaser, (socialData) => (
          <CardWithDescription
            key={_get(socialData, "id")}
            name={_get(socialData, "title", "")}
            logo={_get(socialData, "Icon.url", "")}
            title={_get(socialData, "description", "")}
            productImageDesktop={_get(socialData, "image.url", "")}
            productImageMobile={_get(socialData, "image.url", "")}
            cta={_get(socialData, "cta", "")}
            hasGradient={true}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestSection;
