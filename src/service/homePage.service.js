const fetchHomePageData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/home?populate[heroBanner][populate]=*&populate[latestSection][populate]=newsTeaser.image&populate[latestSection][populate]=socialTeaser.image&populate[legacyTeaser][populate]%3D=*&populate[achievementSection][populate]=*&populate[brandSection][populate]=*&populate[carrersSection][populate]=carrerTeaser.image&populate[carrersSection][populate]=slider`
    );
    const responseBody = await response.json();
    return responseBody?.data;
  } catch (error) {
    return {};
  }
};

export { fetchHomePageData };
