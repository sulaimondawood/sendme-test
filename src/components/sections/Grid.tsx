// const GridSection = () => {
//   return (
//     <img
//       className="w-full object-center 2xl:object-cover h-[509px] 2xl:h-full mt-24"
//       src={Grid}
//       alt="grid image"
//     />
//   );
// };

// export default GridSection;
import Grid from "../ui/Grid";
import Img1 from "../../assets/images/ok.png";
import Img2 from "../../assets/images/img2.png";
import Img21 from "../../assets/images/img21.png";
import Img22 from "../../assets/images/img22.png";
import Img23 from "../../assets/images/img23.png";
import Img3 from "../../assets/images/img3.png";
import Nig from "../../assets/images/nig.png";
import Marquee from "react-fast-marquee";

const GridSection = () => {
  return (
    <Marquee autoFill={true}>
      <div className="mt-[71px] md:mt-24 flex justify-start items-start ">
        <Grid img1={Img1} img2={Img2} img3={Img3} nig={Nig} />
        <Grid img1={Img21} img2={Img22} img3={Img23} />
      </div>
    </Marquee>
  );
};

export default GridSection;
