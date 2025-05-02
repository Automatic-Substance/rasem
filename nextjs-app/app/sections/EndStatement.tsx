"use client";

import Image from "next/image";
import MobileImage from "@/app/assets/images/ClosingImage+Tagline_Portrait2.jpg";
import BigImage from "@/app/assets/images/ClosingImage+Tagline_Landscape.jpg";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef } from "react";

interface EndStatementProps {}

export default function EndStatement(props: EndStatementProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const scale = useMotionValue(1.02);

  const text_opacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  return (
    <div
      ref={ref}
      className="relative aspect-[0.64] lg:aspect-auto lg:h-svh bg-primary-background overflow-hidden z-30"
    >
      <div className="z-10 relative size-full text-primary flex items-center justify-center px-5">
        <motion.div
          style={{ opacity: text_opacity }}
          className="w-full max-w-xl text-center space-y-6 lg:space-y-14 pb-20 lg:pb-36"
        >
          {/* <h2 className="text-2xl lg:text-5xl font-normal">
            Where <span className="italic">time</span>
            <br />
            is not measured,
            <br />
            <br />
            but <span className="italic">mastered</span>.
          </h2> */}
          {/* <p className="uppercase font-heading tracking-widest text-[10px] lg:text-base">
            A vision materialising in 2026.
          </p> */}
        </motion.div>
      </div>
      <motion.div
        className="absolute size-full z-0 top-0 left-0 scale-125"
        style={{ y, opacity, scale }}
      >
        <Image
          sizes="1400px"
          className="hidden lg:block"
          objectFit="cover"
          fill
          src={BigImage}
          alt="Hero Image"
        />
        <Image
          sizes="(max-width: 1024px) 600px, 1200px"
          className="lg:hidden"
          objectFit="cover"
          fill
          src={MobileImage}
          alt="Hero Image"
        />
      </motion.div>
    </div>
  );
}
