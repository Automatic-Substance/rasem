"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { StaggerIn, animation } from "@/app/components/Animation";

interface PillarProps {
  title: string;
  description: string;
  imageOne: StaticImageData;
  imageTwo: StaticImageData;
  icon: React.ReactNode;
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
      <div className="lg:hidden relative w-full space-y-6" {...props}>
        <div className="flex gap-5 items-start">
          <div className="relative aspect-[.82] w-2/5">
            <Image
              sizes="100vw"
              objectFit="cover"
              fill
              src={imageOne}
              alt="Hero Image"
            />
          </div>
          <div className="relative aspect-[.814] flex-1">
            {" "}
            <Image
              sizes="100vw"
              objectFit="cover"
              fill
              src={imageTwo}
              alt="Hero Image"
            />
          </div>
        </div>
        <div className="space-y-14 mx-10">
          <div>{icon}</div>
          <div className="space-y-4">
            <h2 className="uppercase font-heading text-xl tracking-wide">
              {title}
            </h2>
            <p className="text-base">{description}</p>
          </div>
        </div>
      </div>
      <StaggerIn className="relative w-full hidden lg:flex" {...props}>
        <div className="w-1/2 pl-24 pr-12 flex items-start">
          <div className="flex justify-between items-end w-full">
            <motion.div variants={animation}>{icon}</motion.div>
            <motion.div
              variants={animation}
              className="relative aspect-[.82] w-2/4"
            >
              <Image
                sizes="100vw"
                objectFit="cover"
                fill
                src={imageOne}
                alt="Hero Image"
              />
            </motion.div>
          </div>
        </div>
        <div className="w-1/2">
          <motion.div
            variants={animation}
            className="relative aspect-[.814] w-full"
          >
            {" "}
            <Image
              sizes="100vw"
              objectFit="cover"
              fill
              src={imageTwo}
              alt="Hero Image"
            />
          </motion.div>
        </div>
        <div className="absolute left-0 bottom-0 h-1/2 w-1/3 pl-24 space-y-10">
          <motion.h2
            variants={animation}
            className="uppercase font-heading text-4xl tracking-wide"
          >
            {title}
          </motion.h2>
          <motion.p variants={animation} className="text-xl">
            {description}
          </motion.p>
        </div>
      </StaggerIn>
    </>
  );
}
