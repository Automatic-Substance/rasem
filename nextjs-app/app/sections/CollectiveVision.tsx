import Image from "next/image";
import ImageOne from "@/app/assets/images/collective-vision-1.png";
import ImageTwo from "@/app/assets/images/collective-vision-2.webp";

interface CollectiveVisionProps {}

export default function CollectiveVision(props: CollectiveVisionProps) {
  return (
    <div className="relative h-[300vh] bg-background" {...props}>
      <div className="w-full h-screen sticky top-0 px-12 py-12 flex">
        <div className="bg-black h-full flex-1 relative">
          <Image
            sizes="100vw"
            objectFit="cover"
            fill
            src={ImageOne}
            alt="Canyon Image"
          />
        </div>
        <div className="h-full flex-1"></div>
        <div className="bg-black h-full flex-1 relative">
          <Image
            sizes="100vw"
            objectFit="cover"
            fill
            src={ImageTwo}
            alt="Canyon Image"
          />
        </div>
      </div>
      <div
        id="collective-vision"
        className="flex flex-col gap-12 absolute w-full h-screen bottom-0 left-0 items-center justify-center"
      >
        <div className="text-6xl text-center">
          A<br />
          Collective
          <br />
          Vision
        </div>
        <div className="flex flex-col gap-4 relative">
          <div className="size-[6px] bg-primary rounded-full"></div>
          <div className="size-[6px] bg-primary rounded-full"></div>
        </div>
        <div className="flex flex-col items-center gap-14">
          <div className="text-6xl text-center">
            A Shared
            <br />
            <span className="italic">Love for</span>
            <br />
            <span className="italic">Life</span>
          </div>
          <div className="size-[6px] bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
