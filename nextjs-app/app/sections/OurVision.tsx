"use client";

import { motion } from "framer-motion";
import { StaggerIn, animation } from "@/app/components/Animation";
import CoverImage from "@/app/components/CoverImage";
import PortableText from "@/app/components/PortableText";
import { type PortableTextBlock } from "next-sanity";

interface OurVisionProps {
  imageOne: any;
  imageTwo: any;
  heading: any;
  description: any;
}

export default function OurVision({
  imageOne,
  imageTwo,
  heading,
  description,
  ...props
}: OurVisionProps) {
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
            <CoverImage image={imageTwo} />
          </motion.div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <motion.h2
              variants={animation}
              className="tracking-widest font-heading text-[10px]"
            >
              OUR VISION
            </motion.h2>
            <motion.div variants={animation} className="w-5/6">
              {heading?.length && (
                <PortableText
                  className="text-2xl/[1.25]"
                  value={heading as PortableTextBlock[]}
                />
              )}
            </motion.div>
          </div>
          <motion.div variants={animation} className="w-full">
            {description?.length && (
              <PortableText
                className="text-base"
                value={description as PortableTextBlock[]}
              />
            )}
          </motion.div>
          <motion.div
            variants={animation}
            className="aspect-[.68] relative w-4/6"
          >
            <CoverImage image={imageOne} />
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
                  className="tracking-widest font-heading text-xs xl:text-base"
                >
                  OUR VISION
                </motion.h2>
                <motion.div variants={animation} className="w-5/6">
                  {heading?.length && (
                    <PortableText
                      className="text-3xl/[1.16] xl:text-5xl/[1.16]"
                      value={heading as PortableTextBlock[]}
                    />
                  )}
                </motion.div>
              </div>
              <motion.div
                variants={animation}
                className="col-span-2 aspect-[.75] relative"
              >
                <CoverImage image={imageOne} />
              </motion.div>
            </div>
            <div className="col-span-5 flex items-center">
              <motion.div variants={animation} className="w-4/5 2xl:w-3/5">
                {description?.length && (
                  <PortableText
                    className="text-base xl:text-lg"
                    value={description as PortableTextBlock[]}
                  />
                )}
              </motion.div>
            </div>
          </div>
          <div className="col-start-6 col-span-4">
            <div className="w-full aspect-[.77] relative">
              <motion.div
                variants={animation}
                className="relative h-full w-[calc(100%+48px)]"
              >
                <CoverImage image={imageTwo} />
              </motion.div>
            </div>
          </div>
        </div>
      </StaggerIn>
    </>
  );
}
