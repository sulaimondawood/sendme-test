import { Deliver } from "../../components/sections/Deliver";
import { Faq } from "../../components/sections/Faq";
import GridSection from "../../components/sections/Grid";
import { Hero } from "../../components/sections/Hero";
import Services from "../../components/sections/Services";

const Waitlist = () => {
  return (
    <div className="">
      <Hero
        classname="w-full max-w-[611px]"
        titleStyles="text-[40px] md:text-[88px] leading-[56px] md:leading-[112.2px] font-aeonikMedium"
        spanStyles="text-[#FFA900] font-aeonikLight font-normal italic -leading-[56px] md:leading-[100.8px]"
        title="Bridging hearts across"
        titleSpan="miles"
        desc="From doorstep deliveries to heartfelt services, Sendsile provides a hub to support loved ones with food, health and personal care services"
        btnText="Get started"
      />
      <GridSection />
      <Services />
      <Deliver />
      <Faq />
    </div>
  );
};

export default Waitlist;
