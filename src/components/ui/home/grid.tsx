const LandingGrid = ({
  img1,
  img2,
  img3,
  text,
}: {
  img1: any;
  img2: any;
  img3: any;
  text?: string;
}) => {
  return (
    <div className="ml-[10px] md:ml-[18px] flex items-start gap-[10px] md:gap-[20px]">
      <div className="relative h-[297px] md:h-[516px] w-[464px] rounded-[24px]">
        <img
          className="h-full w-full rounded-[24px]"
          src={img1}
          alt="grid image"
        />
        <span className="uppercase absolute top-4 left-4 text-[#36454F] text-[13px] leading-[18.2px] py-[7px] px-4 bg-[#E4E4E4] rounded-full">
          {text}
        </span>
      </div>

      <div className="flex flex-col gap-[10px] md:gap-[24px]">
        <img
          className=" w-[312px] h-[143px] lg:h-[246px] rounded-[24px]"
          src={img2}
          alt="grid image"
        />

        <img
          className=" w-[312px] h-[143px] lg:h-[246px] rounded-[24px]"
          src={img3}
          alt="grid image"
        />
      </div>
    </div>
  );
};

export default LandingGrid;
