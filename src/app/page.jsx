import MaxWidthContainer from "@/components/MaxWidthContainer/MaxWidthContainer";
import CareersSection from "@/components/PageSections/CareersSection";
import ExperienceSection from "@/components/PageSections/ExperienceSection";
import LatestSection from "@/components/PageSections/LatestSection";
import BrandsSlider from "@/components/Slider/BrandsSlider";
import HeroSlider from "@/components/Slider/HeroSlider";
import Teaser from "@/components/Teaser/Teaser";
import { fetchHomePageData } from "@/service/homePage.service";
import { ErrorMessage } from "@/components/ErrorMessage";
import _ from "lodash";
import SectionTabs from "@/components/SectionTabs/SectionTabs";

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

  const SECTION_TABS = [
    { title: "Our Legacy", id: "ourlegacy" },
    { title: "Blogs and PR", id: "blogs" },
    { title: "Since 1937", id: "since1937" },
    { title: "Our Impact", id: "impact" },
    { title: "Our Brands", id: "brands" },
    { title: "Careers", id: "careers" },
  ];

  return (
    <div id="container">
      <SectionTabs SECTION_TABS={SECTION_TABS} />
      <section id="ourlegacy">
        <HeroSlider slides={heroBanner} sliderBtn={true} />
      </section>
      <section id="blogs">
        <MaxWidthContainer className={"py-20 md:py-[100px]"}>
          <LatestSection latestSectionData={latestSectionData} />
        </MaxWidthContainer>
      </section>
      <section id="since1937">
        <Teaser data={legacyTeaser} overlayTeaser={true} />
      </section>
      <section className="bg-white md:bg-[#FAF6F0]" id="impact">
        <MaxWidthContainer className={"py-20"}>
          <ExperienceSection data={achievementSection} />
        </MaxWidthContainer>
      </section>
      <section id="brands">
        <BrandsSlider data={brandSection} />
      </section>
      <section id="careers">
        <MaxWidthContainer className={"py-20"}>
          <CareersSection careersSection={careersSection} />
        </MaxWidthContainer>
      </section>
    </div>
  );
}
