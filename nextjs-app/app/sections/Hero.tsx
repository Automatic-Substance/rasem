"use client";

import Image from "next/image";
import HeroImage from "@/app/assets/images/hero_image.webp";
import { useCallback } from "react";
import { useLenis } from "lenis/react";

interface HeroProps {}

export default function Hero(props: HeroProps) {
  const lenis = useLenis();

  const discoverClick = useCallback(() => {
    if (lenis) {
      lenis.scrollTo(document.getElementById("collective-vision")!, {
        duration: 2,
      });
    }
  }, [lenis]);

  return (
    <div className="relative min-h-svh">
      <Image
        className="object-[10%_50%] lg:object-center"
        sizes="100vw"
        objectFit="cover"
        fill
        src={HeroImage}
        alt="Hero Image"
      />
      <div
        onClick={discoverClick}
        className="absolute z-10 flex flex-col items-center justify-center bottom-0 left-0 w-full gap-5 cursor-pointer text-white hover:text-white/60 transition-all duration-200 ease-in-out"
      >
        <div className="text-2xl italic">Discover</div>
        <div className="relative h-[50px] w-[1px] bg-white"></div>
      </div>
    </div>
  );
}
