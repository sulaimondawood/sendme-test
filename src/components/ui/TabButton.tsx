import Arrow from "../../assets/images/arrow.png";

export const TabButton = ({
  id,
  title,
  desc,
  buttonText,
  handleTab,
  currentTab,
}: {
  id: number;
  title: string;
  desc: string;
  buttonText: string;
  currentTab: number;
  handleTab: () => void;
}) => {
  console.log(id);

  return (
    <div
      onClick={handleTab}
      className={`w-full cursor-pointer ${
        currentTab === id ? "pt-5 pb-7 pl-5 bg-[#FEF5EA] rounded-[16px]" : ""
      }`}
    >
      <h1 className="text-[22px] leading-[30.8px] font-aeonikMedium text-prm-black">
        {title}
      </h1>
      <div
        className={`${
          currentTab === id ? "h-[110px] transition-all" : "h-0"
        } overflow-hidden transition-all duration-150 ease-linear pt-2 w-[389px]`}
      >
        <p className="text-[17px] leading-6 font-aeonikRegular text-[#536878]">
          {desc}
        </p>

        <button className="pt-8 flex items-start gap-[9px] text-[#FFA900] text-[17px] leading-6 font-aeonikRegular font-semibold">
          {buttonText}
          <span>
            <img src={Arrow} alt="arrow" />
          </span>
        </button>
      </div>
    </div>
  );
};
