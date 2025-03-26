import React from "react";

const Button = ({ title, className,arrowColor, url = "#" }) => {
  return (
    <a
      href={url}
      className={`flex items-center gap-3 ${className} font-medium hover:opacity-80 transition-all cursor-pointer w-fit`}
    >
      <span className="">{title}</span>
      <span className={`${arrowColor} bg-secondary flex justify-center items-center rounded-full w-6 h-6 md:w-8 md:h-8`}>
        {arrowColor == "bg-white" ? 
        <img src="/assets/icon/rightArrowIconBlack.png" alt="" />
        :
        <img src="/assets/icon/rightArrowIcon.png" alt="" />
      }
      </span>
    </a>
  );
};

export default Button;
