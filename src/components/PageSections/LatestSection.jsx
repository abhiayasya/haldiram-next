import React from "react";
import _ from "lodash";
import TabView from "../TabView/TabView";
import CardWithDescription from "../Cards/CardWithDescription";

const LatestSection = ( { latestSectionData } ) => {
  const { newsTeaser, socialTeaser } = latestSectionData;
  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-[400] text-red-700 text-left">
        {_.get(
          latestSectionData,
          "data.latestSection.heading",
          "Latest on Haldiram"
        )}
      </h1>

      <TabView newsTeaser={newsTeaser} />
      <div className="grid lg:grid-cols-2 gap-6">
        {_.map(socialTeaser, (socialData) => (
          <CardWithDescription
            key={_.get(socialData, "id", _.uniqueId("social_"))}
            name={_.get(socialData, "title", "Default Title")}
            logo={_.get(socialData, "Icon.url", "/default-image.jpg")}
            title={_.get(socialData, "description", "No description available")}
            productImageDesktop={_.get(
              socialData,
              "image.url",
              "/default-image.jpg"
            )}
            productImageMobile={_.get(
              socialData,
              "image.url",
              "/default-image.jpg"
            )}
            cta={_.get(socialData, "cta", "View All")}
            hasGradient={true}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestSection;
