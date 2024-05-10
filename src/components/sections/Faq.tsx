import { Container } from "../global/Container";
import { Accordion } from "../ui/Accordion";
import Faqq from "../../assets/images/faq.png";

export const Faq = () => {
  const data = [
    {
      title: "What services does Sendsile offer? ",
      content:
        "Sendsile is a care platform that allows you to send a variety of items, including food, health products, and laundry services, to your loved ones in Africa. Our mission is to simplify the process of caring for your family and friends, no matter the distance.",
    },
    {
      title: "How does Sendsile service work? ",
      content:
        "On our platform, you can curate a personalized list of items you wish to send, from farm fresh food to essential health supplies or freshly laundered clothes. We'll then provide you with the prices for your selected items, and upon confirmation, you can securely make your payment. Your order will be processed promptly, ensuring your loved ones receive their items conveniently.",
    },
    {
      title: "How do I pay for the services on Sendsile?",
      content:
        "Sendsile will offer multiple convenient payment options, including debit cards and mobile wallets with payments made in dollars or pounds. Choose the payment method that suits you best during the payment process.",
    },
    {
      title: "How can I track my orders? ",
      content:
        "Once you are done signing up and logging in, you can track order status in real-time through our website after placing the order. You'll receive notifications at every stage of the delivery process, keeping you informed until your order reaches you.",
    },
    {
      title: "What should I do if I encounter an issue with my order?",
      content:
        "If you encounter any issues with your order, such as late delivery or incorrect items, please contact our customer support team immediately. We are here to assist you and resolve any concerns you may have.",
    },
    {
      title: "What delivery areas are covered by Sendsile? ",
      content:
        "Currently, our delivery services cover Nigeria, specifically Lagos State. However, we have plans to extend our reach to additional regions in the near future.",
    },
  ];
  return (
    <Container>
      <div className="flex relative flex-col gap-y-10 md:gap-y-0 md:flex-row justify-between px-4 md:px-[100px] mt-[104px] md:mt-[166px]">
        <div className="pr-[70px] md:pr-0 md:w-[345px]">
          <h1 className="text-[24px] md:text-[44px] leading-[29px] md:leading-[52px] text-black font-aeonikMedium">
            Some of the things you may want to know
          </h1>
          <p className="pt-4 text-lg leading-[25.2px] text-[#36454F] font-aeonikRegular">
            Explore answers without the need to pose the questions.
          </p>
          <img
            className="flex -top-10 right-0 absolute md:hidden"
            src={Faqq}
            alt="icon"
          />
        </div>
        <div className="w-full md:w-[748px] flex flex-col gap-4">
          {data.map((data, index) => {
            return (
              <Accordion
                key={index + data.title}
                title={data.title}
                content={data.content}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};
