import Image from "next/image";
import BigImage from "@/app/assets/images/end-statement.webp";

interface EndStatementProps {}

export default function EndStatement(props: EndStatementProps) {
  return (
    <div className="relative h-svh">
      <div className="z-10 relative size-full text-white flex items-center justify-center px-5">
        <div className="w-full max-w-lg text-center space-y-6 lg:space-y-14">
          <h2 className="text-2xl lg:text-5xl font-normal">
            Commune with the future of{" "}
            <span className="italic">holistic wellness</span>.
          </h2>
          <p className="uppercase font-heading tracking-widest text-[10px] lg:text-base">
            A vision materialising in 2026.
          </p>
        </div>
      </div>
      <Image
        className="absolute"
        sizes="100vw"
        objectFit="cover"
        fill
        src={BigImage}
        alt="Hero Image"
      />
    </div>
  );
}
