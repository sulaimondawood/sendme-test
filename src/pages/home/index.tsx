import { Faq } from "../../components/sections/Faq";
import { Hero } from "../../components/sections/Hero";
import Marquee from "react-fast-marquee";
import LandingGrid from "../../components/ui/home/grid";

import Img1 from "../../assets/images/marquee/marque1.png";
import Img2 from "../../assets/images/marquee/marque2.png";
import Img3 from "../../assets/images/marquee/marque3.png";
import Img4 from "../../assets/images/marquee/marque4.png";
import Img5 from "../../assets/images/marquee/marque5.png";
import Img6 from "../../assets/images/marquee/marque6.png";
import Img7 from "../../assets/images/marquee/marque7.png";
import Img8 from "../../assets/images/marquee/marque8.png";
import Img9 from "../../assets/images/marquee/marque9.png";
import { Description } from "../../components/sections/home/description";
import { FarmProducts } from "../../components/sections/home/farm-products";
import { Services } from "../../components/sections/home/services";
import { Community } from "../../components/sections/home/community";
import { Payment } from "../../components/sections/home/payment";

const Home = () => {
  return (
    <div className="bg-[#FEFFFE]">
      <div className="bg-[#F8F3F0]">
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
          <Marquee autoFill={true}>
            <LandingGrid
              img1={Img1}
              img2={Img2}
              img3={Img3}
              text="COMMUNITY DONATIONS"
            />
            <LandingGrid
              img1={Img4}
              img2={Img5}
              img3={Img6}
              text="Grocery delivery"
            />
            <LandingGrid
              img1={Img7}
              img2={Img8}
              img3={Img9}
              text="Bill payment"
            />
          </Marquee>
        </div>
      </div>
      <Description />
      <FarmProducts />
      <Services />
      <Community />
      <Payment />
      <Faq />
    </div>
  );
};

export default Home;
