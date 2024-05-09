import { Container } from "../global/Container";
import AppStore from "../../assets/images/appstore.png";
import GooglePlay from "../../assets/images/googleplay.png";
import Blur from "../../assets/images/blur2.png";
import { FooterLogo } from "../svgs/Footer";
import { Insta } from "../svgs/Insta";
import { Facebook } from "../svgs/Facebook";
import { X } from "../svgs/X";
import { LinkedIn } from "../svgs/LinkedIn";

export const Footer = () => {
  return (
    <section className="mt-[43px] md:mt-[111px] bg-[#191C1F] pt-[58px] md:pt-[88px] relative overflow-hidden px-4 md:px-0">
      <div className="w-full md:w-[554px] mx-auto text-center ">
        <h1 className="text-white text-[24px] md:text-[40px] leading-7 md:leading-[48px] font-aeonikBold font-bold">
          Unlock the convenience of catering to loved ones
        </h1>
        <div className="pt-8 md:pt-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="w-[138px] md:w-auto">
            <img src={GooglePlay} alt="google play icon" />
          </button>
          <button className="w-[138px] md:w-auto">
            <img src={AppStore} alt="apple store icon" />
          </button>
        </div>
      </div>
      <Container>
        <footer className="md:pl-[102px] md:pr-[160px] pt-12 md:pt-[120px] flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[322px]">
            <h1 className="text-white text-[24px] md:text-[36px] leading-[32px] md:leading-[47px] font-aeonikBold font-bold w-full md:w-[207px]">
              Ready when you are
            </h1>
            <p className="pt-6 text-[#E5E9EE] text-[15px] leading-[21px] font-aeonikRegular">
              Take care of your family, anywhere you are in the world.
              Experience the peace that comes with ensuring your loved ones are
              well catered for with Sendsile.
            </p>
            <button className="mt-6 text-[15px] leading-[21px] bg-[#202426] text-white font-aeonikBold font-bold py-3 px-[38.5px] rounded-[32px] border-[0.75px] border-[#74767E]">
              Try Sendsile today
            </button>
          </div>
          <div className="mt-12 md:mt-0 w-full md:w-[596px] flex flex-wrap md:flex-nowrap md:justify-between gap-x-[130px] gap-y-10 md:gap-y-0 md:gap-x-0 ">
            <div className="flex flex-col gap-[22px]">
              <h1 className="text-white text-[15px] leading-[21px] font-aeonikBold font-bold">
                Company
              </h1>
              <p className="text-[15px] leading-[21px] text-[#E5E9EE] font-aeonikRegular">
                Vendors
              </p>
              <p className="text-[15px] leading-[21px] text-[#E5E9EE] font-aeonikRegular">
                FAQs
              </p>
              <p className="text-[15px] leading-[21px] text-[#E5E9EE] font-aeonikRegular">
                Privacy Policy
              </p>
              <p className="text-[15px] leading-[21px] text-[#E5E9EE] font-aeonikRegular">
                Terms of Use
              </p>
            </div>
            <div className="flex flex-col gap-[22px]">
              <h1 className="text-white text-[15px] leading-[21px] font-aeonikBold font-bold">
                Explore
              </h1>
              <p className="text-[15px] leading-[21px] text-[#E5E9EE] font-aeonikRegular">
                Laundry
              </p>
              <p className="text-[15px] leading-[21px] text-[#E5E9EE] font-aeonikRegular">
                Groceries
              </p>
              <p className="text-[15px] leading-[21px] text-[#E5E9EE] font-aeonikRegular">
                Healthcare
              </p>
            </div>
            <div className="flex flex-col gap-[22px]">
              <h1 className="text-white text-[15px] leading-[21px] font-aeonikBold font-bold">
                Contact us
              </h1>
              <p className="text-[15px] leading-[21px] text-[#E5E9EE] font-aeonikRegular">
                +234 801 234 5678
              </p>
              <p className="text-[15px] leading-[21px] text-[#E5E9EE] font-aeonikRegular">
                +234 801 234 5678
              </p>
              <p className="text-[15px] leading-[21px] text-[#E5E9EE] font-aeonikRegular">
                info@sendsile.com
              </p>
            </div>
          </div>
        </footer>
        <div className="pt-[55px] md:pt-[136px] md:pl-[102px] md:pr-[111px] flex flex-wrap justify-between">
          <div className="flex gap-9 items-center">
            <FooterLogo />
            <p className="text-sm text-[#E5E9EE] font-aeonikRegular w-full md:w-[774px]">
              Lorem ipsum dolor sit amet consectetur. Sociis tincidunt blandit
              sed feugiat ornare dictum cras. Adipiscing sit pellentesque
              vehicula a viverra nullam risus. Congue elit tincidunt id arcu nec
              mi massa. © Sendsile 2024. All Rights Reserved.
            </p>
          </div>
          <div className="mt-6 md:mt-0 border border-[#282C31] rounded-[10px] py-[14px] md:py-6 px-[27px] bg-[#131618] flex gap-8 items-center">
            <Insta />
            <Facebook />
            <X />
            <LinkedIn />
          </div>
        </div>
      </Container>
      <h1 className="pt-10 md:pt-14 text-[46px] md:text-[164px] leading-[67px] md:leading-[150px] overflow-hidden text-[#313234] font-aeonikBold font-bold text-center">
        Care with Sendsile
      </h1>
      <img className="absolute bottom-0 right-0" src={Blur} alt="blur" />
    </section>
  );
};
