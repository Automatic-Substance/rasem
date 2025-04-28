import { Suspense } from "react";
import Link from "next/link";
import Hero from "@/app/sections/Hero";
import Visioniaries from "@/app/sections/Visionaries";
import EndStatement from "@/app/sections/EndStatement";
import Pillars from "@/app/sections/Pillars";
import OurVision from "@/app/sections/OurVision";
import OurPhilosophy from "@/app/sections/OurPhilosophy";
import CollectiveVision from "@/app/sections/CollectiveVision";
import Banner from "@/app/sections/Banner";

import { AllPosts } from "@/app/components/Posts";

export default async function Page() {
  return (
    <>
      <div className="relative">
        <Hero />
      </div>
      <CollectiveVision />
      {/* <div className="border-t border-gray-10">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div> */}
      <OurPhilosophy />
      <Banner />
      <OurVision />
      <Visioniaries />
      <Pillars />
      <EndStatement />
    </>
  );
}
