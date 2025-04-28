import Image from "next/image";
import DubaiImage from "@/app/assets/images/dubai.webp";
import { FadeIn } from "@/app/components/Animation";

interface BannerProps {}

export default function Banner(props: BannerProps) {
  return (
    <FadeIn className="w-full aspect-[1.43] lg:aspect-[1.84] relative">
      <Image
        sizes="100vw"
        objectFit="cover"
        fill
        src={DubaiImage}
        alt="Dubai Image"
      />
    </FadeIn>
  );
}
