import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-dashed border-primary"></div>
    </div>
  );
};

export default loading;
