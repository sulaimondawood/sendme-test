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
    <div className="1440px:h-[509px] flex items-start gap-[18px]">
      <div className="relative h-full">
        <img className="" src={img1} alt="woman image" />
      </div>

      <div className="flex flex-col gap-[18px]">
        <div className="relative h-full">
          <img className="" src={img2} alt="woman image" />
          {nig && (
            <img
              className="absolute top-[7px] right-[7px]"
              src={nig}
              alt="woman image"
            />
          )}
        </div>
        <img className="" src={img3} alt="woman image" />
      </div>
    </div>
  );
};

export default Grid;
