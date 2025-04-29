"use client";
import React, { useState } from "react";
import JuliaImage from "@/app/assets/images/profile-Julia.jpg";
import FrederikImage from "@/app/assets/images/profile-Frederik.jpg";
import JonasImage from "@/app/assets/images/profile-Jonas-Bjerre-Poulsen-kopier-1-scaled.jpg";
import SandieImage from "@/app/assets/images/profile-Sandie-web-1280x1760.jpg";
import Profile from "@/app/components/Profile";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import { animation } from "@/app/components/Animation";

export default function ProfileSlider({ ...props }) {
  const [ActiveIndex, setActiveIndex] = useState<number>(0);
  const [sliderRef] = useKeenSlider({
    initial: 0,
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 50 },
      },
    },
    slides: {
      perView: 1.5,
      spacing: 20,
    },
    slideChanged: (slider) => {
      setActiveIndex(slider.track.details.rel);
    },
  });
  return (
    <div>
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{ overflow: "unset" }}
        {...props}
      >
        <div className="keen-slider__slide">
          <motion.div variants={animation}>
            <Profile
              mode={1}
              name="SAFI QUrashi"
              title="LOREM IPSUM"
              description="Pioneering a new paradigm in ultra-luxury real estate by seamlessly
        integrating advanced technology, healthcare innovation, and holistic
        wellness. Donec sit amet erat sed neque vehicula convallis. Phasellus et
        ullamcorper tortor. Cras lacinia dignissim dui, vel ultricies lectus
        fringilla eget. Donec neque massa, tincidunt quis nunc at, vestibulum."
              image={JonasImage}
            />
          </motion.div>
        </div>
        <div className="keen-slider__slide">
          <motion.div variants={animation}>
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
          </motion.div>
        </div>
        <div className="keen-slider__slide">
          <motion.div variants={animation}>
            <Profile
              mode={1}
              name="REGINE LABROSSE"
              title="LOREM IPSUM"
              description="Pioneering a new paradigm in ultra-luxury real estate by seamlessly
        integrating advanced technology, healthcare innovation, and holistic
        wellness. Donec sit amet erat sed neque vehicula convallis. Phasellus et
        ullamcorper tortor. Cras lacinia dignissim dui, vel ultricies lectus
        fringilla eget. Donec neque massa, tincidunt quis nunc at, vestibulum."
              image={SandieImage}
            />
          </motion.div>
        </div>
        <div className="keen-slider__slide">
          <motion.div variants={animation}>
            <Profile
              mode={2}
              name="REGINE LABROSSE"
              title="LOREM IPSUM"
              description="Pioneering a new paradigm in ultra-luxury real estate by seamlessly
        integrating advanced technology, healthcare innovation, and holistic
        wellness. Donec sit amet erat sed neque vehicula convallis. Phasellus et
        ullamcorper tortor. Cras lacinia dignissim dui, vel ultricies lectus
        fringilla eget. Donec neque massa, tincidunt quis nunc at, vestibulum."
              image={FrederikImage}
            />
          </motion.div>
        </div>
      </div>
      <div className="relative h-[2px] w-4/6 lg:w-full max-w-4xl bg-[#D9D9D9] m-auto mt-16 lg:mt-10">
        <div
          className="bg-primary absolute left-0 top-0 h-full transition-all duration-200 ease-in-out"
          style={{ width: `${((ActiveIndex + 1) / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
