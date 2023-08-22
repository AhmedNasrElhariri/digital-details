import { Fragment } from "react";

export const HeaderTab = (props) => (
  <a
    className="hover:text-blue-500 mx-[25px] font-arabic font-light text-base"
    {...props}
  />
);
export const TitleWithUnderLine = ({ children }) => {
  return (
    <div class="mx-auto pt-[80px]">
      <h1 className="font-arabic font-bold text-[45px] leading-[48px] text-center">
        {children}
      </h1>
      <p className="bg-[#3F2E72] w-[128px] h-[4px] mt-[20px] mx-auto"></p>
    </div>
  );
};
