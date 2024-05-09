import { Light } from "../svgs/Light";
import { Card } from "../ui/Card";
import CardImg1 from "../../assets/images/cardImg1.png";
import Visa from "../../assets/images/visa.png";
import Delivery from "../../assets/images/delivery.png";
import { Option } from "../svgs/Option";
import { Service } from "../svgs/Service";

export const Deliver = () => {
  return (
    <section className="mt-[166px]">
      <h1 className="text-[42px] leading-[55px] font-aeonikMedium text-center text-prm-black">
        Request . Pay . Deliver
      </h1>
      <p className="pt-4 text-[18px] font-aeonikRegular text-[#36454F] leading-[25px] text-center mx-auto w-[643px]">
        From doorstep deliveries to heartfelt services, Sendsile provides a hub
        to support loved ones in Nigeria with for food, health and personal care
        services
      </p>

      <div className="flex items-start gap-8 justify-center pt-14">
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
          bg="bg-cardBg"
          icon={<Service />}
          img={Delivery}
          text="Swift service delivery to your loved ones."
        />
      </div>
    </section>
  );
};
