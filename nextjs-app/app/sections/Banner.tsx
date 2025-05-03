import { FadeIn } from "@/app/components/Animation";
import CoverImage from "@/app/components/CoverImage";

interface BannerProps {
  image: any;
}

export default function Banner({ image, ...props }: BannerProps) {
  return (
    <FadeIn
      className="w-full aspect-[1.43] lg:aspect-[1.84] relative"
      {...props}
    >
      <CoverImage image={image} />
    </FadeIn>
  );
}
