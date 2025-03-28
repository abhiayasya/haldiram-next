import React from "react";
import _ from "lodash"; // Import Lodash
import TabView from "../TabView/TabView";
import CardWithDescription from "../Cards/CardWithDescription";

const LatestSection = ({ latestSectionData }) => {
  console.log(latestSectionData.data, "");
  const {  newsTeaser, socialTeaser } =
    latestSectionData?.data?.latestSection;
  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-[400] text-red-700 text-left">
        {_.get(latestSectionData, "data.latestSection.heading", "Latest on Haldiram")}
      </h1>

      <TabView newsTeaser={newsTeaser} />

      {!_.isEmpty(latestSectionData?.data?.latestSection?.socialTeaser) && (
        <div className="grid lg:grid-cols-2 gap-6">
          {_.map(latestSectionData?.data?.latestSection?.socialTeaser, (socialData) => (
            <CardWithDescription
              key={_.get(socialData, "id", _.uniqueId("social_"))}
              name={_.get(socialData, "title", "Default Title")}
              logo={_.get(socialData,"Icon.url", "/default-image.jpg")}
              title={_.get(
                socialData,
                "description",
                "No description available"
              )}
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
              buttonText={_.get(
                socialData,
                "cta.title",
                "View All"
              )}
              hasGradient={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestSection;
