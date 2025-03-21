import MaxWidthContainer from "@/components/MaxWidthContainer/MaxWidthContainer";
import CareersSection from "@/components/PageSections/CareersSection";
import ExperienceSection from "@/components/PageSections/ExperienceSection";
import LatestSection from "@/components/PageSections/LatestSection";
import BrandsSlider from "@/components/Slider/BrandsSlider";
import HeroSlider from "@/components/Slider/HeroSlider";
import Teaser from "@/components/Teaser/Teaser";
import { bannerData, bannerSlider, careersData, homeSlides, latestNewsSection, revenueJson, socialMediaData } from "@/constant/global.constant";

export default function Home() {
  return (
    <>
      <HeroSlider slides={homeSlides} sliderBtn={true} />
      <MaxWidthContainer className={"py-20 md:py-[100px] "}>
        <LatestSection LatestSectionData={latestNewsSection} socialMediaData={socialMediaData} />
      </MaxWidthContainer>
      <Teaser data={bannerData} overlayTeaser={true} />
      <MaxWidthContainer className={"py-20"}>
        <ExperienceSection data={revenueJson}/>
      </MaxWidthContainer>
      <BrandsSlider data={bannerSlider} />
      <MaxWidthContainer className={"py-20"}>
        <CareersSection data={careersData} />
      </MaxWidthContainer>
    </>
  );
}
