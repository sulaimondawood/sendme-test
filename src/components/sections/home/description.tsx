import { Container } from "../../global/Container";

export const Description = () => {
  return (
    <section className="bg-descriptionGradient pt-[115px] pb-[187px]">
      <Container>
        <div className="ml-[102px] mr-[105px] border-t bodrer-[#E1DFD0]"></div>
        <div className="pl-[102px] pr-[99px] pt-[87px] flex gap-11 items-end">
          <h1 className="font-aeonikRegular text-[84px] text-prm-black leading-[92px] w-full max-w-[594px]">
            <span>A better way to</span>{" "}
            <span className="italic font-besley font-normal">care</span>{" "}
            <span>for your loved ones</span>
          </h1>
          <div>
            <p className="text-[24px] w-full max-w-[600px] leading-[34px] text-prm-black font-aeonikRegular">
              In a world where distance separates hearts, Sendsile allows you
              provide essential care for family and friends, anywhere you are.
              Purchase farm fresh goods, pay electricity bills, create and share
              community donation causes close to your heart.
            </p>
            <button className="mt-8 bg-[#000E25] rounded-full text-[15px] leading-[21px] font-aeonikBold text-white py-[13.5px] px-[66.5px]">
              Try for free
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
