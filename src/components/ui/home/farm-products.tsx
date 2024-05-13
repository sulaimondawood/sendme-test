export const FarmProduct = ({
  image,
  text,
  bg,
}: {
  image: any;
  text: string;
  bg: string;
}) => {
  return (
    <div>
      <div
        style={{ background: bg }}
        className={`w-[152px] h-[174px] rounded-[16px] flex flex-col items-start justify-center`}
      >
        <img src={image} alt="farm product image" />
      </div>
      <p className="pt-[10px] text-[#36454F] text-center text-sm leading-[20px] font-aeonikMedium">
        {text}
      </p>
    </div>
  );
};
