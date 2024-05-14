import { paymentMethod } from "../../../utils/constants";
import { Container } from "../../global/Container";
import { PaymentCard } from "../../ui/home/payment-card";

export const Payment = () => {
  return (
    <Container>
      <section className="mt-20 bg-[#161618] rounded-[40px] py-[84px] px-[42px] mx-[100px]">
        <h1 className="pb-20 text-[80px] text-white font-aeonikRegular leading-[80px] text-center">
          We’ve made it very <span className="font-besley italic">easy</span>
        </h1>
        <div className="flex gap-x-4">
          {paymentMethod.map((item, index) => {
            return <PaymentCard {...item} key={index} />;
          })}
        </div>
      </section>
    </Container>
  );
};
