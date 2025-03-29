const submitnewsLetter = async (formData) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/haldiram-news-letters`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { ...formData } }),
      }
    );

    const responseBody = await response.json();
    return responseBody?.data;
  } catch (error) {
    console.error("Error sending form data:", error);
    return {};
  }
};

export { submitnewsLetter };
