const ServiceCard = ({ children, title, description }) => {
  return (
    <div className="bg-[#F5F5F5] mb-[50px] w-[430px] h-[335px] px-[40px] py-[44px] sm:w-[450px] mx-auto lg:w-[400px] xl:w-[450px]">
      {children}
      <h1 className="font-arabic text-[24px] leading-[36px] font-bold text-[#000000]">
        {title}
      </h1>
      <p className="font-arabic text-[19px] leading-[27.2px] font-light ">
        {description}
      </p>
    </div>
  );
};
export default ServiceCard;
