import { Suspense } from "react";
import Link from "next/link";
import Hero from "@/app/sections/Hero";
import Visioniaries from "@/app/sections/Visionaries";
import EndStatement from "@/app/sections/EndStatement";
import Pillars from "@/app/sections/Pillars";
import OurVision from "@/app/sections/OurVision";
import OurPhilosophy from "@/app/sections/OurPhilosophy";
import CollectiveVision from "@/app/sections/CollectiveVision";

import { AllPosts } from "@/app/components/Posts";
import GetStartedCode from "@/app/components/GetStartedCode";
import Image from "next/image";
import DubaiImage from "@/app/assets/images/dubai.webp";

export default async function Page() {
  return (
    <>
      <div className="bg-gradient-to-r from-red-200 from-0% via-white via-40%  relative">
        <div className="bg-gradient-to-b from-white w-full h-40 absolute top-0"></div>
        <div className="bg-gradient-to-t from-white w-full h-40 absolute bottom-0"></div>
        <Hero />
      </div>
      <CollectiveVision />
      <div className="border-t border-gray-10">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
      <OurPhilosophy />
      <div className="w-full aspect-[1.84] relative">
        <Image
          sizes="100vw"
          objectFit="cover"
          fill
          src={DubaiImage}
          alt="Dubai Image"
        />
      </div>
      <OurVision />
      <Visioniaries />
      <Pillars />
      <EndStatement />
    </>
  );
}
