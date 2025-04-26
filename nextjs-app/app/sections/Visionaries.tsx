"use client";

import React, { useState } from "react";
import JuliaImage from "@/app/assets/images/profile-Julia.jpg";
import FrederikImage from "@/app/assets/images/profile-Frederik.jpg";
import Profile from "@/app/components/Profile";
import { useKeenSlider } from "keen-slider/react";

interface VisioniariesProps {}

export default function Visioniaries(props: VisioniariesProps) {
  const [ActiveIndex, setActiveIndex] = useState<number>(0);
  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 3.2,
      spacing: 50,
    },
    slideChanged: (slider) => {
      setActiveIndex(slider.track.details.rel);
    },
  });
  return (
    <div className="relative px-12 overflow-hidden mt-20 mb-32 cursor-grab [&]:active:cursor-grabbing">
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{ overflow: "unset" }}
        {...props}
      >
        <div className="keen-slider__slide">
          <Profile
            mode={1}
            name="SAFI QUrashi"
            title="LOREM IPSUM"
            description="Pioneering a new paradigm in ultra-luxury real estate by seamlessly
        integrating advanced technology, healthcare innovation, and holistic
        wellness. Donec sit amet erat sed neque vehicula convallis. Phasellus et
        ullamcorper tortor. Cras lacinia dignissim dui, vel ultricies lectus
        fringilla eget. Donec neque massa, tincidunt quis nunc at, vestibulum."
            image={FrederikImage}
          />
        </div>
        <div className="keen-slider__slide">
          <Profile
            mode={2}
            name="REGINE LABROSSE"
            title="LOREM IPSUM"
            description="Pioneering a new paradigm in ultra-luxury real estate by seamlessly
        integrating advanced technology, healthcare innovation, and holistic
        wellness. Donec sit amet erat sed neque vehicula convallis. Phasellus et
        ullamcorper tortor. Cras lacinia dignissim dui, vel ultricies lectus
        fringilla eget. Donec neque massa, tincidunt quis nunc at, vestibulum."
            image={JuliaImage}
          />
        </div>
        <div className="keen-slider__slide">
          <Profile
            mode={1}
            name="REGINE LABROSSE"
            title="LOREM IPSUM"
            description="Pioneering a new paradigm in ultra-luxury real estate by seamlessly
        integrating advanced technology, healthcare innovation, and holistic
        wellness. Donec sit amet erat sed neque vehicula convallis. Phasellus et
        ullamcorper tortor. Cras lacinia dignissim dui, vel ultricies lectus
        fringilla eget. Donec neque massa, tincidunt quis nunc at, vestibulum."
            image={JuliaImage}
          />
        </div>
        <div className="keen-slider__slide">
          <Profile
            mode={2}
            name="REGINE LABROSSE"
            title="LOREM IPSUM"
            description="Pioneering a new paradigm in ultra-luxury real estate by seamlessly
        integrating advanced technology, healthcare innovation, and holistic
        wellness. Donec sit amet erat sed neque vehicula convallis. Phasellus et
        ullamcorper tortor. Cras lacinia dignissim dui, vel ultricies lectus
        fringilla eget. Donec neque massa, tincidunt quis nunc at, vestibulum."
            image={JuliaImage}
          />
        </div>
      </div>
      <div className="relative h-[2px] w-full max-w-4xl bg-[#D9D9D9] m-auto mt-10">
        <div
          className="bg-primary absolute left-0 top-0 h-full transition-all duration-200 ease-in-out"
          style={{ width: `${((ActiveIndex + 1) / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
