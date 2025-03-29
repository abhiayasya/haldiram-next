"use client";

const ErrorMessage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="rounded-lg bg-white p-8 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-red-500">
          Something went wrong!
        </h2>
        <p className="mb-6 text-gray-600">{`We couldn't load the page. Please try again later.`}</p>
        <button
          onClick={() => window.location.reload()}
          className="rounded-md bg-darkPink px-6 py-2 border-gray-600 border-2 font-semibold text-gray-600 cursor-pointer focus:outline-none"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export { ErrorMessage };
