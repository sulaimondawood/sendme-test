import { useState } from "react";
import { faqData } from "../../../utils/constants";
import { Container } from "../../global/Container";
import { Accordion } from "../../ui/Accordion";

export const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <Container>
      <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row gap-[85px] px-4 md:px-[100px] mt-[104px] md:mt-[166px]">
        <div className="pr-[70px] md:pr-0 md:w-[467px]">
          <h1 className="text-[24px] md:text-[60px] leading-[29px] md:leading-[66px] text-black font-aeonikRegular">
            Frequently asked{" "}
            <span className="font-besley italic">questions</span>{" "}
          </h1>
          <p className="pt-4 text-[22px] leading-[31.2px] text-[#36454F] font-aeonikRegular">
            Explore answers without the need to pose the questions.
          </p>
        </div>

        <div className="w-full md:w-[688px] flex flex-col gap-4">
          {faqData.map((data, index) => {
            return (
              <Accordion
                key={index + data.title}
                title={data.title}
                content={data.content}
                isActive={index === activeAccordion}
                onClick={() => handleAccordionClick(index)}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};
