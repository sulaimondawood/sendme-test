export const PaymentCard = ({
  title,
  desc,
  image,
  bgColor,
  bgInnerColor,
}: {
  title: string;
  desc: string;
  image: any;
  bgColor: string;
  bgInnerColor?: string;
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="px-[10px] w-[375px] group relative h-[543px] rounded-[20px]"
    >
      <img
        className="w-full group-even:absolute group-even:bottom-0 group-even:right-1 "
        src={image}
        alt="image"
      />
      <div
        style={{ backgroundColor: bgInnerColor }}
        className={`rounded-[10px] py-[18px] ${
          bgInnerColor ? "pl-[18px] pr-[12px]" : "pl-[18px] pr-[27px]"
        } `}
      >
        <h1
          className={`text-[22px] leading-[31px]  ${
            bgInnerColor ? "text-prm-black" : "text-[#E5EBEF]"
          } italic font-besley font-mediu`}
        >
          {title}
        </h1>
        <p
          className={`text-[17px] leading-[24px] ${
            bgInnerColor ? "text-prm-black" : "text-[#E5EBEF]"
          }  pt-4`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};
