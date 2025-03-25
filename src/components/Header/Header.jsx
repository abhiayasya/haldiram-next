"use client";
import { useState, useEffect } from "react";
import { Menu, X, Globe, Mail, Search } from "lucide-react";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderDropdown from "./HeaderDropdown";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import Link from "next/link";

const Header = ({ headerData, headerNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSearchOpen]);

  const searchHandler = () => {
    setIsSearchOpen((prev) => !prev);
  };
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isSubmenuOpen || isOpen || isSearchOpen
            ? "bg-white text-black shadow-xl"
            : "bg-transparent text-white"
        } `}
      >
        <section className="relative w-full">
          <MaxWidthContainer className="flex items-center justify-between gap-5">
            <div className="flex items-center justify-between max-w-[86px] md:max-w-[120px] w-full my-4">
              <Link href="/">
                <img
                  src={headerNav?.logo[0].url}
                  alt="Logo"
                  className="w-full h-full"
                />
              </Link>
            </div>

            <div className="flex items-center justify-end gap-10 w-full">
              <nav className="hidden md:flex items-center gap-5 lg:gap-10">
                <ul className="hidden md:flex items-center gap-5 lg:gap-10">
                  {headerNav?.nav.map((item, index) => (
                    <li
                      key={index}
                      className="py-8 group w-full"
                      onMouseEnter={() => {
                        if (item.submenu) {
                          setIsSubmenuOpen(true);
                        } else {
                          setIsSubmenuOpen(false);
                        }
                      }}
                      onMouseLeave={() => {
                        if (item.submenu) {
                          setIsSubmenuOpen(false);
                        }
                      }}
                    >
                      <Link
                        href={item?.url}
                        className={`group-hover:text-[#E1251B] md:text-[13px] lg:text-base font-semibold text-nowrap ${
                          isScrolled || isSubmenuOpen || isOpen || isSearchOpen
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {item?.title}
                      </Link>

                      {item.submenu && isSubmenuOpen && (
                        <div className="absolute top-full w-full left-0 bg-white shadow-lg z-50 pb-6">
                          <MaxWidthContainer className="">
                            <HeaderDropdown dropdownitems={item.submenu} />
                          </MaxWidthContainer>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div
                className={`flex items-center border rounded-lg justify-between backdrop-blur-md max-w-[84px] md:max-w-[140px] w-full my-4 ${
                  isScrolled || isSubmenuOpen || isOpen || isSearchOpen
                    ? "border-black bg-gray-100"
                    : "border-white bg-white/10"
                }`}
              >
                <Globe
                  className={`max-md:hidden w-5 h-5 md:w-6 md:h-6 m-2.5 cursor-pointer ${
                    isScrolled || isSubmenuOpen || isOpen || isSearchOpen
                      ? "text-black"
                      : "text-white"
                  }`}
                />
                <span
                  className={`border-l max-md:hidden ${
                    isScrolled || isSubmenuOpen || isOpen || isSearchOpen
                      ? "border-black"
                      : "border-white"
                  } h-5`}
                ></span>
                <Mail
                  className={`max-md:hidden w-5 h-5 md:w-6 md:h-6 m-2.5 cursor-pointer ${
                    isScrolled || isSubmenuOpen || isOpen || isSearchOpen
                      ? "text-black"
                      : "text-white"
                  }`}
                />
                <span
                  className={`max-md:hidden border-l ${
                    isScrolled || isSubmenuOpen || isOpen || isSearchOpen
                      ? "border-black"
                      : "border-white"
                  } h-5`}
                ></span>
                {isSearchOpen ? (
                  <X
                    className="cursor-pointer md:w-6 md:h-6 m-2.5"
                    onClick={searchHandler}
                  />
                ) : (
                  <Search
                    onClick={searchHandler}
                    className={`w-5 h-5 md:w-6 md:h-6 m-2.5 cursor-pointer ${
                      isScrolled || isSubmenuOpen || isOpen || isSearchOpen
                        ? "text-black"
                        : "text-white"
                    }`}
                  />
                )}
                <span
                  className={`border-l md:hidden ${
                    isScrolled || isSubmenuOpen || isOpen || isSearchOpen
                      ? "border-black"
                      : "border-white"
                  } h-5`}
                ></span>
                <button
                  className="md:hidden focus:outline-none flex justify-center items-center "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <X className="w-5 h-5 md:w-6 md:h-6 m-2.5" />
                  ) : (
                    <Menu className="w-5 h-5 md:w-6 md:h-6 m-2.5" />
                  )}
                </button>
              </div>
            </div>
          </MaxWidthContainer>
        </section>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center space-y-6 z-30">
          <button
            className="absolute top-5 right-5"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8 text-black" />
          </button>
          {headerData?.menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-lg font-medium hover:text-gray-500"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Search Bar */}
      <HeaderSearchBar isSearchOpen={isSearchOpen} />
    </>
  );
};

export default Header;
