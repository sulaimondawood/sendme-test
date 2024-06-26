import { ArrowDown } from "../svgs/ArrowDown";
import { NavLogo } from "../svgs/NavLogo";
import { Container } from "./Container";
// import Blur from "../../assets/images/blur.png";
// import Blur3 from "../../assets/images/blur3.png";
import { MobileNav } from "./MobileNav";

export const NavBar = () => {
  return (
    <>
      <header className="hidden lg:block bg-navRadialGradient backdrop-blur-lg fixed top-0 w-full z-50">
        <Container>
          <nav className="flex items-center z-[99] justify-between px-[100px] py-[18.5px]">
            <div className="w-[159px] h-[29px]">
              <NavLogo />
            </div>
            <div className="flex gap-8 items-center font-aeonikMedium font-medium text-[#36454F]">
              <p className="text-base leading-[22px] z-10">Home</p>
              <div className="flex items-center gap-[13px] z-10">
                <p className="text-base leading-[22px]">Services</p>
                <ArrowDown />
              </div>
              <p className="text-base leading-[22px] z-10">Contact</p>
            </div>
            <button className="z-10 font-aeonikMedium font-medium bg-white rounded-[32px] border border-[#5F5F5F] shadow-[0px_4px_10px_0px] shadow-[#36454F1A] py-[10px] px-[44px]">
              <p className="text-[15px] font-aeonikBold font-bold leading-[21px] text-[#00070C]">
                Login
              </p>
            </button>
          </nav>
        </Container>
      </header>
      <MobileNav />
      {/* <img
        className="hidden lg:block absolute -z-10 top-0 w-full"
        src={Blur}
        alt="blur gradient"
      />
      <img
        className="lg:hidden absolute -z-10 top-0 w-full"
        src={Blur3}
        alt="blur gradient"
      /> */}
    </>
  );
};
