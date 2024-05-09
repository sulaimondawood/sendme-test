type TabType = {
  title: string;
  desc: string;
  buttonText: string;
  image: any;
};

export const TabContent = ({ tab }: { tab: TabType }) => {
  return <img src={tab.image} alt="tab image" />;
};
