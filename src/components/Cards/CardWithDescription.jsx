const CardWithDescription = ({
  backgroundImage,
  name,
  icon,
  bgImgDesktop,
  bgImgMobile,
  description,
}) => {
  return (
    <div className={`relative max-w-[343px] w-full max-md:aspect-square ${
      bgImgDesktop ? "text-white" : "text-black "
      }  overflow-hidden rounded-lg`}
    >
      {backgroundImage && (
        <img
          src={bgImgDesktop}
          srcSet={`${bgImgMobile} 600w, ${bgImgDesktop} 1200w`}
          alt=""
          className="absolute w-full h-full bg-cover bg-center"
        />
      )}
      
    </div>
  );
};
export default CardWithDescription;
