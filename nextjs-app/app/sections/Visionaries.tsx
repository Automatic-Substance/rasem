"use client";

import React from "react";
import Image from "next/image";
import GladeImage from "@/app/assets/images/glade.webp";
import { motion } from "framer-motion";
import { StaggerIn, animation } from "@/app/components/Animation";

interface VisioniariesProps {}

export default function Visioniaries(props: VisioniariesProps) {
  return (
    <div className="bg-background">
      <StaggerIn className="lg:hidden mx-10 mt-16">
        <div className="flex flex-col gap-8 items-center">
          <motion.h2 variants={animation} className="text-3xl leading-[1.4]">
            A <span className="italic">Collaboration</span>
            <br />
            between
            <br />A Team of <span className="italic">Visionaries</span>
          </motion.h2>
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
            <Image
              sizes="100vw"
              objectFit="cover"
              fill
              src={GladeImage}
              alt="Glade Image"
            />
          </motion.div>
          <div className="text-base relative mt-3 space-y-5">
            <motion.p variants={animation}>
              RASEM [rā·sem]: to sketch or illustrate with intention
            </motion.p>
            <motion.p variants={animation}>
              Bound by a shared purpose to shape a new paradigm of living, the
              visionaries behind RASEM etch innovation and intent across an
              enriched canvas - where lifeophilic design finds its form.
            </motion.p>
          </div>
        </div>
      </StaggerIn>
      <StaggerIn className="hidden lg:grid mx-12 grid-cols-9 gap-12 mt-24">
        <motion.div
          variants={animation}
          className="col-span-4 aspect-[.744] relative"
        >
          <Image
            sizes="100vw"
            objectFit="cover"
            fill
            src={GladeImage}
            alt="Glade Image"
          />
        </motion.div>
        <div className="col-span-5 px-10 flex items-center">
          <div className="flex flex-col gap-14 items-start">
            <motion.h2 variants={animation} className="text-5xl leading-[1.5]">
              A <span className="italic">Collaboration</span>
              <br />
              between
              <br />A Team of <span className="italic">Visionaries</span>
            </motion.h2>
            <motion.div
              variants={animation}
              className="flex flex-col gap-6 relative left-[40%]"
            >
              <div className="size-[6px] bg-primary rounded-full"></div>
              <div className="size-[6px] bg-primary rounded-full"></div>
              <div className="size-[6px] bg-primary rounded-full"></div>
              <div className="size-[6px] bg-primary rounded-full"></div>
            </motion.div>
            <div className="text-xl relative left-[40%] w-[60%] space-y-5">
              <motion.p variants={animation}>
                RASEM [rā·sem]: to sketch or illustrate with intention
              </motion.p>
              <motion.p variants={animation}>
                Bound by a shared purpose to shape a new paradigm of living, the
                visionaries behind RASEM etch innovation and intent across an
                enriched canvas - where lifeophilic design finds its form.
              </motion.p>
            </div>
          </div>
        </div>
      </StaggerIn>
      <StaggerIn className="relative px-5 lg:px-12 overflow-hidden mt-20 lg:mt-28 mb-28 lg:mb-32 cursor-grab [&]:active:cursor-grabbing">
        <h2 className="uppercase text-[10px] lg:text-base font-heading text-center mb-16 lg:mb-24 tracking-widest">
          Our Partners
        </h2>
        <div className="grid grid-col-1 lg:grid-cols-4 gap-14">
          <div className="flex flex-col items-center gap-4 lg:gap-14 text-center">
            <h3 className="text-lg lg:text-3xl font-heading uppercase tracking-widest mb-2 text-center">
              SAFI
              <br />
              QUrashi
            </h3>
            <p className="lg:text-lg">
              Driven by a relentless pursuit of transformative impact, Safi is a
              serial entrepreneur with 27 years of cross-industry experience.
              Known for his fearless leadership and infectious energy, he builds
              ventures that endure and inspire. With a philosophy rooted in
              innovation and long-term value creation, Safi unites top-tier
              talent to shape industries, redefine possibilities, and forge a
              better future.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:gap-14 text-center">
            <h3 className="text-lg lg:text-3xl font-heading uppercase tracking-widest mb-2 text-center">
              ELLIOTT
              <br />
              BACHMANN
            </h3>
            <p className="lg:text-lg">
              Elliott brings over 20 years of expertise in global finance, risk,
              and regulatory strategy. He has advised institutions including
              BlackRock, Morgan Stanley, and AXA — designing secure, scalable
              frameworks that align innovation with governance. His strategic
              clarity and technical depth make him a trusted guide in complex
              financial environments.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:gap-14 text-center">
            <h3 className="text-lg lg:text-3xl font-heading uppercase tracking-widest mb-2 text-center">
              REGINE
              <br />
              LABROSSE
            </h3>
            <p className="lg:text-lg">
              A globally recognised authority in branding and market strategy,
              Regine brings three decades of leadership in licensing, IP, and
              innovation. Having worked with icons like Disney, Netflix, and
              Mercedes-Benz, she crafts brand ecosystems that scale with purpose
              — translating cultural influence into long-term relevance.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:gap-14 text-center">
            <h3 className="text-lg lg:text-3xl font-heading uppercase tracking-widest mb-2 text-center">
              SHARENA
              <br />
              HABR
            </h3>
            <p className="lg:text-lg">
              Sharena is a strategic operator with deep knowledge in
              transforming vision into scalable systems. With experience across
              organisations such as Dubai South, GAPCorp, and The National
              Aquarium, she brings clarity, discipline, and adaptability —
              guiding complex organisations toward sustainable growth through
              thoughtful design and precision.
            </p>
          </div>
        </div>
      </StaggerIn>
    </div>
  );
}
