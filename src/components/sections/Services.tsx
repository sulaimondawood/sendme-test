import { Container } from "../global/Container";
import { Flower } from "../svgs/flower";
import { ServicesCard } from "../ui/ServicesCard";
import { Tab } from "../ui/Tab";

const Services = () => {
  return (
    <section className="bg-servicesGradient">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:pl-[102px] md:pr-[88px] pt-[130px] pb-[128px] md:pb-[156px]">
          <div className="flex  items-center">
            <h1 className="text-[24px] md:text-[52px] leading-[29px] md:leading-[62px] font-aeonikMedium w-[343px]">
              Sendsile has you covered
            </h1>
            {/* <Flower /> */}
            <Flower />
          </div>
          <p className="text-prm-black w-[643px] text-[24px] leading-[34px] font-aeonikRegular">
            In a world where distance separates hearts, we provide fresh farm
            foods, meal plans and personalized care services for your loved
            ones.
          </p>
        </div>

        <div className="flex gap-8 items-center px-4 md:pl-[102px] md:pr-[105px]">
          <h1 className="uppercase min-w-[135px] md:w-auto text-[#36454F] text-[17px] leading-5 font-aeonikMedium">
            What we offer
          </h1>
          <div className="h-[1px] w-full md:w-[1066px] bg-[#E1DFD0]"></div>
        </div>

        <>
          <ServicesCard />
          <Tab />
        </>
      </Container>
    </section>
  );
};

export default Services;
