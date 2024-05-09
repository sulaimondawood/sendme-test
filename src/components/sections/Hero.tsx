export const Hero = ({
  title,
  titleSpan,
  desc,
  btnText,
}: {
  title: string;
  titleSpan: string;
  desc: string;
  btnText: string;
}) => {
  return (
    <section className="pt-[188px] max-w-[720px] w-full mx-auto">
      <h1 className="text-[72px] text-center  tracking-[-2%] w-full">
        <span className="leading-[100.8px] font-bold font-aeonikRegular ">
          {title}
        </span>{" "}
        <span className="text-[#FFA900] font-aeonikLight font-light italic">
          {titleSpan}
        </span>
        .
      </h1>
      <p className="pt-4 text-center text-[#36454F] w-[706px] font-aeonikRegular text-[20px] leading-[24px]">
        {desc}
      </p>
      <button className="mt-6 font-aeonikBold text-center mx-auto block bg-[#000E25] rounded-[32px] py-3 px-[48px]">
        <p className="text-white text-[15px] leading-[21px]">{btnText}</p>
      </button>
    </section>
  );
};
