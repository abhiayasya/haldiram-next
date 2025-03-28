import Button from "../Button/Button";

export default function CardWithDescription({
  title,
  name,
  icon,
  productImageDesktop,
  productImageMobile,
  buttonText,
  logo,
  hasGradient = false,
}) {
  return (
    <div
      className={`max-h-[343px] sm:max-h-[280px] max-md:aspect-square w-full relative rounded-[20px] shadow-md overflow-hidden`}
    >
      {/* Left Section: Text, Icon, Logo */}
      <div className="flex flex-col space-y-6 w-4/5 md:w-3/5 lg:w-4/5 py-6 px-4 h-full">
        {/* Logo (e.g., Instagram) */}
        <div className="flex items-center space-x-2">
          {logo && (
            <img
              src={logo}
              alt="Logo"
              width={36}
              height={36}
              className="m-1.5"
            />
          )}
          <span className="text-[24px] leading-[32px] text-white font-coconat m-2">
            {name}
          </span>
        </div>

        {/* Icon (e.g., Telescope) */}
        {icon && (
          <img src={icon} alt="Icon" width={40} height={40} className="mb-2" />
        )}

        {/* Title */}
        <p
          className={`text-base md:text-lg font-medium leading-[24px] font-satoshi md:mb-10 ${
            productImageDesktop || productImageMobile
              ? "text-white"
              : "text-gray-800"
          }`}
        >
          {title}
        </p>
        <div className="flex h-full mb-2">
          {/* Button */}
          {buttonText && (
            <Button
              title={"View All"}
              className={"text-lg self-end leading-[24px] text-white"}
              arrowColor={"bg-white"}
            />
          )}
        </div>
      </div>

      {/* Right Section: Product Image */}
      {(productImageDesktop || productImageMobile) && (
        <div className=" absolute top-0 left-0 w-full h-full -z-10">
          {/* Mobile Image (shown on screens < 768px) */}
          {productImageMobile && (
            <img
              src={productImageMobile}
              alt="Product Mobile"
              className="object-cover w-full h-full -z-10 md:hidden"
            />
          )}

          {/* Desktop Image (shown on screens ≥ 768px) */}
          {productImageDesktop && (
            <img
              src={productImageDesktop}
              alt="Product Desktop"
              className=" w-full h-full -z-10 hidden md:block"
            />
          )}
        </div>
      )}
    </div>
  );
}
