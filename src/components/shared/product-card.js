import { LogoColor } from "components/icons";

const ProductCard = ({ title, description }) => {
  return (
    <div className="bg-[#ffffff] mb-[50px] w-[430px] h-[335px] px-[40px] py-[44px] sm:w-[450px] mx-auto lg:w-[400px] xl:w-[450px]">
      <LogoColor width="152px" height="61px" />
      <h1 className="font-arabic text-[24px] leading-[36px] font-bold text-[#000000]">
        {title}
      </h1>
      <p className="font-arabic text-[19px] leading-[27.2px] font-light ">
        {description}
      </p>
    </div>
  );
};
export default ProductCard;
