"use client";
import { useRef } from "react";
import Image from "next/image";
import ImageOne from "@/app/assets/images/collective-vision-1.png";
import ImageTwo from "@/app/assets/images/collective-vision-2.webp";
import { FadeIn, Parallax } from "@/app/components/Animation";

interface CollectiveVisionProps {}

export default function CollectiveVision(props: CollectiveVisionProps) {
  const ref = useRef<any>();
  return (
    <>
      <div ref={ref} className="relative h-[300vh] bg-background" {...props}>
        <div className="w-full h-screen hidden sticky top-0 px-12 py-12 lg:flex">
          <FadeIn className="bg-black h-full flex-1 relative" delay={0.4}>
            <Parallax ref={ref}>
              <Image
                sizes="100vw"
                objectFit="cover"
                fill
                src={ImageOne}
                alt="Beach Image"
              />
            </Parallax>
          </FadeIn>
          <div className="h-full flex-1"></div>
          <FadeIn className="bg-black h-full flex-1 relative" delay={0.8}>
            <Parallax ref={ref}>
              <Image
                sizes="100vw"
                objectFit="cover"
                fill
                src={ImageTwo}
                alt="Fashionable room image"
              />
            </Parallax>
          </FadeIn>
        </div>
        <div
          id="collective-vision"
          className="flex flex-col gap-12 sticky top-0 z-10 lg:absolute w-full h-screen lg:top-auto lg:bottom-0 left-0 items-center justify-center"
        >
          <FadeIn className="text-3xl lg:text-6xl text-center">
            A<br />
            Collective
            <br />
            Vision
          </FadeIn>
          <FadeIn className="flex flex-col gap-4 relative" delay={0.4}>
            <div className="size-[4px] lg:size-[6px] bg-primary rounded-full"></div>
            <div className="size-[4px] lg:size-[6px] bg-primary rounded-full"></div>
          </FadeIn>
          <FadeIn className="flex flex-col items-center gap-14" delay={0.2}>
            <div className="text-3xl lg:text-6xl text-center">
              A Shared
              <br />
              <span className="italic">Love for</span>
              <br />
              <span className="italic">Life</span>
            </div>
            <div className="size-[4px] lg:size-[6px] bg-primary rounded-full"></div>
          </FadeIn>
        </div>
        <div className="lg:hidden bg-black h-screen w-full flex-1 absolute bottom-0 left-0 z-0">
          <Image
            sizes="100vw"
            objectFit="cover"
            fill
            src={ImageOne}
            alt="Beach Image"
          />
        </div>
      </div>
    </>
  );
}
