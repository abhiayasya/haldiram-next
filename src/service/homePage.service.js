const fetchHomePageData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/home?populate[heroBanner][populate]=*&populate[latestSection][populate]=newsTeaser.image&populate[latestSection][populate]=newsTeaser.cta.Icon&populate[legacyTeaser][populate]%3D=*&populate[achievementSection][populate]=*&populate[brandSection][populate]%3D=*&populate[latestSection][populate]%3D=socialTeaser.image&populate[carrersSection][populate]%3D=carrerTeaser.image&populate[carrersSection][populate]%3D=socialTeaser.image&populate[carrersSection][populate]%3D=numberTeaser.image&populate[carrersSection][populate]%3D=slider.slide&populate[carrersSection][populate]%3D=slider.cta&populate[carrersSection][populate]=socialTeaser.cta.Icon&populate[carrersSection][populate]=socialTeaser.Icon&populate[latestSection][populate]%3D=socialTeaser.image&populate[latestSection][populate]=socialTeaser.cta.Icon&populate[latestSection][populate]=socialTeaser.Icon`,
      { cache: "no-store" }
    );
    const responseBody = await response.json();
    return responseBody?.data;
  } catch (error) {
    return {};
  }
};

export { fetchHomePageData };
