type TabType = {
  title: string;
  desc: string;
  buttonText: string;
  image: any;
};

export const TabContent = ({ tab }: { tab: TabType }) => {
  return (
    <img
      className="w-[650px] object-cover object-center rounded-[15px]"
      src={tab.image}
      alt="tab image"
    />
  );
};
