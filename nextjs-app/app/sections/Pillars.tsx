"use client";

import Pillar from "@/app/components/Pillar";
import { useKeenSlider } from "keen-slider/react";
import SpaceImageOne from "@/app/assets/images/pillar-space-1.png";
import SpaceImageTwo from "@/app/assets/images/pillar-space-2.png";
import SpaceIcon from "@/app/assets/icons/spaces-graphic.svg";
import EnvImageOne from "@/app/assets/images/pillar-env-1.webp";
import EnvImageTwo from "@/app/assets/images/pillar-env-2.png";
import EnvironmentIcon from "@/app/assets/icons/environment-graphic.svg";
import WellnessImageOne from "@/app/assets/images/pillar-wellness-1.png";
import WellnessImageTwo from "@/app/assets/images/pillar-wellness-2.webp";
import WellnessIcon from "@/app/assets/icons/wellness-graphic.svg";
import TechImageOne from "@/app/assets/images/pillar-tech-1.png";
import TechImageTwo from "@/app/assets/images/pillar-tech-2.png";
import TechIcon from "@/app/assets/icons/technology-graphic.svg";
import PeopleImageOne from "@/app/assets/images/pillar-people-1.png";
import PeopleImageTwo from "@/app/assets/images/pillar-people-2.webp";
import PeopleIcon from "@/app/assets/icons/people-graphic.svg";
import cn from "classnames";

import ChevronIcon from "@/app/assets/icons/chevron.svg";

import React, { useState } from "react";

interface PillarsProps {}

export default function Pillars(props: PillarsProps) {
  const [opacities, setOpacities] = useState<number[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const slides = [
    {
      title: "Spaces",
      description:
        "With both form and function in mind, spaces can be as much a sanctuary, as they are stimulus for inspiration. To live with greater intention, we must reshape our perspective, and perspective begins with our surroundings. ",
      icon: <SpaceIcon />,
      imageOne: SpaceImageOne,
      imageTwo: SpaceImageTwo,
    },
    {
      title: "Environment",
      description:
        "The world we shape, we shape for generations to come. To sustain progress, we create with purpose– choosing environments that awaken presence and spark connection, while transforming them for the better without compromising the surrounding ecosystem.",
      icon: <EnvironmentIcon />,
      imageOne: EnvImageOne,
      imageTwo: EnvImageTwo,
    },
    {
      title: "Wellness",
      description:
        "The mastery of time and life requires the mastery of mind and body. Our blend of ancient wisdom and cutting-edge science designs lifestyles that heal, transform, and enhance, ultimately elevating vitality. ",
      icon: <WellnessIcon />,
      imageOne: WellnessImageOne,
      imageTwo: WellnessImageTwo,
    },
    {
      title: "Technology",
      description:
        "A catalyst of advancements– through partnerships with exceptional brands and extraordinary people, we pioneer solutions that disrupt what is possible ​with the human body, longevity, and the way we live. ​",
      icon: <TechIcon />,
      imageOne: TechImageOne,
      imageTwo: TechImageTwo,
    },
    {
      title: "People",
      description:
        "From design to technology, everything begins with those who embark on this journey and a shared commitment to values that uplift and support. It is through kindness, empathy, and collaboration that we find the wisdom to guide together",
      icon: <PeopleIcon />,
      imageOne: PeopleImageOne,
      imageTwo: PeopleImageTwo,
    },
  ];

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: false,
    slides: slides.length,
    created() {
      setLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
  });

  const navClasses =
    "transition-all duration-200 ease-in-out italic hover:text-primary/50 flex p-1 items-center justify-center cursor-pointer text-base lg:text-lg";

  return (
    <div className="relative w-full select-none bg-white py-32 lg:py-24">
      <div className="relative w-ful">
        <div
          ref={sliderRef}
          className="relative overflow-hidden grid"
          {...props}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="[grid-area:1/1]"
              style={{ opacity: opacities[idx] }}
            >
              <Pillar
                title={slide.title}
                description={slide.description}
                icon={slide.icon}
                imageOne={slide.imageOne}
                imageTwo={slide.imageTwo}
              />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div className="absolute pl-10 pr-10 w-full lg:pl-24 lg:pr-12 lg:w-1/2 -bottom-16 lg:bottom-8 xl:bottom-24 min-[1900px]:bottom-72 flex justify-between">
            <div
              className={cn(navClasses, { "opacity-0": currentSlide === 0 })}
              onClick={() => instanceRef.current?.prev()}
            >
              ← Previous
            </div>
            <div
              className={cn(navClasses, {
                "opacity-0": currentSlide === slides.length - 1,
              })}
              onClick={() => instanceRef.current?.next()}
            >
              Next →
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
