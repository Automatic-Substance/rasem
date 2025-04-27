import Image, { StaticImageData } from "next/image";
import cn from "classnames";

type ProfileProps = {
  mode?: 1 | 2;
  image: StaticImageData;
  name: string;
  title: string;
  description: string;
};
export default function Profile({
  mode = 1,
  image,
  name,
  title,
  description,
}: ProfileProps) {
  const imageClasses = cn("relative w-full mb-8 lg:mb-11", {
    "aspect-[.726]": mode === 1,
    "aspect-[.817]": mode === 2,
  });
  return (
    <div className="relative w-full flex flex-col text-primary">
      <div className={imageClasses}>
        <Image
          sizes="100vw"
          objectFit="cover"
          fill
          src={image}
          alt="Profile Image"
        />
      </div>
      <div className="size-1 lg:size-2 bg-primary rounded-full mb-5"></div>
      <h3 className="text-xl lg:text-4xl font-heading uppercase tracking-widest mb-2">
        {name}
      </h3>
      <div className="font-heading uppercase tracking-widest mb-6 text-[10px] lg:text-base">
        {title}
      </div>
      <p>{description}</p>
    </div>
  );
}
