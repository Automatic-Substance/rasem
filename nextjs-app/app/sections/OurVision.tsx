"use client";

import Image from "next/image";
import OurVisionImageOne from "@/app/assets/images/ourvision-1.webp";
import OurVisionImageTwo from "@/app/assets/images/ourvision-2.webp";
import { motion } from "framer-motion";
import { StaggerIn, animation } from "@/app/components/Animation";

interface OurVisionProps {}

export default function OurVision(props: OurVisionProps) {
  return (
    <>
      <StaggerIn
        className="lg:hidden relative pt-24 pb-20 px-5 bg-white"
        {...props}
      >
        <div className="relative px-5 flex flex-col gap-14 text-center items-center">
          <motion.div
            variants={animation}
            className="w-full aspect-[.82] relative"
          >
            <Image
              sizes="100vw"
              objectFit="cover"
              fill
              src={OurVisionImageTwo}
              alt="Bedroom overlooking dubai Image"
            />
          </motion.div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <motion.h2
              variants={animation}
              className="tracking-widest font-heading text-[10px]"
            >
              OUR VISION
            </motion.h2>
            <motion.p variants={animation} className="text-2xl w-5/6">
              The new benchmark in{" "}
              <span className="italic">wellness real-estate.</span>
            </motion.p>
          </div>
          <motion.p variants={animation} className="text-base w-full">
            The new global benchmark for wellness real estate where cutting-edge
            science, heritage, and bespoke luxury coexist. The brand’s mission
            is to create environments where elite living converges with
            transformative well-being solutions. Lorem ipsum, dolor, sit, amet,
            and consectetur. Donec feugiat mi in ex fringilla, quis egestas odio
            auctor. Proin sit amet condimentum ipsum, eu sodales metus. Quisque
            eu dolor posuere, eleifend ligula eget, hendrerit erat.
          </motion.p>
          <motion.div
            variants={animation}
            className="aspect-[.68] relative w-4/6"
          >
            <Image
              sizes="100vw"
              objectFit="cover"
              fill
              src={OurVisionImageOne}
              alt="Canyon Image"
            />
          </motion.div>
        </div>
      </StaggerIn>
      <StaggerIn
        className="hidden lg:block relative py-24 px-12 bg-white"
        {...props}
      >
        <div className="grid grid-cols-9 gap-12">
          <div className="col-span-5 grid grid-cols-subgrid gap-x-12 grid-rows-2">
            <div className="col-span-5 grid grid-cols-subgrid gap-12 auto-rows-max">
              <div className="col-span-3 flex flex-col justify-between">
                <motion.h2
                  variants={animation}
                  className="tracking-widest font-heading"
                >
                  OUR VISION
                </motion.h2>
                <motion.p variants={animation} className="text-5xl w-5/6">
                  The new benchmark in{" "}
                  <span className="italic">wellness real-estate.</span>
                </motion.p>
              </div>
              <motion.div
                variants={animation}
                className="col-span-2 aspect-[.75] relative"
              >
                <Image
                  sizes="100vw"
                  objectFit="cover"
                  fill
                  src={OurVisionImageOne}
                  alt="Canyon Image"
                />
              </motion.div>
            </div>
            <div className="col-span-5 flex items-center">
              <motion.p variants={animation} className="text-lg w-4/5">
                The new global benchmark for wellness real estate where
                cutting-edge science, heritage, and bespoke luxury coexist. The
                brand’s mission is to create environments where elite living
                converges with transformative well-being solutions. Lorem ipsum,
                dolor, sit, amet, and consectetur. Donec feugiat mi in ex
                fringilla, quis egestas odio auctor. Proin sit amet condimentum
                ipsum, eu sodales metus. Quisque eu dolor posuere, eleifend
                ligula eget, hendrerit erat.
              </motion.p>
            </div>
          </div>
          <div className="col-start-6 col-span-4">
            <div className="w-full aspect-[.77] relative">
              <motion.div
                variants={animation}
                className="relative h-full w-[calc(100%+48px)]"
              >
                <Image
                  sizes="100vw"
                  objectFit="cover"
                  fill
                  src={OurVisionImageTwo}
                  alt="Canyon Image"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </StaggerIn>
    </>
  );
}
