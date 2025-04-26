"use client";

import React, { useState } from "react";
import JuliaImage from "@/app/assets/images/profile-Julia.jpg";
import FrederikImage from "@/app/assets/images/profile-Frederik.jpg";
import Profile from "@/app/components/Profile";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import CanyonImage from "@/app/assets/images/canyons.png";

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
    <div className="bg-background">
      <div className="mx-12 grid grid-cols-9 gap-12 mt-24">
        <div className="col-span-4 aspect-[.744] relative">
          <Image
            sizes="100vw"
            objectFit="cover"
            fill
            src={CanyonImage}
            alt="Canyon Image"
          />
        </div>
        <div className="col-span-5 px-10 flex items-center">
          <div className="flex flex-col gap-14 items-start">
            <h2 className="text-6xl leading-[1.5]">
              A <span className="italic">Collaboration</span>
              <br />
              Between
              <br />A Team of <span className="italic">Visionaries</span>
            </h2>
            <div className="flex flex-col gap-6 relative left-[40%]">
              <div className="size-[6px] bg-primary rounded-full"></div>
              <div className="size-[6px] bg-primary rounded-full"></div>
              <div className="size-[6px] bg-primary rounded-full"></div>
              <div className="size-[6px] bg-primary rounded-full"></div>
            </div>
            <p className="text-xl relative left-[40%] w-[60%]">
              The new global benchmark for wellness real estate where
              cutting-edge science, heritage, and bespoke luxury coexist. The
              brand’s mission is to create environments where elite living
              converges with transformative well-being solutions.
            </p>
          </div>
        </div>
      </div>
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
    </div>
  );
}
