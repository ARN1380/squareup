import Image from "next/image";
import bgSquares from "@/app/src/images/back-squares.png";
import SimpleBorder from "./components/SimpleBorder";

export default function page() {
  return (
    <div className="">
      <section className="relative w-full min-h-[566px]">
        <Image
          src={bgSquares}
          layout="fill"
          fill
          objectFit="cover"
          objectPosition="center"
          alt="square background"
          className="-z-10"
        />
        <div className="px-4 pt-20 flex-col flex items-center">
          <h1 className="text-4xl font-medium text-center tracking-wide leading-[48px]">A Digital Product Studio that will Work</h1>
          <SimpleBorder style="py-[10px] px-5 mt-8 w-full" >
            <p className="tracking-wide">For startups, enterprise leaders, media & <br />publishers, and social good.</p>
          </SimpleBorder>
          <div className="flex gap-[13px] mt-10">
            <SimpleBorder>
              <p>sdf</p>
            </SimpleBorder>
            <SimpleBorder>
              <p>sdf</p>
            </SimpleBorder>
            
          </div>
        </div>
      </section>
    </div>
  );
}
