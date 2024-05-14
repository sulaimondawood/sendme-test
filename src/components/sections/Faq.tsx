import { Container } from "../global/Container";
import { Accordion } from "../ui/Accordion";
import Faqq from "../../assets/images/faq.png";
import { faqData } from "../../utils/constants";

export const Faq = () => {
  return (
    <Container>
      <div className="flex relative flex-col gap-y-10 md:gap-y-0 md:flex-row justify-between px-4 md:px-[100px] mt-[104px] md:mt-[166px]">
        <div className="pr-[70px] md:pr-0 md:w-[345px]">
          <h1 className="text-[24px] md:text-[44px] leading-[29px] md:leading-[52px] text-black font-aeonikMedium">
            Some of the things you may want to know
          </h1>
          <p className="pt-4 text-lg leading-[25.2px] text-[#36454F] font-aeonikRegular">
            Explore answers without the need to pose the questions.
          </p>
          <img
            className="flex -top-10 right-0 absolute md:hidden"
            src={Faqq}
            alt="icon"
          />
        </div>
        <div className="w-full md:w-[748px] flex flex-col gap-4">
          {faqData.map((data, index) => {
            return (
              <Accordion
                key={index + data.title}
                title={data.title}
                content={data.content}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};
