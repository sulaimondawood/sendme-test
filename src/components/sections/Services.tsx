import { Container } from "../global/Container";
import { Flower } from "../svgs/flower";
import { ServicesCard } from "../ui/ServicesCard";

import { Tab } from "../ui/Tab";
import { tab } from "../ui/Tab";

const Services = () => {
  console.log(tab);

  return (
    <section className="bg-servicesGradient px-4 md:px-0">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center  md:pl-[102px] md:pr-[88px] pt-[70px] md:pt-[130px] pb-[56px] md:pb-[156px]">
          <div className="flex items-center">
            <h1 className="text-[24px] md:text-[52px] leading-[29px] md:leading-[62px] font-aeonikMedium w-full md:w-[343px]">
              Sendsile has you covered
            </h1>

            <div className="w-[41px] md:w-[98px] h-[40px] md:h-[94px]">
              <Flower />
            </div>
          </div>
          <p className="pt-6 md:pt-0 text-prm-black w-full md:w-[643px] text-[15px] md:text-[24px] leading-[21px] md:leading-[34px] font-aeonikRegular">
            In a world where distance separates hearts, we provide fresh farm
            foods, meal plans and personalized care services for your loved
            ones.
          </p>
        </div>

        <div className="flex gap-8 items-center md:pl-[102px] md:pr-[105px]">
          <h1 className="uppercase min-w-[135px] md:w-auto text-[#36454F] text-[17px] leading-5 font-aeonikMedium">
            What we offer
          </h1>
          <div className="h-[1px] w-full md:w-[1066px] bg-[#E1DFD0]"></div>
        </div>
        <>
          <div className="w-full pt-10 flex flex-col gap-6 md:hidden">
            {tab.map((tab, index) => {
              return <ServicesCard key={index} {...tab} />;
            })}
          </div>
          <Tab />
        </>
      </Container>
    </section>
  );
};

export default Services;
