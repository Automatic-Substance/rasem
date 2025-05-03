"use client";

import React from "react";
import { motion } from "framer-motion";
import { StaggerIn, animation } from "@/app/components/Animation";
import { type PortableTextBlock } from "next-sanity";
import CoverImage from "@/app/components/CoverImage";
import PortableText from "@/app/components/PortableText";

interface VisioniariesProps {
  image: any;
  team?: any;
  heading: any;
  description: any;
}

export default function Visioniaries({
  image,
  team,
  heading,
  description,
  ...props
}: VisioniariesProps) {
  return (
    <div className="bg-background" {...props}>
      <StaggerIn className="lg:hidden mx-10 mt-16">
        <div className="flex flex-col gap-8 items-center">
          <motion.div variants={animation}>
            {heading?.length && (
              <PortableText
                className="text-3xl leading-[1.4]"
                value={heading as PortableTextBlock[]}
              />
            )}
          </motion.div>
          <motion.div
            variants={animation}
            className="flex flex-col gap-4 relative"
          >
            <div className="size-[4px] bg-primary rounded-full"></div>
            <div className="size-[4px] bg-primary rounded-full"></div>
            <div className="size-[4px] bg-primary rounded-full"></div>
            <div className="size-[4px] bg-primary rounded-full"></div>
          </motion.div>
          <motion.div
            variants={animation}
            className="w-full aspect-[.672] relative"
          >
            <CoverImage image={image} />
          </motion.div>
          <div className="relative mt-3 text-center">
            <motion.div variants={animation}>
              {description?.length && (
                <PortableText
                  className="text-base space-y-5"
                  value={description as PortableTextBlock[]}
                />
              )}
            </motion.div>
          </div>
        </div>
      </StaggerIn>
      <StaggerIn className="hidden lg:grid mx-12 grid-cols-9 gap-12 mt-24">
        <motion.div
          variants={animation}
          className="col-span-4 aspect-[.744] relative"
        >
          <CoverImage image={image} />
        </motion.div>
        <div className="col-span-5 px-10 flex items-center">
          <div className="flex flex-col gap-14 items-start">
            <motion.div variants={animation} className="">
              {heading?.length && (
                <PortableText
                  className="text-3xl/[1.14] xl:text-5xl/[1.14]"
                  value={heading as PortableTextBlock[]}
                />
              )}
            </motion.div>
            <motion.div
              variants={animation}
              className="flex flex-col gap-6 relative left-[40%]"
            >
              <div className="size-[6px] bg-primary rounded-full"></div>
              <div className="size-[6px] bg-primary rounded-full"></div>
              <div className="size-[6px] bg-primary rounded-full"></div>
              <div className="size-[6px] bg-primary rounded-full"></div>
            </motion.div>
            <div className=" relative left-[40%] w-[60%] ">
              <motion.div variants={animation}>
                {description?.length && (
                  <PortableText
                    className="text-base xl:text-xl space-y-5"
                    value={description as PortableTextBlock[]}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </StaggerIn>
      <StaggerIn className="relative px-5 lg:px-12 overflow-hidden mt-20 lg:mt-28 mb-28 lg:mb-32 cursor-grab [&]:active:cursor-grabbing max-w-[1800px] m-auto">
        <h2 className="uppercase text-[10px] lg:text-base font-heading text-center mb-16 lg:mb-24 tracking-widest">
          Our Team
        </h2>
        <div className="grid grid-col-1 lg:grid-cols-4 gap-14">
          {team &&
            team.map((member: any, i: number) => {
              return (
                <div
                  className="flex flex-col items-center gap-4 lg:gap-10 xl:gap-14 text-center"
                  key={i}
                >
                  <h3 className="text-lg lg:text-2xl xl:text-3xl font-heading uppercase tracking-widest mb-2 text-center">
                    <span className="hidden lg:block">
                      {member.firstname}
                      <br />
                      {member.lastname}
                    </span>
                    <span className="lg:hidden">
                      {member.firstname} {member.lastname}
                    </span>
                  </h3>
                  {member.description?.length && (
                    <PortableText
                      className="lg:text-lg text-primary"
                      value={member.description as PortableTextBlock[]}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </StaggerIn>
    </div>
  );
}
