import { NavLogo } from "../svgs/NavLogo";
import { Hamburger } from "../svgs/hamburger";

export const MobileNav = () => {
  return (
    <header className="px-4 flex justify-between py-8 lg:hidden">
      <div className="w-[140px] h-[24px]">
        <NavLogo />
      </div>
      <Hamburger />
    </header>
  );
};
