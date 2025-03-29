import { useState, useEffect } from "react";

const useDeviceType = (breakpoint = 780) => {
  const getIsMobile = () =>
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false;

  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent errors during SSR

    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export {useDeviceType};
