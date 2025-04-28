"use client";

import Image from "next/image";
import BigImage from "@/app/assets/images/end-statement.webp";
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

  const text_opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  return (
    <div
      ref={ref}
      className="relative h-svh bg-primary-background overflow-hidden z-30"
    >
      <div className="z-10 relative size-full text-white flex items-center justify-center px-5">
        <motion.div
          style={{ opacity: text_opacity }}
          className="w-full max-w-lg text-center space-y-6 lg:space-y-14"
        >
          <h2 className="text-2xl lg:text-5xl font-normal">
            Commune with the future of{" "}
            <span className="italic">holistic wellness</span>.
          </h2>
          <p className="uppercase font-heading tracking-widest text-[10px] lg:text-base">
            A vision materialising in 2026.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="absolute size-full z-0 top-0 left-0 scale-125"
        style={{ y, opacity, scale }}
      >
        <Image
          sizes="100vw"
          objectFit="cover"
          fill
          src={BigImage}
          alt="Hero Image"
        />
      </motion.div>
    </div>
  );
}
