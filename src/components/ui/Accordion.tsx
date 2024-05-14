import { useState } from "react";
import { ArrowUp } from "../svgs/ArrowUp";
import { ArrowDown } from "../svgs/ArrowDown";

export const Accordion = ({
  title,
  content,
  isActive,
  onClick,
}: {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={`bg-[#FAF5F1] rounded-[10px] p-6 ${
        isActive ? "h-auto" : "h-fit overflow-hidden"
      } transition-all duration-200 ease-in-out`}
    >
      <div className="flex justify-between items-center">
        <h1
          onClick={onClick}
          className="cursor-pointer font-aeonikMedium text-[15px] md:text-[18px] leading-[21px] md:leading-[25.2px] text-prm-black"
        >
          {title}
        </h1>
        <button onClick={onClick}>
          {isActive ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      <p
        className={`${
          isActive ? "h-full pt-4" : "h-0 overflow-hidden"
        } text-sm md:text-base leading-[22px] font-aeonikRegular text-prm-black `}
      >
        {content}
      </p>
    </div>
  );
};
