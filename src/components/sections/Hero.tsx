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
    <section className="px-4 md:px-0 pt-6 md:pt-[188px] max-w-[720px] w-full mx-auto">
      <h1 className="text-[40px] md:text-[72px] text-center  tracking-[-2%] w-full">
        <span className="leading-[56px] md:leading-[100.8px] font-bold font-aeonikRegular ">
          {title}
        </span>{" "}
        <span className="text-[#FFA900] font-aeonikLight font-light italic -leading-[56px] md:leading-[100.8px]">
          {titleSpan}
        </span>
        .
      </h1>
      <p className="pt-4 text-center text-[#36454F] w-full md:w-[706px] font-aeonikRegular text-[17px] md:text-[20px] leading-[22px] md:leading-[24px]">
        {desc}
      </p>
      <button className="mt-6 font-aeonikBold text-center mx-auto block bg-[#000E25] rounded-[32px] py-3 px-[48px]">
        <p className="text-white text-[15px] leading-[21px]">{btnText}</p>
      </button>
    </section>
  );
};
