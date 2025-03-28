const fetchHomePageData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/home?populate[heroBanner][populate]=*&populate[latestSection][populate]%3D=newsTeaser.image&populate[legacyTeaser][populate]%3D=*&populate[achievementSection][populate]%3D=*&populate[brandSection][populate]%3D=*&populate[latestSection][populate]%3D=socialTeaser.image&populate[carrersSection][populate]%3D=carrerTeaser.image&populate[carrersSection][populate]%3D=socialTeaser.image&populate[carrersSection][populate]%3D=numberTeaser.image&populate[carrersSection][populate]%3D=slider.slide&populate[carrersSection][populate]%3D=slider.cta&populate[carrersSection][populate]%3D=socialTeaser.cta&populate[carrersSection][populate]%3D=socialTeaser.Icon&populate[latestSection][populate]%3D=socialTeaser.image&populate[latestSection][populate]%3D=socialTeaser.cta&populate[latestSection][populate]%3D=socialTeaser.Icon`
    );
    const responseBody = await response.json();
    return responseBody?.data;
  } catch (error) {
    return {};
  }
};

export { fetchHomePageData };
