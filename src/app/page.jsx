import MaxWidthContainer from "@/components/MaxWidthContainer/MaxWidthContainer";
import CareersSection from "@/components/PageSections/CareersSection";
import ExperienceSection from "@/components/PageSections/ExperienceSection";
import LatestSection from "@/components/PageSections/LatestSection";
import BrandsSlider from "@/components/Slider/BrandsSlider";
import HeroSlider from "@/components/Slider/HeroSlider";
import Teaser from "@/components/Teaser/Teaser";
import { fetchHomePageData } from "@/service/homePage.service";

export default async function Home() {
  const homePageData = await fetchHomePageData();
  return (
    <>
      <HeroSlider slides={homePageData?.heroBanner} sliderBtn={true} />
      <MaxWidthContainer className={"py-20 md:py-[100px] "}>
        <LatestSection latestSectionData={homePageData?.latestSection} />
      </MaxWidthContainer>
      <Teaser data={homePageData?.legacyTeaser} overlayTeaser={true} />
      <MaxWidthContainer className={"py-20"}>
        <ExperienceSection data={homePageData?.achievementSection} />
      </MaxWidthContainer>
      <BrandsSlider data={homePageData?.brandSection} />
      <MaxWidthContainer className={"py-20"}>
        <CareersSection data={homePageData?.carrersSection} />
      </MaxWidthContainer>
    </>
  );
}
