import Link from "next/link";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

const Footer = ({ footerData }) =>{
  return (
    <footer className="bg-[#fff2e2] text-black text-sm">
    <MaxWidthContainer className="pt-10 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section */}

          <div className="border-gray-300 pb-8 lg:border-r border-b grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-1 max-lg:items-center w-full">
            <div className="lg:pr-8">
              <div className="mb-4 w-[180px]">
                <img
                  src={footerData.leftSection.logo}
                  alt="Haldiram's"
                  className="h-full w-full"
                />
              </div>
              <h2 className="text-3xl font-light text-red-600">
                {footerData.leftSection.tagline}
              </h2>
              <p className="text-lg">{footerData.leftSection.description}</p>
              <div className="mt-4 flex gap-4 text-xl items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-4 max-w-[500px] w-full border-2 border-red-500 rounded-lg outline-none"
                />
                <button className="bg-red-600 text-white p-4 px-6 rounded-lg">
                  →
                </button>
              </div>
            </div>

            {/* Corporate Office */}

            <div className="grid lg:grid-cols-2 grid-cols-1 md:justify-items-end">
              <div>
                <h3 className="text-xl my-6 mb-4">
                  {footerData.leftSection.corporateOffice.title}
                </h3>
                <p className="text-gray-700">
                  {footerData.leftSection.corporateOffice.address.map(
                    (line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ),
                  )}
                </p>
              </div>
              <div className="flex self-end lg:justify-end gap-6 pr-14 max-lg:mt-6">
                {footerData.leftSection.socialLinks.map((social, index) => (
                  <img
                    src={social.icon}
                    key={index}
                    className={`${social.color} h-6 w-6 text-xl cursor-pointer lucide ${social.icon}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Links */}

          <div className="flex lg:justify-center w-full lg:pl-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-8 w-full">
              {footerData.rightSection.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl mb-8">{section.title}</h3>
                  <ul className="mt-2 space-y-4 text-gray-700">
                    {section.links.map((item, idx) => (
                      <li key={idx}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Policies */}

        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between text-gray-600 text-xs">
          <div className="flex space-x-10">
            {footerData.policies.map((policy, index) => (
              <Link key={index} href="#">
                {policy}
              </Link>
            ))}
          </div>
          <p className="mt-4 md:mt-0">{footerData.copyright}</p>
        </div>
      </MaxWidthContainer>
    </footer>
  );
}
export default Footer