import { Container } from "../../global/Container";
import { ProductsArrowLeft } from "../../svgs/products-arrow-left";
import CommImage from "../../../assets/images/community-image.png";
import CommImage2 from "../../../assets/images/community-image-2.png";

export const Community = () => {
  return (
    <section className="mt-4 bg-[#FFFCF7] ">
      <Container>
        <div className="pt-[84px] pl-[100px] relative">
          <h1 className="text-prm-black text-[72px] leading-[72px] w-full max-w-[993px]">
            Give back through community{" "}
            <span className="font-besley italic">donations</span>
          </h1>
          <p className="pt-8 w-full max-w-[503px] font-aeonikRegular text-[24px] leading-[34px] text-prm-black">
            Make positive in your community back home. Easily create fundrasing
            campaigns or contribute to existing causes focused on vital areas
            like education, clean water access and renewable energy solutions
          </p>
          <button className="mt-8 pb-[209px] flex items-center gap-[20px] text-[20px] leading-7 font-medium group ">
            <span className="text-prm-red group-hover:text-prm-black transition-all duration-200 ease-linear">
              Create a cause
            </span>
            <div className="bg-prm-red rounded-full px-[11px] py-[14px] group-hover:bg-prm-black transition-all duration-200 ease-linear">
              <ProductsArrowLeft />
            </div>
          </button>

          <img
            className="absolute bottom-[52px] right-[265px] rounded-[20px]"
            src={CommImage}
            alt="community image"
          />
          <img
            className="absolute bottom-[105px] right-[100px]"
            src={CommImage2}
            alt="community image"
          />
        </div>
      </Container>
    </section>
  );
};
