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
          <div className="text-base relative mt-3 space-y-5 text-center">
            <motion.p variants={animation}>
              RASEM [<span className="italic">rā·sem</span>]: to sketch or
              illustrate with intention
            </motion.p>
            <motion.p variants={animation}>
              Bound by a shared purpose to shape a new paradigm of living, the
              visionaries behind RASEM etch innovation and intent across an
              enriched canvas - where{" "}
              <span className="italic">lifeophilic</span> design finds its form.
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
            <motion.h2
              variants={animation}
              className="text-3xl/[1.14] xl:text-5xl/[1.14]"
            >
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
            <div className="text-base xl:text-xl relative left-[40%] w-[60%] space-y-5">
              <motion.p variants={animation}>
                RASEM [<span className="italic">rā·sem</span>]: to sketch or
                illustrate with intention
              </motion.p>
              <motion.p variants={animation}>
                Bound by a shared purpose to shape a new paradigm of living, the
                visionaries behind RASEM etch innovation and intent across an
                enriched canvas—where{" "}
                <span className="italic">lifeophilic</span> design finds its
                form.
              </motion.p>
            </div>
          </div>
        </div>
      </StaggerIn>
      <StaggerIn className="relative px-5 lg:px-12 overflow-hidden mt-20 lg:mt-28 mb-28 lg:mb-32 cursor-grab [&]:active:cursor-grabbing max-w-[1800px] m-auto">
        <h2 className="uppercase text-[10px] lg:text-base font-heading text-center mb-16 lg:mb-24 tracking-widest">
          Our Team
        </h2>
        <div className="grid grid-col-1 lg:grid-cols-4 gap-14">
          <div className="flex flex-col items-center gap-4 lg:gap-10 xl:gap-14 text-center">
            <h3 className="text-lg lg:text-2xl xl:text-3xl font-heading uppercase tracking-widest mb-2 text-center">
              <span className="hidden lg:block">
                SAFI
                <br />
                QUrashi
              </span>
              <span className="lg:hidden">SAFI QUrashi</span>
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
          <div className="flex flex-col items-center gap-4 lg:gap-10 xl:gap-14 text-center">
            <h3 className="text-lg lg:text-2xl xl:text-3xl font-heading uppercase tracking-widest mb-2 text-center">
              <span className="hidden lg:block">
                ELLIOTT
                <br />
                BACHMANN
              </span>
              <span className="lg:hidden">ELLIOTT BACHMANN</span>
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
          <div className="flex flex-col items-center gap-4 lg:gap-10 xl:gap-14 text-center">
            <h3 className="text-lg lg:text-2xl xl:text-3xl font-heading uppercase tracking-widest mb-2 text-center">
              <span className="hidden lg:block">
                REGINE
                <br />
                LABROSSE
              </span>
              <span className="lg:hidden">REGINE LABROSSE</span>
            </h3>
            <p className="lg:text-lg">
              A globally recognised authority in branding and market strategy,
              Regine brings three decades of leadership in licensing, IP, and
              innovation. Having worked with icons like Disney, Netflix, and
              Mercedes-Benz, she crafts brand ecosystems that scale with purpose
              — translating cultural influence into long-term relevance.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:gap-10 xl:gap-14 text-center">
            <h3 className="text-lg lg:text-2xl xl:text-3xl font-heading uppercase tracking-widest mb-2 text-center">
              <span className="hidden lg:block">
                SHARENA
                <br />
                HABR
              </span>
              <span className="lg:hidden">SHARENA HABR</span>
            </h3>
            <p className="lg:text-lg">
              With more than 15 years of experience, Sharena is a dynamic and
              accomplished executive known for her expertise in operations,
              organizational design, and strategic leadership. Renowned for her
              collaborative spirit and results-oriented mindset, she has played
              a pivotal role in driving impact across leading organizations,
              including Dubai South, Keturah, Al Qana and its subsidiaries, and
              The National Aquarium.
            </p>
          </div>
        </div>
      </StaggerIn>
    </div>
  );
}
