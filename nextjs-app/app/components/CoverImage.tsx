import { stegaClean } from "@sanity/client/stega";
import { Image } from "next-sanity/image";
import cn from "classnames";

import { urlForImage } from "@/sanity/lib/utils";

interface CoverImageProps {
  image: any;
  className?: string;
  priority?: boolean;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority, className } = props;
  const image = source?.asset?._ref ? (
    <Image
      className={cn("object-cover", className)}
      fill={true}
      alt={stegaClean(source?.alt) || ""}
      src={urlForImage(source)?.auto("format").url() as string}
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "100%" }} />
  );

  return <div className="relative size-full">{image}</div>;
}
