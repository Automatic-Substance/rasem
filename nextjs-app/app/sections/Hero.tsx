"use client";

import Image from "next/image";
import HeroImage from "@/app/assets/images/hero_image_2.png";
import { useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  const discover_opacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);
  return (
    <div className="relative min-h-svh bg-primary-background" ref={ref}>
      <motion.div className="absolute size-full" style={{ y, opacity }}>
        <Image
          className="object-[10%_50%] lg:object-center"
          sizes="1200px"
          objectFit="cover"
          fill
          src={HeroImage}
          alt="Hero Image"
        />
      </motion.div>

      <motion.div
        style={{ opacity: discover_opacity }}
        onClick={discoverClick}
        className="absolute z-10 flex flex-col items-center justify-center bottom-0 left-0 w-full gap-5 cursor-pointer text-white hover:text-white/60 transition-all duration-200 ease-in-out"
      >
        <div className="text-2xl italic">Discover</div>
        <div className="relative h-[50px] w-[1px] bg-white"></div>
      </motion.div>
    </div>
  );
}
