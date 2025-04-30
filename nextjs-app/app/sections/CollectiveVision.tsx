"use client";
import { useRef, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import ImageOne from "@/app/assets/images/collective-vision-3.webp";
import ImageTwo from "@/app/assets/images/collective-vision-4.webp";
import {
  FadeIn,
  Parallax,
  StaggerIn,
  animation,
} from "@/app/components/Animation";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

interface CollectiveVisionProps {}

export default function CollectiveVision(props: CollectiveVisionProps) {
  const ref = useRef<any>();
  const [whiteText, setWhiteText] = useState<boolean>(false);

  const refMobile = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: refMobile,
    offset: ["start end", "end end"],
  });

  const mobiletrigger = useTransform(scrollYProgress, (p) =>
    p >= 1 ? true : false
  );

  useMotionValueEvent(mobiletrigger, "change", (latest) => {
    if (latest && !whiteText) {
      setWhiteText(true);
    } else if (!latest && whiteText) {
      setWhiteText(false);
    }
  });

  const mainWrapperClasses = cn(
    "flex flex-col gap-12 relative top-0 z-10 lg:absolute w-full h-screen lg:top-auto lg:bottom-0 left-0 items-center justify-center transition-all duration-200 ease-in-out",
    {
      "text-primary lg:text-primary": !whiteText,
      "text-white lg:text-primary": whiteText,
    }
  );
  return (
    <>
      <div ref={ref} className="relative lg:h-[200vh] bg-background" {...props}>
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
          <FadeIn className="bg-black h-full flex-1 relative" delay={0.4}>
            <Parallax ref={ref}>
              <Image
                sizes="100vw"
                objectPosition="70% 50%"
                objectFit="cover"
                fill
                src={ImageTwo}
                alt="Fashionable room image"
              />
            </Parallax>
          </FadeIn>
        </div>
        <div id="collective-vision" className={mainWrapperClasses}>
          <StaggerIn className="flex flex-col gap-12">
            <motion.div
              variants={animation}
              className="flex flex-col gap-12 items-center"
            >
              <div className="text-3xl lg:text-5xl text-center">
                A<br />
                Collective
                <br />
                Vision
              </div>
              <div className="flex flex-col gap-4 relative">
                <div className="size-[4px] lg:size-[6px] bg-primary rounded-full"></div>
                <div className="size-[4px] lg:size-[6px] bg-primary rounded-full"></div>
              </div>
            </motion.div>

            <motion.div
              variants={animation}
              className="flex flex-col items-center gap-14"
            >
              <div className="text-3xl lg:text-5xl text-center">
                <span className="italic">Life measured</span>
                <br />
                not in time,
                <br />
                <span className="italic">but in meaning</span>
              </div>
              <div className="size-[4px] lg:size-[6px] bg-primary rounded-full"></div>
            </motion.div>
          </StaggerIn>
        </div>

        <div
          ref={refMobile}
          className="lg:hidden bg-black h-screen w-full flex-1 relative bottom-0 left-0 z-0"
        >
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
