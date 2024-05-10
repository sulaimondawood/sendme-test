import { NavBar } from "./components/global/NavBar";
import { Deliver } from "./components/sections/Deliver";
import { Faq } from "./components/sections/Faq";
import { Footer } from "./components/sections/Footer";
import GridSection from "./components/sections/Grid";
import { Hero } from "./components/sections/Hero";
import Services from "./components/sections/Services";

const App = () => {
  return (
    <div className="">
      <>
        <NavBar />
      </>
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
      <Footer />
    </div>
  );
};

export default App;
