import MaxWidthContainer from "@/components/MaxWidthContainer/MaxWidthContainer";
import CareersSection from "@/components/PageSections/CareersSection";
import ExperienceSection from "@/components/PageSections/ExperienceSection";
import LatestSection from "@/components/PageSections/LatestSection";
import BrandsSlider from "@/components/Slider/BrandsSlider";
import HeroSlider from "@/components/Slider/HeroSlider";
import Teaser from "@/components/Teaser/Teaser";
import { fetchHomePageData } from "@/service/homePage.service";
import { ErrorMessage } from "@/components/ErrorMessage";
import _ from "lodash"; // Import Lodash

export default async function Home() {
  const homePageData = await fetchHomePageData();
  if (!homePageData) {
    return <ErrorMessage />;
  }
  // Use Lodash to safely extract data with defaults
  const heroBanner = _.get(homePageData, "heroBanner", []);
  const latestSectionData = _.get(homePageData, "latestSection", {});
  const legacyTeaser = _.get(homePageData, "legacyTeaser", {});
  const achievementSection = _.get(homePageData, "achievementSection", {});
  const brandSection = _.get(homePageData, "brandSection", {});
  const careersSection = _.get(homePageData, "carrersSection", {});

  return (
    <>
      <HeroSlider slides={heroBanner} sliderBtn={true} />
      <MaxWidthContainer className={"py-20 md:py-[100px]"}>
        <LatestSection latestSectionData={latestSectionData} />
      </MaxWidthContainer>
      <Teaser data={legacyTeaser} overlayTeaser={true} />
      <MaxWidthContainer className={"py-20"}>
        <ExperienceSection data={achievementSection} />
      </MaxWidthContainer>
      <BrandsSlider data={brandSection} />
      <MaxWidthContainer className={"py-20"}>
        <CareersSection data={careersSection} />
      </MaxWidthContainer>
    </>
  );
}
