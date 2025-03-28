import Link from "next/link";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import _ from "lodash"; // Import Lodash

const Footer = ({ footerData, footerNote }) => {
  const { nav, addressInfo, socialMedia, footerInfo } = footerData;
  return (
    <footer className="bg-[#fff2e2] text-black text-sm">
      <MaxWidthContainer className="max-md:py-10 pt-[50px] md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left Section */}
          <div className="border-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 max-lg:items-center w-full gap-5">
            <div>
              <div className="mb-6 w-[180px]">
                <img
                  src={_.get(footerInfo, "footerLogo.url", "/default-logo.png")}
                  alt="Haldiram's"
                  className="h-full w-full"
                />
              </div>
              <h2 className="text-base md:text-[20px] md:leading-[20px] leading-[16px] font-coconat text-primary">
                {_.get(footerInfo, "footerTagLine", "Company Title")}
              </h2>
              <p className="text-sm md:text-[16px] md:leading-[16px] font-satoshi leading-[14px] mb-3 md:mb-2">
                {_.get(footerInfo, "newsLetterLabel", "Your tagline here")}
              </p>
              <div className="w-full flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="max-w-[400px] w-full border-2 border-red-500 rounded-lg outline-none text-sm leading-[20px] px-4 py-[14px]"
                />
                <button className="bg-[#C50919] text-white w-12 flex justify-center items-center aspect-square rounded-lg">
                  <img
                    src="/assets/icon/right-arrow-icon.png"
                    alt="right arrow icon"
                    className="w-4"
                  />
                </button>
              </div>
            </div>

            {/* Corporate Office */}
            <div className="flex flex-col">
              <div className="flex flex-row gap-6 mt-3 mb-7 md:pr-10">
                {socialMedia.map((social, index) => {
                  const imageUrl = social?.socailIcon?.url;
                  return (
                    <Link href={social.socialMediaUrl} key={index}>
                      <img
                        src={imageUrl}
                        key={index}
                        width={social?.socailIcon?.width}
                        height={social?.socailIcon?.height}
                        className={`${social?.color} h-6 w-6 text-xl cursor-pointer`}
                      />
                    </Link>
                  );
                })}
              </div>
              <div className="flex flex-col md:flex-row items-baseline gap-[24px] md:mb-4 ">
                {addressInfo.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="space-y-2 md:space-y-4 md:flex-1 text-base uppercase"
                    >
                      <h2>{data.addressLabel}</h2>
                      <p className="text-[12px] leading-[20px] font-satoshi">
                        {data.address}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative md:w-[1px] md:ml-[49px] md:mb-4">
            {/* {/ Gradient Border /} */}
            <div className="absolute top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-black to-transparent"></div>
          </div>
          {/* Right Links */}
          <div className="flex lg:justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 py-10 md:py-2.5 md:px-10 w-full gap-5">
              {/* First two columns: Sections with children */}
              {nav
                .filter(
                  (section) => section.children && section.children.length > 0
                ) // Only sections with children
                .map((section, index) => (
                  <div key={section.id} className=" space-y-4">
                    {/* Section Title */}
                    <h3 className="text-base leading-[16px] font-coconat font-normal">
                      {section.title}
                    </h3>
                    {/* Section Children */}
                    <ul className="text-[#1E1E1E] font-satoshi">
                      {section.children.map((item, idx) => (
                        <li
                          key={item.id}
                          className="text-sm leading-[28px] md:leading-[32px]"
                        >
                          <Link href={item.url || "#"}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              {/* Third column: Sections without children */}
              <div className="mb-6 space-y-4">
                {nav
                  .filter(
                    (section) =>
                      !section.children || section.children.length === 0
                  ) // Only sections without children
                  .map((section, index) => (
                    <div key={section.id}>
                      <h3 className="text-base leading-[16px] font-coconat">
                        <Link href={section.url || "#"}>{section.title}</Link>
                      </h3>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="border-t border-gray-300 flex flex-col md:flex-row md:justify-between">
          <div className="flex justify-between py-6 md:py-4 md:gap-10">
            {!_.isEmpty(_.get(footerNote, "tag", [])) &&
              _.map(footerNote?.tag, (policy, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-[10px] md:text-[12px] md:leading-[20px] leading-[20px] font-[300]"
                >
                  {policy?.title}
                </Link>
              ))}
          </div>
          <p className="text-[10px] md:text-[12px] md:leading-[20px] leading-[16px] font-[300] md:py-4">
            {_.get(footerNote, "copyRightText", "© 2024 Your Company")}
          </p>
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
