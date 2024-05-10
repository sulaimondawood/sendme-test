import { ReactNode } from "react";

interface ICard {
  icon: ReactNode;
  text: string;
  textColor?: string;
  img: any;
  bg?: string;
}

export const Card = ({
  icon,
  text,
  textColor = "text-white",
  img,
  bg = "bg-cardBg",
}: ICard) => {
  return (
    <div
      className={`min-w-[230px] md:w-[314px] h-[293px] md:h-[398px] flex flex-col justify-between rounded-[13px] md:rounded-[18px] pt-6 md:pt-8 px-[14px] md:px-5 pb-[17.5px] ${
        bg ? bg : "bg-cardBg"
      }`}
    >
      <div>
        <div className="w-5">{icon}</div>
        <p
          className={`${textColor} pt-4 text-base md:text-[22px] leading-[22.4px] md:leading-[30.8px] font-aeonikMedium w-full md:w-[277px]`}
        >
          {text}
        </p>
      </div>
      <img className="w-[282px] object-cover" src={img} alt="card image" />
    </div>
  );
};
