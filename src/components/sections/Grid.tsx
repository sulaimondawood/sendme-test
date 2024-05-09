import Grid from "../ui/Grid";
import Img1 from "../../assets/images/ok.png";
import Img2 from "../../assets/images/img2.png";
import Img21 from "../../assets/images/img21.png";
import Img22 from "../../assets/images/img22.png";
import Img23 from "../../assets/images/img23.png";
import Img3 from "../../assets/images/img3.png";
import Nig from "../../assets/images/nig.png";

const GridSection = () => {
  return (
    <div className="mt-24 flex items-start justify-center gap-[18px]">
      <Grid img1={Img1} img2={Img2} img3={Img3} nig={Nig} />
      <Grid img1={Img21} img2={Img22} img3={Img23} />
    </div>
  );
};

export default GridSection;
