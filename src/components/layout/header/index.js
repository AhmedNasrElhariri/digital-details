import { useState } from "react";
import { LogoColor, ExpendIcon } from "components/icons";
import { HeaderTab } from "components/shared";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 flex justify-between text-center items-center h-[102px] border border-EAEAEA border-solid border-t-0 border-l-0 border-r-0 border-b-1 relative z-[1000]">
      <LogoColor width="152px" height="51px" className="mr-14 hidden lg:flex" />
      <div className="relative">
        <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <ExpendIcon width="50px" height="50px" className="mr-10" />
        </button>
        {isOpen && (
          <nav className="absolute right-0 bg-white shadow-lg rounded-lg p-4 w-64 mt-8">
            <ul className="flex flex-col space-y-12">
              <li>
                <HeaderTab>من نحن</HeaderTab>
              </li>
              <li>
                <HeaderTab>المنتجات</HeaderTab>
              </li>
              <li>
                <HeaderTab>الخدمات</HeaderTab>
              </li>
              <li>
                <HeaderTab>الأخبار</HeaderTab>
              </li>
              <li>
                <HeaderTab>انضم إلينا</HeaderTab>
              </li>
              <li>
                <HeaderTab>تواصل معنا</HeaderTab>
              </li>
            </ul>

            <div className="flex justify-end">
              <button className="p-2" onClick={() => setIsOpen(false)}>
                <div className="w-6 h-6">X</div>
              </button>
            </div>
          </nav>
        )}
      </div>

      <nav className="hidden lg:flex">
        <HeaderTab> من نحن</HeaderTab>

        <HeaderTab> المنتجات</HeaderTab>

        <HeaderTab> الخدمات</HeaderTab>

        <HeaderTab> الأخبار</HeaderTab>

        <HeaderTab> انضم إلينا </HeaderTab>

        <HeaderTab> تواصل معنا</HeaderTab>
      </nav>
      <a className="ml-14">English</a>
    </header>
  );
};
export default Header;
