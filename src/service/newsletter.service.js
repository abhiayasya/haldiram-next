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
    if (responseBody.data) {
      return { data: responseBody.data, error: null };
    }
    if (responseBody.error) {
      return { data: null, error: responseBody.error.details?.errors };
    }
    return { error: "Unexpected response format" };
  } catch (error) {
    return {
      errorMessage: "Something went wrong. Please try again.",
    };
  }
};

export { submitnewsLetter };
