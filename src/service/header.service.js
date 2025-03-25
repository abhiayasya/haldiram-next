const fetchHeaderPageData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/header?populate[nav][populate]=*&populate[logo][populate]=*`
    );
    const responseBody = await response.json();
    return responseBody?.data;
  } catch (error) {
    return {};
  }
};

export { fetchHeaderPageData };
