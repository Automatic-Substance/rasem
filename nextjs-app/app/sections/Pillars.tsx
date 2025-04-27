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
        "Architectural marvels and sanctuaries founded on a collective commitment to fostering the holistic wellbeing of individuals and communities with a shared love of life.",
      icon: <SpaceIcon />,
      imageOne: SpaceImageOne,
      imageTwo: SpaceImageTwo,
    },
    {
      title: "Environment",
      description:
        "A partnership with Mother Nature to craft harmonious and sustainable experiences that transcends generations.",
      icon: <EnvironmentIcon />,
      imageOne: EnvImageOne,
      imageTwo: EnvImageTwo,
    },
    {
      title: "Wellness",
      description:
        "Prioritising quality of life through the lens of holistic wellness, from the wisdom of ancient practices to modern therapies to nurture mental, physical and spiritual vitality.",
      icon: <WellnessIcon />,
      imageOne: WellnessImageOne,
      imageTwo: WellnessImageTwo,
    },
    {
      title: "Technology",
      description:
        "Seamlessly leveraging cutting-edge systems, biotechnology, and artificial intelligence into daily wellbeing habits, pushing the boundaries of what it means to live a quality life.",
      icon: <TechIcon />,
      imageOne: TechImageOne,
      imageTwo: TechImageTwo,
    },
    {
      title: "People",
      description:
        "Observing wellness not only as an individual pursuit but also as a collective responsibility in order to develop a healthy community.",
      icon: <PeopleIcon />,
      imageOne: PeopleImageOne,
      imageTwo: PeopleImageTwo,
    },
  ];

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
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
  return (
    <div className="relative w-full select-none">
      <div ref={sliderRef} className="relative overflow-hidden grid" {...props}>
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
        <div className="absolute left-24 bottom-12 flex gap-12">
          <div
            className="rotate-180 transition-all duration-200 ease-in-out hover:bg-primary/5 flex p-1 items-center justify-center rounded-full cursor-pointer"
            onClick={() => instanceRef.current?.prev()}
          >
            <ChevronIcon />
          </div>
          <div
            className="transition-all duration-200 ease-in-out hover:bg-primary/5 flex p-1 items-center justify-center rounded-full cursor-pointer"
            onClick={() => instanceRef.current?.next()}
          >
            <ChevronIcon />
          </div>
        </div>
      )}
    </div>
  );
}
