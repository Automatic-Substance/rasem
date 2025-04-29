"use client";

import React, { useState } from "react";
import JuliaImage from "@/app/assets/images/profile-Julia.jpg";
import FrederikImage from "@/app/assets/images/profile-Frederik.jpg";
import JonasImage from "@/app/assets/images/profile-Jonas-Bjerre-Poulsen-kopier-1-scaled.jpg";
import SandieImage from "@/app/assets/images/profile-Sandie-web-1280x1760.jpg";
import Profile from "@/app/components/Profile";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import CanyonImage from "@/app/assets/images/canyons.png";
import { motion } from "framer-motion";
import { StaggerIn, animation } from "@/app/components/Animation";

interface VisioniariesProps {}

export default function Visioniaries(props: VisioniariesProps) {
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
    <div className="bg-background">
      <StaggerIn className="lg:hidden mx-10 mt-16">
        <div className="flex flex-col gap-8 items-center">
          <motion.h2 variants={animation} className="text-3xl leading-[1.4]">
            A <span className="italic">Collaboration</span>
            <br />
            between
            <br />A Team of <span className="italic">Visionaries</span>
          </motion.h2>
          <motion.div
            variants={animation}
            className="flex flex-col gap-4 relative"
          >
            <div className="size-[4px] bg-primary rounded-full"></div>
            <div className="size-[4px] bg-primary rounded-full"></div>
            <div className="size-[4px] bg-primary rounded-full"></div>
            <div className="size-[4px] bg-primary rounded-full"></div>
          </motion.div>
          <motion.div
            variants={animation}
            className="w-full aspect-[.672] relative"
          >
            <Image
              sizes="100vw"
              objectFit="cover"
              fill
              src={CanyonImage}
              alt="Canyon Image"
            />
          </motion.div>
          <div className="text-base relative mt-3 space-y-5">
            <motion.p variants={animation}>
              RASEM [rā·sem]: to sketch or illustrate with intention
            </motion.p>
            <motion.p variants={animation}>
              Bound by a shared purpose to shape a new paradigm of living, the
              visionaries behind RASEM etch innovation and intent across an
              enriched canvas - where lifeophilic design finds its form.
            </motion.p>
          </div>
        </div>
      </StaggerIn>
      <StaggerIn className="hidden lg:grid mx-12 grid-cols-9 gap-12 mt-24">
        <motion.div
          variants={animation}
          className="col-span-4 aspect-[.744] relative"
        >
          <Image
            sizes="100vw"
            objectFit="cover"
            fill
            src={CanyonImage}
            alt="Canyon Image"
          />
        </motion.div>
        <div className="col-span-5 px-10 flex items-center">
          <div className="flex flex-col gap-14 items-start">
            <motion.h2 variants={animation} className="text-5xl leading-[1.5]">
              A <span className="italic">Collaboration</span>
              <br />
              between
              <br />A Team of <span className="italic">Visionaries</span>
            </motion.h2>
            <motion.div
              variants={animation}
              className="flex flex-col gap-6 relative left-[40%]"
            >
              <div className="size-[6px] bg-primary rounded-full"></div>
              <div className="size-[6px] bg-primary rounded-full"></div>
              <div className="size-[6px] bg-primary rounded-full"></div>
              <div className="size-[6px] bg-primary rounded-full"></div>
            </motion.div>
            <div className="text-xl relative left-[40%] w-[60%] space-y-5">
              <motion.p variants={animation}>
                RASEM [rā·sem]: to sketch or illustrate with intention
              </motion.p>
              <motion.p variants={animation}>
                Bound by a shared purpose to shape a new paradigm of living, the
                visionaries behind RASEM etch innovation and intent across an
                enriched canvas - where lifeophilic design finds its form.
              </motion.p>
            </div>
          </div>
        </div>
      </StaggerIn>
      <StaggerIn className="relative px-5 lg:px-12 overflow-hidden mt-20 lg:mt-28 mb-8 lg:mb-32 cursor-grab [&]:active:cursor-grabbing">
        <h2 className="lg:hidden uppercase text-[10px] font-heading text-center mb-8 tracking-widest">
          Partners
        </h2>
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
      </StaggerIn>
    </div>
  );
}
