import React from "react";

const MaxWidthContainer = ({ children, className }) => {
  return (
    <section
      className={`${className ? className : ""} max-w-desktopScreen mx-auto max-md:px-4 md:px-8`}
    >
      {children}
    </section>
  );
};

export default MaxWidthContainer;
