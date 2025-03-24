// const CardWithDescription = ({
//   backgroundImage,
//   name,
//   icon,
//   bgImgDesktop,
//   bgImgMobile,
//   description,
// }) => {
//   return (
//     <div className={`relative max-w-[343px] w-full max-md:aspect-square ${
//       bgImgDesktop ? "text-white" : "text-black "
//       }  overflow-hidden rounded-lg`}
//     >
//       {backgroundImage && (
//         <img
//           src={bgImgDesktop}
//           srcSet={`${bgImgMobile} 600w, ${bgImgDesktop} 1200w`}
//           alt=""
//           className="absolute w-full h-full bg-cover bg-center"
//         />
//       )}

//     </div>
//   );
// };
// export default CardWithDescription;
// components/Card.jsx
import Image from "next/image";
import Button from "../Button/Button";

export default function CardWithDescription({
  title,
  name,
  icon,
  productImageDesktop, // Image for desktop
  productImageMobile, // Image for mobile
  buttonText,
  logo,
  hasGradient = false,
}) {
  return (
    <div
      className={`max-md:max-w-[343px] max-md:aspect-square w-full relative rounded-lg shadow-md overflow-hidden`}
    >
      {/* Left Section: Text, Icon, Logo */}
      <div className="flex flex-col space-y-6 w-4/5 md:w-3/5 p-4 h-full">
        {/* Logo (e.g., Instagram) */}
        {logo && (
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Logo"
              width={36}
              height={36}
              className="m-1.5"
            />
            <span className="text-[24px] leading-[32px] text-white font-coconat m-2">
              {name}
            </span>
          </div>
        )}

        {/* Icon (e.g., Telescope) */}
        {icon && (
          <Image
            src={icon}
            alt="Icon"
            width={40}
            height={40}
            className="mb-2"
          />
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
            <Image
              src={productImageMobile}
              alt="Product Mobile"
              // width={150}
              // height={150}
              fill
              className="object-cover w-full h-full -z-10 md:hidden" // Hidden on medium screens and above
            />
          )}

          {/* Desktop Image (shown on screens ≥ 768px) */}
          {productImageDesktop && (
            <Image
              src={productImageDesktop}
              alt="Product Desktop"
              // width={150}
              // height={150}
              fill
              className=" w-full h-full -z-10 hidden md:block" // Shown on medium screens and above
            />
          )}
        </div>
      )}
    </div>
  );
}
