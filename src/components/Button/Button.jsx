import React from "react";

const Button = ({ title, className, icon, url = "#" }) => {
  return (
    <a
      href={url}
      className={`flex items-center gap-3 font-coconat text-lg ${className} font-medium hover:opacity-80 transition-all cursor-pointer w-fit`}
    >
      <span className=" flex gap-4 items-center">
        {title}
        <img src={icon?.url} alt="image" className="w-8 h-8"/>
      </span>
    </a>
  );
};

export default Button;
