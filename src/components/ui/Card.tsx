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
      className={`w-[314px] h-[398px] flex flex-col justify-between rounded-[18px] pt-8 px-5 pb-[17.5px] ${
        bg ? bg : "bg-cardBg"
      }`}
    >
      <div>
        {icon}
        <p
          className={`${textColor} pt-4 text-[22px] leading-[30.8px] font-aeonikMedium w-[277px]`}
        >
          {text}
        </p>
      </div>
      <img className="w-[282px] object-cover" src={img} alt="card image" />
    </div>
  );
};
