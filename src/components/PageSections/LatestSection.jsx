import React from "react";
import _ from "lodash"; // Import Lodash
import TabView from "../TabView/TabView";
import CardWithDescription from "../Cards/CardWithDescription";

const LatestSection = ({ latestSectionData }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-[400] text-red-700 text-left">
        {_.get(latestSectionData, "heading", "Latest Updates")}
      </h1>

      <TabView newsTeaser={_.get(latestSectionData, "newsTeaser", [])} />

      {!_.isEmpty(latestSectionData?.socialTeaser) && (
        <div className="grid lg:grid-cols-2 gap-6">
          {_.map(latestSectionData?.socialTeaser, (socialData) => (
            <CardWithDescription
              key={_.get(socialData, "id", _.uniqueId("social_"))}
              name={_.get(socialData, "title", "Default Title")}
              title={_.get(
                socialData,
                "description",
                "No description available"
              )}
              productImageDesktop={_.get(
                socialData,
                "image[0].url",
                "/default-image.jpg"
              )}
              productImageMobile={_.get(
                socialData,
                "image[0].url",
                "/default-image.jpg"
              )}
              buttonText="View All"
              hasGradient={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestSection;
