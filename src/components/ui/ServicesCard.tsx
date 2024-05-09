import One from "../../assets/images/o.png";

export const ServicesCard = () => {
  return (
    <div
      className={`md:hidden w-full cursor-pointer 
       pt-5 pb-7 pl-5 bg-[#FEF5EA] rounded-[16px]
      `}
    >
      <img
        className="h-[200px] w-full object-cover rounded-t-[10px]"
        src={One}
        alt=""
      />
      <div className="px-5">
        <h1 className="pt-5 text-[22px] leading-[30.8px] font-aeonikMedium text-prm-black">
          {/* {title} */}
          Quality laundry services
        </h1>
        <div className={` pt-2 w-full`}>
          <p className="text-[17px] leading-6 font-aeonikRegular text-[#536878]">
            {/* {desc} */}
            Impeccable laundry services to keep your loved ones fresh and
            comfortable.
          </p>

          <button className="pt-8 flex items-start gap-[9px] text-[#FFA900] text-[17px] leading-6 font-aeonikRegular font-semibold">
            {/* {buttonText} */}
            Learn more
            {/* <span>
            <img src={Arrow} alt="arrow" />
          </span> */}
          </button>
        </div>
      </div>
    </div>
  );
};
