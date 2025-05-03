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
import { sanityFetch } from "@/sanity/lib/live";
import { homeQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: home } = await sanityFetch({
    query: homeQuery,
  });

  console.log(home);
  return (
    <>
      <div className="relative">
        <Hero image={home.hero.heroImage} />
      </div>
      <CollectiveVision
        imageOne={home.collectiveVision.imageOne}
        imageTwo={home.collectiveVision.imageTwo}
      />
      <OurPhilosophy
        imageLarge={home.ourPhilosophy.imageLarge}
        imageOne={home.ourPhilosophy.imageOne}
        imageTwo={home.ourPhilosophy.imageTwo}
      />
      <Banner image={home.imageBanner} />
      <OurVision
        imageOne={home.ourVision.imageOne}
        imageTwo={home.ourVision.imageTwo}
      />
      <Visioniaries />
      <Pillars />
      <EndStatement />
    </>
  );
}
