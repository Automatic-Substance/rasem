import Image from "next/image";
import HeroImage from "@/app/assets/images/hero_image.webp";

interface HeroProps {}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative min-h-svh">
      <Image
        sizes="100vw"
        objectFit="cover"
        fill
        src={HeroImage}
        alt="Hero Image"
      />
    </div>
  );
}
