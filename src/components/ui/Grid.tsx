const Grid = ({
  img1,
  img2,
  img3,
  nig,
}: {
  img1: any;
  img2: any;
  img3: any;
  nig?: any;
}) => {
  return (
    <div className="ml-[10px] md:ml-[18px] flex items-start gap-[10px] md:gap-[18px]">
      <div className="relative h-[297px] md:h-[509px]">
        <img className="h-full" src={img1} alt="woman image" />
      </div>

      <div className="flex flex-col gap-[10px] md:gap-[18px]">
        <div className="relative h-[143px] lg:h-[245px]">
          <img className="h-full" src={img2} alt="woman image" />
          {nig && (
            <img
              className="absolute top-[7px] right-[7px]"
              src={nig}
              alt="woman image"
            />
          )}
        </div>
        <img className="h-[143px] md:h-[245px]" src={img3} alt="woman image" />
      </div>
    </div>
  );
};

export default Grid;
