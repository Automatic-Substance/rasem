import Image, { StaticImageData } from "next/image";
interface PillarProps {
  title: string;
  description: string;
  imageOne: StaticImageData;
  imageTwo: StaticImageData;
  icon: React.ReactNode;
}

export default function Pillar({
  title,
  description,
  imageOne,
  imageTwo,
  icon,
  ...props
}: PillarProps) {
  return (
    <div className="relative w-full flex" {...props}>
      <div className="w-1/2 pl-24 pr-12 flex items-start">
        <div className="flex justify-between items-end w-full">
          {icon}
          <div className="relative aspect-[.82] w-2/4">
            <Image
              sizes="100vw"
              objectFit="cover"
              fill
              src={imageOne}
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
            src={imageTwo}
            alt="Hero Image"
          />
        </div>
      </div>
      <div className="absolute left-0 bottom-0 h-1/2 w-1/3 pl-24 space-y-10">
        <h2 className="uppercase font-heading text-4xl">{title}</h2>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
}
