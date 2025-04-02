import { Globe, Mail } from "lucide-react";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import Link from "next/link";
import _get from "lodash/get";

const Header = ({ headerNav }) => {
  return (
    <>
      <header
        className={`absolute top-0 w-full z-50 transition-all duration-300 bg-transparent text-white`}
      >
        <section className="relative w-full">
          <MaxWidthContainer className="flex items-center justify-between gap-5">
            <div className="flex items-center justify-between max-w-[86px] md:max-w-[120px] w-full my-4">
              <Link href="/">
                <img
                  src={_get(headerNav, "logo[0].url", "/default-logo.png")}
                  alt="Logo"
                  className="w-full h-full"
                />
              </Link>
            </div>

            <div className="flex items-center justify-end gap-10 w-full">
              <nav className="hidden md:flex items-center gap-5 lg:gap-10">
                {!_.isEmpty(headerNav?.nav) && (
                  <ul className="hidden md:flex items-center gap-5 lg:gap-10">
                    {headerNav?.nav?.map((item, index) => (
                      <li key={index} className="py-8 group w-full">
                        <Link
                          href={item?.url||"#"}
                          className={`group-hover:text-[#E1251B] md:text-[13px] lg:text-base font-semibold text-nowrap`}
                        >
                          {_get(item, "title", "Menu Item")}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </nav>

              <div
                className={`flex items-center border rounded-lg backdrop-blur-md max-w-[84px] justify-center  w-full my-4 `}
              >
                <Link
                target="_blank"
                  href={"https://www.haldiram.com/dealership"}
                  className="p-2.5 cursor-pointer"
                >
                  <Globe className={` w-5 h-5 md:w-6 md:h-6 `} />
                </Link>
                <span className={`border-l h-5`}></span>
                <Link
                  href={"mailto:customercare@haldiram.com"}
                  className="p-2.5 cursor-pointer"
                >
                  <Mail className={`w-5 h-5 md:w-6 md:h-6  `} />
                </Link>

                {/* <button className="md:hidden focus:outline-none flex justify-center items-center ">
                  {isOpen ? (
                    <X className="w-5 h-5 md:w-6 md:h-6 m-2.5" />
                  ) : (
                    <Menu className="w-5 h-5 md:w-6 md:h-6 m-2.5" />
                  )}
                </button> */}
              </div>
            </div>
          </MaxWidthContainer>
        </section>
      </header>
    </>
  );
};

export default Header;
