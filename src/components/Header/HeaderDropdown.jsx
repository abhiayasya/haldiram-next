import React from "react";
import Button from "../Button/Button";

const HeaderDropdown = ({ dropdownitems }) => {
  return (
    <div className="bg-white w-full border-t pb-6">
      <div className="py-6  flex justify-between gap-5 items-baseline">
        <div>
          <h3 className="text-[#1E1E1E] uppercase text-2xl font-normal mb-4">
            <span className="text-primary">
              {dropdownitems?.heading?.colored}
            </span>{" "}
            {dropdownitems?.heading?.normal}
          </h3>
          <p className="text-black font-medium text-base max-w-[600px] w-full">
            {dropdownitems?.subheading}
          </p>
        </div>
        <Button title="Explore All" className="text-black" />
      </div>

      <div
        className="h-[260px] max-w-[1260px] w-full bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: `url("/assets/icon/dropdownBackround.png")` }}
      >
        <div className="flex justify-between items-center gap-6 p-8 ">
          {dropdownitems?.items.map((item) => (
            <div key={item.id} className="" >
              <img
                src={item?.image}
                alt={item?.title}
                className="max-w-[200px] w-full "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderDropdown;
