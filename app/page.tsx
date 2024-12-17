import Image from "next/image";
import bgSquares from "@/app/src/images/back-squares.png";
import SimpleBorder from "./components/BlurBorder";
import PrimaryBtn from "./components/PrimaryBtn";
import abstractDesign from "@/app/src/images/Abstract-Design-desktop.png";
import Header from "./components/Header";
import Border from "./components/Border";

export default function page() {
  return (
    <div className="">
      <section className="relative w-full min-h-[566px] xl:min-h-[691px] xl:mx-20  xl:w-auto">
        <Image
          src={bgSquares}
          layout="fill"
          fill
          objectFit="cover"
          objectPosition="center"
          alt="square background"
          className="-z-20"
        />
        <div className="absolute -z-10 bottom-0 left-0 right-0 text-center mr-auto ml-auto h-[248px] xl:h-[448px] max-w-[1596px] flex flex-col justify-end overflow-hidden px-4 xl:p-0" >
          <Image
            src={abstractDesign}
            alt="abstract design for backgorund"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="px-4 pt-20 xl:pt-[112px] flex-col flex items-center">
          <h1 className="text-4xl font-medium text-center tracking-wide leading-[48px] xl:text-5xl xl:leading-snug">
            A Digital Product Studio <br className="hidden xl:block" /> that will Work
          </h1>
          <SimpleBorder style="py-[10px] px-5 mt-8 w-full flex items-center justify-center w-fit">
            <div className="hidden xl:flex gap-[6px] items-center justify-center tracking-wide">
              <p className="text-gray-60">For</p>
              <Border>Startups</Border>,<Border>Enterprise leaders</Border>,
              <Border>Media & Publishers</Border>
              <p className="text-gray-60">and</p>
              <Border>Social Good</Border>
            </div>
            <p className="tracking-wide text-gray-60 xl:hidden">
              For startups, enterprise leaders, media & <br />
              publishers, and social good.
            </p>
          </SimpleBorder>
          <div className="flex gap-[13px] mt-10 font-semibold tracking-wide">
            <SimpleBorder style="px-5 py-[14px]" link href="/works">
              Our Works
            </SimpleBorder>
            <PrimaryBtn href="/contact-us">Contact Us</PrimaryBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
