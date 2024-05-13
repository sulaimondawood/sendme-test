import { landingPageFarmProducts } from "../../../utils/constants";
import { Container } from "../../global/Container";
import { ProductsArrowLeft } from "../../svgs/products-arrow-left";
import { FarmProduct } from "../../ui/home/farm-products";

export const FarmProducts = () => {
  return (
    <section className="bg-[#FAF8F0] pt-16 px-[99.5px]">
      <Container>
        <h1 className="pb-16 w-full max-w-[942px] mx-auto font-aeonikRegular text-[72px] leading-[72px] text-center  text-prm-black">
          Nourish and nurture:{" "}
          <span className="font-besley italic"> farm fresh</span> products
          delivered with love
        </h1>
        <div className="flex items-center mx-auto w-fit flex-col">
          <div className="bg-white rounded-[20px] py-[39px] px-16 flex items-center gap-10">
            {landingPageFarmProducts.map((product, index) => {
              return (
                <FarmProduct
                  key={index}
                  bg={product.bg}
                  image={product.image}
                  text={product.text}
                />
              );
            })}
          </div>
          <button className="mt-6 mb-5 self-end flex items-center gap-[20px] text-[20px] leading-7 font-medium group ">
            <span className="text-prm-red group-hover:text-prm-black transition-all duration-200 ease-linear">
              Shop all
            </span>
            <div className="bg-prm-red rounded-full px-[11px] py-[14px] group-hover:bg-prm-black transition-all duration-200 ease-linear">
              <ProductsArrowLeft />
            </div>
          </button>
        </div>
      </Container>
    </section>
  );
};
