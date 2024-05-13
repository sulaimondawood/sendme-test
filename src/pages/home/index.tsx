import { Faq } from "../../components/sections/Faq";
import { Footer } from "../../components/sections/Footer";
import { Hero } from "../../components/sections/Hero";
import Marquee from "react-fast-marquee";
import Grid from "../../components/ui/Grid";
const Home = () => {
  return (
    <div className="bg-[#F8F3F0]">
      <div className="bg-[]"></div>
      <Hero
        classname="w-full max-w-[824px]"
        titleStyles="text-[40px] md:text-[102px] leading-[56px] md:leading-[112.2px] font-aeonikMedium"
        spanStyles="text-[#FFA900] font-besley font-normal italic -leading-[56px] md:leading-[100.8px]"
        title="Bridging hearts across"
        titleSpan="miles"
        desc="From doorstep deliveries to heartfelt donations, Sendsile provides a compassionate hub for supporting loved ones through grocery delivery, bill payment, and meaningful causes during life's most challenging moments."
        btnText="Get started"
      />

      <div className="mt-[115px]">
        <Marquee autoFill={true}>{/* <Grid/> */}</Marquee>
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
