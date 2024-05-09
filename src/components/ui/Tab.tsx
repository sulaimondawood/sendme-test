import { useState } from "react";
import TabImg from "../../assets/images/tabImg.png";
import { TabContent } from "./TabContent";
import { TabButton } from "./TabButton";

export const Tab = () => {
  const tab = [
    {
      id: 0,
      title: "Quality laundry services",
      desc: "Impeccable laundry services to keep your loved ones fresh and comfortable.",
      buttonText: "Learn more",
      image: TabImg,
    },
    {
      id: 1,
      title: "Farm fresh delights",
      desc: "Impeccable laundry services to keep your loved ones fresh and comfortable.",
      buttonText: "Learn more",
      image: TabImg,
    },
    {
      id: 2,
      title: "Healthcare plans",
      desc: "Impeccable laundry services to keep your loved ones fresh and comfortable.",
      buttonText: "Learn more",
      image: TabImg,
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="hidden mt-[90px] h-[337px] md:flex justify-center gap-[154px] items-start">
      <div className="w-[430px] flex flex-col gap-10">
        {tab.map((tab, index) => {
          return (
            <TabButton
              currentTab={currentTab}
              handleTab={() => setCurrentTab(tab.id)}
              key={index + tab.title}
              {...tab}
            />
          );
        })}
      </div>
      <TabContent tab={tab[currentTab]} />
    </div>
  );
};
