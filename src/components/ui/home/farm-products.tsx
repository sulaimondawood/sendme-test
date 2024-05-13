export const FarmProducts = ({
  image,
  text,
  bg,
}: {
  image: any;
  text: string;
  bg: string;
}) => {
  return (
    <div className={`w-[152px] ${bg}`}>
      <img src={image} alt="farm product image" />
      <p className="text-[#36454F] text-sm leading-[20px] font-aeonikMedium">
        {text}
      </p>
    </div>
  );
};
