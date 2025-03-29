"use client";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

const SectionTabs = ({ SECTION_TABS }) => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    SECTION_TABS.forEach((targetNode) => {
      const current = document.getElementById(targetNode.id);
      observer.observe(current);
    });
  });

  return (
    <MaxWidthContainer className=" relative max-md:hidden">
      <div className="fixed top-[50vh] -translate-y-1/2 right-8 flex flex-col z-50">
        <div className="flex flex-col space-y-2">
          {SECTION_TABS.map(({ title, id }) => {
            return (
              <a
                key={id}
                className={` ${
                  activeSection == id ? "border-yellow-500" : " border-red-500"
                } self-end border-r  text-white cursor-pointer py-1`}
                href={`#${id}`}
              >
                <span
                  className={`${
                    activeSection == id ? "opacity-100" : ""
                  } bg-red-500/40 text-nowrap pl-2 py-1 opacity-0 transition-all duration-400 hover:opacity-100`}
                >
                  {title} {"-"}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default SectionTabs;
