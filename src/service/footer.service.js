const fetchFooter = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/footer?populate[nav][populate]=*&populate[addressInfo][populate]=*`
    );
    const responseBody = await response.json();
    return responseBody?.data;
  } catch (error) {
    return {};
  }
};

export { fetchFooter };
//http://localhost:1337/api/footer?populate[nav][populate]=*&populate[addressInfo][populate]=*
