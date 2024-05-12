import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "../svgs/ArrowUp";
import { ArrowDown } from "../svgs/ArrowDown";

export const Accordion = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isOpen, setOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setHeight(ref.current!.getBoundingClientRect().height);
    console.log(height);
  }, [isOpen]);
  return (
    <div
      ref={ref}
      className={`bg-[#F7F7F7] rounded-[10px] p-6 ${
        isOpen ? "h-auto" : "h-fit overflow-hidden"
      } transition-all duration-200 ease-in-out`}
    >
      <div className="flex justify-between items-center">
        <h1
          onClick={() => setOpen(!isOpen)}
          className="cursor-pointer font-aeonikMedium text-[15px] md:text-[18px] leading-[21px] md:leading-[25.2px] text-prm-black"
        >
          {title}
        </h1>
        <button onClick={() => setOpen(!isOpen)}>
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>
      <p
        className={`${
          isOpen ? "h-full pt-4" : "h-0 overflow-hidden"
        } text-sm md:text-base leading-[22px] font-aeonikRegular text-prm-black `}
      >
        {content}
      </p>
    </div>
  );
};
