import Image from "next/image";
import GradiantBorderPlus from "./components/GradiantBorderPlus";
import bgSquares from "@/app/src/images/back-squares.png";
import SimpleBorder from "./components/BlurBorder";
import PrimaryBtn from "./components/PrimaryBtn";
import abstractDesign from "@/app/src/images/Abstract-Design-desktop.png";
import Border from "./components/Border";
import zapier from "@/app/src/images/zapier.png";
import spotify from "@/app/src/images/spotify.png";
import zoom from "@/app/src/images/zoom.png";
import slack from "@/app/src/images/slack.png";
import amazon from "@/app/src/images/amazon.png";
import adobe from "@/app/src/images/adobe.png";
import textContainer from "@/app/src/images/textContainer-v2.png";
import brush from "@/app/src/images/brush.png";
import puzzle from "@/app/src/images/puzzle.png";
import electricityPiece from "@/app/src/images/electricityPiece.png";

export default function page() {
  return (
    <div className="xl:mx-20  flex flex-col items-center">
      <div className="xl:w-[1280px] w-full border border-gray-15">
        {/* Hero */}
        <section className="relative w-full min-h-[566px] xl:min-h-[691px]  xl:w-auto">
          <Image
            src={bgSquares}
            layout="fill"
            fill
            objectFit="cover"
            objectPosition="center"
            alt="square background"
            className="-z-20"
          />
          <div className="absolute -z-10 bottom-0 left-0 right-0 text-center mr-auto ml-auto h-[248px] xl:h-[448px] max-w-[1596px] flex flex-col justify-end overflow-hidden px-4 xl:p-0">
            <Image
              src={abstractDesign}
              alt="abstract design for backgorund"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-4 pt-20 xl:pt-[112px] flex-col flex items-center">
            <h1 className="text-4xl font-medium text-center tracking-wide leading-[48px] xl:text-5xl xl:leading-snug ">
              A Digital Product Studio <br className="hidden xl:block" /> that
              will Work
            </h1>
            <SimpleBorder style="py-[10px] px-5 mt-8 flex items-center justify-center w-fit max-w-80 xl:max-w-none">
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
        {/* logos */}
        <section className="flex flex-col relative">
          <div className="rounded-full border border-gray-15 bg-gray-10 py-[14px] px-6 w-fit absolute left-0 right-0 m-auto -translate-y-1/2">
            <p className="tracking-wider">Trusted By 250+ Companies</p>
          </div>
          <div className="flex justify-around h-[132px] items-center">
            <div>
              <Image src={zapier} alt="zapier logo" />
            </div>
            <div>
              <Image src={spotify} alt="spotify logo" />
            </div>
            <div>
              <Image src={zoom} alt="zoom logo" />
            </div>
            <div>
              <Image src={slack} alt="slack logo" />
            </div>
            <div>
              <Image src={amazon} alt="amazon logo" />
            </div>
            <div>
              <Image src={adobe} alt="adobe logo" />
            </div>
          </div>
        </section>
        {/* Our Services */}
        <section className="flex flex-col">
          <div className="h-[280px] flex flex-col items-center justify-center w-full relative">
            <Image
              src={textContainer}
              alt="background"
              className="bg-no-repeat	bg-cover bg-center absolute top-0 left-0 right-0 w-full h-full -z-10"
            />
            <h3 className="font-semibold text-[38px] tracking-wider capitalize text-white">
              our services
            </h3>
            <p className="text-gray-90">
              Transform your brand with our innovative digital solutions that
              captivate and engage your audience.
            </p>
          </div>
          <div className="flex min-h-[510px]">
            <div className="border border-gray-15 p-10 flex flex-col justify-between">
              <div>
                <GradiantBorderPlus padding="p-5">
                  <Image src={brush} alt="brush icon" />
                </GradiantBorderPlus>
                <h6 className="capitalize text-white font-semibold tracking-wide text-2xl mt-9">
                  design
                </h6>
                <p className="mt-5 tracking-wide text-gray-90">
                  At Squareup, our design team is passionate about creating
                  stunning, user-centric designs that captivate your audience
                  and elevate your brand. We believe that great design is not
                  just about aesthetics; it's about creating seamless and
                  intuitive user experiences.
                </p>
              </div>
              <div>
                <Border style="text-center text-[14px] font-medium">
                  Learn More
                </Border>
              </div>
            </div>
            <div className="border border-gray-15 p-10 flex flex-col justify-between">
              <div>
                <GradiantBorderPlus padding="p-5">
                  <Image src={brush} alt="brush icon" />
                </GradiantBorderPlus>
                <h6 className="capitalize text-white font-semibold tracking-wide text-2xl mt-9">
                  design
                </h6>
                <p className="mt-5 tracking-wide text-gray-90">
                  At Squareup, our design team is passionate about creating
                  stunning, user-centric designs that captivate your audience
                  and elevate your brand. We believe that great design is not
                  just about aesthetics; it's about creating seamless and
                  intuitive user experiences.
                </p>
              </div>
              <div>
                <Border style="text-center text-[14px] font-medium">
                  Learn More
                </Border>
              </div>
            </div>
            <div className="border border-gray-15 p-10 flex flex-col justify-between">
              <div>
                <GradiantBorderPlus padding="p-5">
                  <Image src={brush} alt="brush icon" />
                </GradiantBorderPlus>
                <h6 className="capitalize text-white font-semibold tracking-wide text-2xl mt-9">
                  design
                </h6>
                <p className="mt-5 tracking-wide text-gray-90">
                  At Squareup, our design team is passionate about creating
                  stunning, user-centric designs that captivate your audience
                  and elevate your brand. We believe that great design is not
                  just about aesthetics; it's about creating seamless and
                  intuitive user experiences.
                </p>
              </div>
              <div>
                <Border style="text-center text-[14px] font-medium">
                  Learn More
                </Border>
              </div>
            </div>
          
          </div>
        </section>
      </div>
    </div>
  );
}
