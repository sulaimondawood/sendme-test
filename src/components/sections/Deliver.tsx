import { Light } from "../svgs/Light";
import { Card } from "../ui/Card";
import CardImg1 from "../../assets/images/cardImg1.png";
import Visa from "../../assets/images/visa.png";
import Delivery from "../../assets/images/delivery.png";
import { Option } from "../svgs/Option";
import { Service } from "../svgs/Service";
import { Carousel } from "../ui/Carousel";

const slide = [
  {
    icon: <Light />,
    text: "Nourish your loved ones with the diversity they crave.",
    image: CardImg1,
    bg: "bg-[#F7F7F7]",
    textColor: "text-prm-black",
  },
  {
    icon: <Option />,
    text: "Diverse cross border payment options.",
    image: Visa,
    bg: "bg-black",
  },
  {
    icon: <Service />,
    text: "Swift service delivery to your loved ones.",
    image: Delivery,
  },
];

export const Deliver = () => {
  return (
    <section className="mt-[128px] w-full md:mt-[166px]">
      <h1 className="text-[24px] md:text-[42px] leading-[31px] md:leading-[55px] font-aeonikMedium text-center text-prm-black">
        Request . Pay . Deliver
      </h1>
      <p className="pt-4 px-4 md:px-0 text-[15px] md:text-[18px] font-aeonikRegular text-[#36454F] leading-[21px] md:leading-[25px] text-center w-full md:mx-auto  md:w-[643px]">
        From doorstep deliveries to heartfelt services, Sendsile provides a hub
        to support loved ones in Nigeria with for food, health and personal care
        services
      </p>

      <Carousel slides={slide} />
      <div className="hidden md:flex items-start gap-8 justify-center pt-14">
        <Card
          bg="bg-[#F7F7F7]"
          textColor="text-prm-black"
          icon={<Light />}
          img={CardImg1}
          text="Nourish your loved ones with the diversity they crave."
        />
        <Card
          bg="bg-black"
          icon={<Option />}
          img={Visa}
          text="Diverse cross border payment options."
        />
        <Card
          icon={<Service />}
          img={Delivery}
          text="Swift service delivery to your loved ones."
        />
      </div>
    </section>
  );
};
