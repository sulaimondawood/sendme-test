import useEmblaCarousel from "embla-carousel-react";
import { Card } from "./Card";
import { ReactNode } from "react";
import { DotButton, useDotButton } from "../hooks/emblaCarouselDot";

type Slide = {
  text: string;
  icon: ReactNode;
  image: any;
  bg?: string;
  textColor?: string;
};

export const Carousel = ({ slides }: { slides: Slide[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { onDotButtonClick, scrollSnaps, selectedIndex } =
    useDotButton(emblaApi);

  return (
    <div
      ref={emblaRef}
      className="block md:hidden w-full overflow-hidden pr-4 pt-10"
    >
      <div className="flex gap-6">
        {slides.map((slide, index) => {
          const { text, icon, image, bg, textColor } = slide;
          return (
            <Card
              bg={bg}
              key={index}
              textColor={textColor}
              icon={icon}
              img={image}
              text={text}
            />
          );
        })}
      </div>
      <div className="pt-4 flex gap-[2px]  justify-center items-center dooooot">
        {scrollSnaps.map((_, index) => {
          return (
            <DotButton
              onClick={() => onDotButtonClick(index)}
              className={`${
                index === selectedIndex
                  ? "bg-[#E4572E] size-[10px]"
                  : "bg-[#D9D9D9] size-2"
              } rounded-full`}
            />
          );
        })}
      </div>
    </div>
  );
};
