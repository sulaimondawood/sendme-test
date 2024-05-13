import { Deliver } from "../../components/sections/Deliver";
import { Faq } from "../../components/sections/Faq";
import GridSection from "../../components/sections/Grid";
import { Hero } from "../../components/sections/Hero";
import Services from "../../components/sections/Services";

const Waitlist = () => {
  return (
    <div className="">
      <Hero
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
