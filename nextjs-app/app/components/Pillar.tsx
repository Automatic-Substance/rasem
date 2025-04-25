import Image from "next/image";
import Icon from "@/app/assets/icons/spaces-graphic.svg";
import ImageOne from "@/app/assets/images/pillar-space-1.png";
import ImageTwo from "@/app/assets/images/pillar-space-2.png";

export default function Pillar() {
  return (
    <div className="relative w-full flex">
      <div className="w-1/2 pl-24 pr-12 flex items-start">
        <div className="flex justify-between items-end w-full">
          <Icon />
          <div className="relative aspect-[.82] w-2/4">
            <Image
              sizes="100vw"
              objectFit="cover"
              fill
              src={ImageOne}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="relative aspect-[.814] w-full">
          {" "}
          <Image
            sizes="100vw"
            objectFit="cover"
            fill
            src={ImageTwo}
            alt="Hero Image"
          />
        </div>
      </div>
      <div className="absolute left-0 bottom-0 h-1/2 w-1/3 pl-24 space-y-10">
        <h2 className="uppercase font-heading text-4xl">Spaces</h2>
        <p className="text-xl">
          Architectural marvels and sanctuaries founded on a collective
          commitment to fostering the holistic wellbeing of individuals and
          communities with a shared love of life.
        </p>
      </div>
    </div>
  );
}
