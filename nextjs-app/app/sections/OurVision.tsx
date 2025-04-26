import Image from "next/image";
import BigImage from "@/app/assets/images/end-statement.webp";

interface OurVisionProps {}

export default function OurVision(props: OurVisionProps) {
  return (
    <div className="relative my-24 mx-12" {...props}>
      <div className="grid grid-cols-9 gap-12">
        <div className="col-span-5 grid grid-cols-subgrid gap-x-12 grid-rows-2">
          <div className="col-span-5 grid grid-cols-subgrid gap-12 auto-rows-max">
            <div className="col-span-3 flex flex-col justify-between">
              <h2 className="tracking-widest font-heading">OUR VISION</h2>
              <p className="text-5xl w-5/6">
                The new benchmark in{" "}
                <span className="italic">wellness real-estate.</span>
              </p>
            </div>
            <div className="col-span-2 aspect-[.75] relative">
              <Image
                sizes="100vw"
                objectFit="cover"
                fill
                src={BigImage}
                alt="Canyon Image"
              />
            </div>
          </div>
          <div className="col-span-5 flex items-center">
            <p className="text-lg w-4/5">
              The new global benchmark for wellness real estate where
              cutting-edge science, heritage, and bespoke luxury coexist. The
              brand’s mission is to create environments where elite living
              converges with transformative well-being solutions. Lorem ipsum,
              dolor, sit, amet, and consectetur. Donec feugiat mi in ex
              fringilla, quis egestas odio auctor. Proin sit amet condimentum
              ipsum, eu sodales metus. Quisque eu dolor posuere, eleifend ligula
              eget, hendrerit erat.
            </p>
          </div>
        </div>
        <div className="col-start-6 col-span-4">
          <div className="w-full aspect-[.77] relative">
            <div className="relative h-full w-[calc(100%+48px)]">
              <Image
                sizes="100vw"
                objectFit="cover"
                fill
                src={BigImage}
                alt="Canyon Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
