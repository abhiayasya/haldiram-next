const fetchFooterNote = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/footer-note?populate[tag][populate]=*`,
      { cache: "no-store" }
    );
    const responseBody = await response.json();
    return responseBody?.data;
  } catch (error) {
    return {};
  }
};

export { fetchFooterNote };

