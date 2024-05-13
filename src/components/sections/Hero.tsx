export const Hero = ({
  classname,
  titleStyles,
  spanStyles,
  title,
  titleSpan,
  desc,
  btnText,
}: {
  classname?: string;
  titleStyles?: string;
  spanStyles?: string;
  title: string;
  titleSpan: string;
  desc: string;
  btnText: string;
}) => {
  return (
    <section className={`${classname} px-4 md:px-0 pt-6 md:pt-[188px] mx-auto`}>
      <h1 className={`${titleStyles} text-center tracking-[-2%] w-full`}>
        <span className="">{title}</span>{" "}
        <span className={`${spanStyles}`}>{titleSpan}</span>.
      </h1>
      <p className="pt-4 text-center text-[#36454F] w-full font-aeonikRegular text-[17px] md:text-[20px] leading-[22px] md:leading-[28px]">
        {desc}
      </p>
      <button className="mt-6 font-aeonikBold text-center mx-auto block bg-[#000E25] rounded-[32px] py-4 px-[44px]">
        {/* <button className="mt-6 font-aeonikBold text-center mx-auto block bg-[#000E25] rounded-[32px] py-3 px-[48px]"> */}
        <p className="text-white text-[15px] leading-[21px]">{btnText}</p>
      </button>
    </section>
  );
};
