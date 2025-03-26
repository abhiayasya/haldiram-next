import Link from "next/link";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import _ from "lodash"; // Import Lodash

const Footer = ({ footerData, socialLinks, footerNote }) => {
  // Format Address Using Lodash
  const addressLines = _.get(footerData, "addressInfo.address", "").split("\n");
  const formattedAddress = _.map(addressLines, (line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <footer className="bg-[#fff2e2] text-black text-sm">
      <MaxWidthContainer className="max-md:py-10 pt-[50px] md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section */}
          <div className="border-gray-300 lg:border-r border-b grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-1 max-lg:items-center w-full">
            <div>
              <div className="mb-6 w-[180px]">
                <img
                  src={_.get(
                    footerData,
                    "addressInfo.logo[0].url",
                    "/default-logo.png"
                  )}
                  alt="Haldiram's"
                  className="h-full w-full"
                />
              </div>
              <h2 className="text-base md:text-[20px] md:leading-[20px] leading-[16px] font-coconat text-primary">
                {_.get(footerData, "addressInfo.title", "Company Title")}
              </h2>
              <p className="text-sm md:text-[16px] md:leading-[16px] font-satoshi leading-[14px] mb-3 md:mb-2">
                {_.get(footerData, "addressInfo.tagLine", "Your tagline here")}
              </p>
              <div className="w-full flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="max-w-[400px] w-full border-2 border-red-500 rounded-lg outline-none text-sm leading-[20px] px-4 py-[14px]"
                />
                <button className="cursor-pointer bg-red-600 text-white w-12 flex justify-center items-center aspect-square rounded-lg">
                  <img
                    src="/assets/icon/right-arrow-icon.png"
                    alt="right arrow icon"
                    className="w-4"
                  />
                </button>
              </div>
            </div>

            {/* Corporate Office */}
            <div className="flex flex-col-reverse md:flex-row">
              <div className="space-y-2 md:space-y-4 mb-10 md:flex-1">
                <p className="text-[12px] leading-[20px] font-satoshi">
                  {formattedAddress}
                </p>
              </div>
              <div className="flex flex-row gap-6 mt-6 mb-10 md:flex-1 md:self-end md:justify-end md:pr-10">
                {_.map(
                  _.get(socialLinks, "leftSection.socialLinks", []),
                  (social, index) => (
                    <img
                      src={social?.icon}
                      key={index}
                      className={`${social?.color} h-6 w-6 text-xl cursor-pointer`}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Links */}
          <div className="flex lg:justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 py-10 md:py-2.5 md:px-10 w-full max-md:gap-6">
              {_.map(_.get(footerData, "nav", []), (section, index) => (
                <div
                  key={index}
                  className={`${section.links ? "mb-6" : "mb-0"} space-y-4`}
                >
                  <h3 className="text-base leading-[16px] font-coconat">
                    {_.get(section, "title", "Section Title")}
                  </h3>
                  <ul className="text-[#1E1E1E] font-satoshi">
                    {_.map(_.get(section, "children", []), (item, idx) => (
                      <li
                        key={idx}
                        className="text-sm leading-[28px] md:leading-[32px]"
                      >
                        <Link href={item?.url}>{item?.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="border-t border-gray-300 flex flex-col md:flex-row md:justify-between">
          <div className="flex justify-between flex-wrap py-6 md:py-4 md:gap-10">
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
