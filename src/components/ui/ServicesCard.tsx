import Arrow from "../../assets/images/arrow.png";

interface ITabData {
  id: number;
  title: string;
  desc: string;
  buttonText: string;
  image: any;
}

export const ServicesCard = ({ title, desc, buttonText, image }: ITabData) => {
  return (
    <div
      className={`w-full cursor-pointer 
        pb-7 bg-[#FEF5EA] rounded-[16px]
      `}
    >
      <img
        className="h-[200px] w-full object-cover rounded-t-[10px]"
        src={image}
        alt="service image"
      />
      <div className="px-5">
        <h1 className="pt-5 text-[22px] leading-[30.8px] font-aeonikMedium text-prm-black">
          {title}
        </h1>
        <div className={` pt-2 w-full`}>
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
    </div>
  );
};
