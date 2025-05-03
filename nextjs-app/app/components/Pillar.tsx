"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { StaggerIn, animation } from "@/app/components/Animation";
import PortableText from "@/app/components/PortableText";
import { type PortableTextBlock } from "next-sanity";
import CoverImage from "./CoverImage";

interface PillarProps {
  title: string;
  description: any;
  imageOne: any;
  imageTwo: any;
  icon: any;
}

export default function Pillar({
  title,
  description,
  imageOne,
  imageTwo,
  icon,
  ...props
}: PillarProps) {
  return (
    <>
      <StaggerIn className="lg:hidden relative w-full space-y-6" {...props}>
        <div className="flex gap-5 items-start">
          <motion.div
            variants={animation}
            className="relative aspect-[.82] w-2/5"
          >
            <CoverImage image={imageOne} />
          </motion.div>
          <motion.div
            variants={animation}
            className="relative aspect-[.814] flex-1"
          >
            {" "}
            <CoverImage image={imageTwo} />
          </motion.div>
        </div>
        <div className="space-y-14 mx-10">
          <motion.div variants={animation}>
            <div className="relative w-[120px] h-[200px]">
              <CoverImage image={icon} className="[&]:object-contain" />
            </div>
          </motion.div>
          <div className="space-y-4">
            <motion.h3
              variants={animation}
              className="tracking-widest font-heading text-[10px] uppercase"
            >
              Our Pillars
            </motion.h3>
            <motion.h2
              variants={animation}
              className="uppercase font-heading text-xl tracking-wide"
            >
              {title}
            </motion.h2>
            <motion.div variants={animation} className="text-base">
              {description?.length && (
                <PortableText
                  className="text-base"
                  value={description as PortableTextBlock[]}
                />
              )}
            </motion.div>
          </div>
        </div>
      </StaggerIn>
      <StaggerIn className="relative w-full hidden lg:flex" {...props}>
        <div className="w-1/2 pl-24 pr-12 flex items-start">
          <div className="flex justify-between items-end w-full">
            <motion.div variants={animation}>
              <div className="relative w-[140px] aspect-[.82]">
                <CoverImage image={icon} className="[&]:object-contain" />
              </div>
            </motion.div>
            <motion.div
              variants={animation}
              className="relative aspect-[.82] w-2/4"
            >
              <CoverImage image={imageOne} />
            </motion.div>
          </div>
        </div>
        <div className="w-1/2">
          <motion.div
            variants={animation}
            className="relative aspect-[.814] w-full"
          >
            {" "}
            <CoverImage image={imageTwo} />
          </motion.div>
        </div>
        <div className="absolute left-0 bottom-0 h-1/2 w-2/5 min-[1900px]:w-1/4 pl-24 space-y-10">
          <motion.h3
            variants={animation}
            className="tracking-widest font-heading text-xs xl:text-base uppercase"
          >
            Our Pillars
          </motion.h3>
          <motion.h2
            variants={animation}
            className="uppercase font-heading text-2xl xl:text-3xl tracking-wide"
          >
            {title}
          </motion.h2>
          <motion.div variants={animation}>
            {description?.length && (
              <PortableText
                className="text-base xl:text-xl"
                value={description as PortableTextBlock[]}
              />
            )}
          </motion.div>
        </div>
      </StaggerIn>
    </>
  );
}
