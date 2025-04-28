"use client";

import Image from "next/image";
import ImageOne from "@/app/assets/images/ourphilosophy-1.png";
import ImageTwo from "@/app/assets/images/ourphilosophy-2.png";
import ImageThree from "@/app/assets/images/ourphilosophy-3.webp";
import { motion } from "framer-motion";
import { StaggerIn, animation } from "@/app/components/Animation";

interface OurPhilosophyProps {}

export default function OurPhilosophy(props: OurPhilosophyProps) {
  return (
    <>
      <div className="lg:hidden relative pt-24 pb-20 px-5 bg-white">
        <div className="flex flex-col px-10 gap-8 mb-8">
          <h2 className="tracking-widest font-heading uppercase text-[10px]">
            Our Philosophy
          </h2>
          <p className="text-2xl w-full text-right">
            A preface to <span className="italic">Lifeophilic:</span> the spirit
            of all our creations.
          </p>
        </div>
        <div className="w-full aspect-[1.29] relative">
          <div className="relative h-full w-[calc(100%-20px)] -left-[20px]">
            <Image
              sizes="100vw"
              objectFit="cover"
              fill
              src={ImageOne}
              alt="A tree at sunset"
            />
          </div>
        </div>
        <div className="items-center px-10 my-12">
          <p>
            The new global benchmark for wellness real estate where cutting-edge
            science, heritage, and bespoke luxury coexist. The brand’s mission
            is to create environments where elite living converges with
            transformative well-being solutions. Lorem ipsum dolor sit amet,
            consectetur. Donec feugiat mi in ex fringilla, quis egestas odio
            auctor.{" "}
          </p>
        </div>
        <div className="flex gap-10 px-5">
          <div className="flex-1 aspect-[.67] relative">
            <Image
              sizes="100vw"
              objectFit="cover"
              fill
              src={ImageTwo}
              alt="Two hands"
            />
          </div>
          <div className="flex-1 aspect-[.67] relative">
            <Image
              sizes="100vw"
              objectFit="cover"
              fill
              src={ImageThree}
              alt="Girl on patio chair overlooking the ocean"
            />
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block relative pt-36 pb-24 px-12 bg-white"
        {...props}
      >
        <StaggerIn className="grid grid-cols-9 gap-12">
          <div className="col-span-5 grid grid-cols-subgrid gap-x-12 gap-y-16">
            <div className="col-span-5 flex justify-between">
              <motion.h2
                variants={animation}
                className="tracking-widest font-heading uppercase"
              >
                Our Philosophy
              </motion.h2>
              <motion.p
                variants={animation}
                className="text-5xl w-4/6 text-right"
              >
                A preface to <span className="italic">Lifeophilic:</span> the
                spirit of all our creations.
              </motion.p>
            </div>
            <div className="col-span-5">
              <motion.div
                variants={animation}
                className="w-full aspect-[1.29] relative"
              >
                <div className="relative h-full w-[calc(100%+48px)] -left-[48px]">
                  <Image
                    sizes="100vw"
                    objectFit="cover"
                    fill
                    src={ImageOne}
                    alt="A tree at sunset"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-subgrid gap-x-12">
            <div className="col-start-2 col-span-3 flex gap-5 items-start">
              <motion.div
                variants={animation}
                className="flex-1 aspect-[.67] relative"
              >
                <Image
                  sizes="100vw"
                  objectFit="cover"
                  fill
                  src={ImageTwo}
                  alt="Two hands"
                />
              </motion.div>
              <motion.div
                variants={animation}
                className="flex-1 aspect-[.67] relative"
              >
                <Image
                  sizes="100vw"
                  objectFit="cover"
                  fill
                  src={ImageThree}
                  alt="Girl on patio chair overlooking the ocean"
                />
              </motion.div>
            </div>
            <div className="col-span-4 flex items-center px-12">
              <motion.p variants={animation}>
                The new global benchmark for wellness real estate where
                cutting-edge science, heritage, and bespoke luxury coexist. The
                brand’s mission is to create environments where elite living
                converges with transformative well-being solutions. Lorem ipsum
                dolor sit amet, consectetur. Donec feugiat mi in ex fringilla,
                quis egestas odio auctor.{" "}
              </motion.p>
            </div>
          </div>
        </StaggerIn>
      </div>
    </>
  );
}
