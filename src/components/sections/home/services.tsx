import { Container } from "../../global/Container";
import ServiceImg from "../../../assets/images/service-img.png";
import Mark from "../../../assets/images/mark.png";
import EKDC from "../../../assets/images/ekdc.png";
import { Bulb } from "../../svgs/bulb";
import { Data } from "../../svgs/data";
import { Airtime } from "../../svgs/airtime";
import { ProductsArrowLeft } from "../../svgs/products-arrow-left";

export const Services = () => {
  return (
    <section className="mt-4 bg-[#F8F3F0] pt-[71px] px-[100px]">
      <Container>
        <div className="flex flex-col w-fit mx-auto">
          <div className="flex gap-[114px] items-center">
            <div className="bg-[#F2EBE7] rounded-[24px] pt-[54px] pb-[51px] pr-[90px] pl-[56px] flex items-center  gap-12 flex-col">
              <img
                className="w-[267px] h-[272px]"
                src={ServiceImg}
                alt="service image"
              />
              <div className="border-[3px] w-[378px] border-[#FF8A64] rounded-[12px] bg-white">
                <div className="rounded-t-[12px] py-[19px] px-[14px] flex items-center justify-between bg-[#FFF2ED] border-b border-[#D1D8E6]">
                  <div className="gap-[10px] flex items-center">
                    <img src={Mark} alt="mark" />
                    <p>Fast and easy</p>
                  </div>
                  <img src={EKDC} alt="Nepa logo" />
                </div>
                <div className="flex justify-between items-center px-7 py-6 ">
                  <h1 className="text-[20px] leading-[28px] font-aeonikBold">
                    ₦20,000
                  </h1>
                  <p className="text-sm leading-5 text-[#536878] font-aeonikRegular">
                    Up to 100 units
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[600px]">
              <h1 className="text-[72px] leading-[72px] font-aeonikRegular">
                Pay{"  "} <span className="font-besley italic">bills</span>
                {"  "}and{"  "}{" "}
                <span className="font-besley italic">utilities</span>
                {"  "}
                with ease{" "}
              </h1>
              <p className="w-full max-w-[503px] text-prm-black text-[24px] leading-[34px] py-8">
                Distance is no barrier when it comes to supporting your loves
                ones. Ensure their lights stay on, phones remain connected, and
                daily essentials are covered.
              </p>
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="flex items-center gap-[14px]">
                  <Bulb />
                  <p className="text-[20px] leading-7 font-aeonikMedium text-prm-black">
                    Electricity bills
                  </p>
                </div>
                <div className="flex items-center gap-[14px]">
                  <Data />
                  <p className="text-[20px] leading-7 font-aeonikMedium text-prm-black">
                    Data purchase
                  </p>
                </div>
                <div className="flex items-center gap-[14px]">
                  <Airtime />
                  <p className="text-[20px] leading-7 font-aeonikMedium text-prm-black">
                    Airtime top-up
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className=" mb-9 self-end flex items-center gap-[20px] text-[20px] leading-7 font-medium group ">
            <span className="text-prm-red group-hover:text-prm-black transition-all duration-200 ease-linear">
              Pay a bill
            </span>
            <div className="bg-prm-red rounded-full px-[11px] py-[14px] group-hover:bg-prm-black transition-all duration-200 ease-linear">
              <ProductsArrowLeft />
            </div>
          </button>
        </div>
      </Container>
    </section>
  );
};
