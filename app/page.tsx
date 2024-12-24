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
import textContainer1 from "@/app/src/images/textContainer-1-v2.png";
import textContainer2 from "@/app/src/images/textContainer-2-v2.png";
import brush from "@/app/src/images/brush.png";
import puzzle from "@/app/src/images/puzzle.png";
import electricityPiece from "@/app/src/images/electricityPiece.png";
import medal from "@/app/src/images/medal.png";
import speaking from "@/app/src/images/speaking.png";
import electricalShield from "@/app/src/images/electricalShield.png";
import crown from "@/app/src/images/crown.png";
import StaffCard from "./components/StaffCard";
import markThompson from "@/app/src/images/markThompson-v3.png";
import johnSmith from "@/app/src/images/johnSmith.png";
import sarahJohnson from "@/app/src/images/sarahJohnson.png";
import lauraAdams from "@/app/src/images/lauraAdams.png";
import michaelAnderson from "@/app/src/images/michaelAnderson.png";
import emilyTurner from "@/app/src/images/emilyTurner.png";

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
          {/* banner */}
          <div className="h-[280px] flex flex-col items-center justify-center w-full relative gap-2">
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
                  just about aesthetics; it&apos;s about creating seamless and
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
                  <Image src={puzzle} alt="brush icon" />
                </GradiantBorderPlus>
                <h6 className="capitalize text-white font-semibold tracking-wide text-2xl mt-9">
                  Engineering
                </h6>
                <p className="mt-5 tracking-wide text-gray-90">
                  Our engineering team combines technical expertise with a
                  passion for innovation to build robust and scalable digital
                  solutions. We leverage the latest technologies and best
                  practices to deliver high-performance applications tailored to
                  your specific needs.
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
                  <Image src={electricityPiece} alt="electricityPiece icon" />
                </GradiantBorderPlus>
                <h6 className="capitalize text-white font-semibold tracking-wide text-2xl mt-9">
                  Project Management
                </h6>
                <p className="mt-5 tracking-wide text-gray-90">
                  Our experienced project management team ensures that your
                  projects are delivered on time, within budget, and according
                  to your specifications. We follow industry-standard
                  methodologies and employ effective communication and
                  collaboration tools to keep you informed throughout the
                  development process.
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
        {/* Why Choose SquareUp? */}
        <section className="flex flex-col">
          {/* banner */}
          <div className="h-[280px] flex flex-col items-center justify-center w-full relative gap-2">
            <Image
              src={textContainer1}
              alt="background"
              className="bg-no-repeat	bg-cover bg-center absolute top-0 left-0 right-0 w-full h-full -z-10"
            />
            <h3 className="font-semibold text-[38px] tracking-wider capitalize text-white">
              Why Choose SquareUp?
            </h3>
            <p className="text-gray-90 max-w-[600px] text-center">
              Experience excellence in digital craftsmanship with our team of
              skilled professionals dedicated to delivering exceptional results.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="basis-1/2 border border-gray-15 p-[60px]">
              <div className="flex gap-[14px] items-center">
                <GradiantBorderPlus padding="p-5">
                  <Image src={medal} alt="medal icon" />
                </GradiantBorderPlus>
                <h5 className="text-white text-xl tracking-wide">Experties</h5>
              </div>
              <p className="mt-[30px] tracking-wide text-gray-90">
                Our team consists of highly skilled professionals who have a
                deep understanding of the digital landscape. We stay updated
                with the latest industry trends and best practices to deliver
                cutting-edge solutions.
              </p>
            </div>
            <div className="basis-1/2 border border-gray-15 p-[60px]">
              <div className="flex gap-[14px] items-center">
                <GradiantBorderPlus padding="p-5">
                  <Image src={speaking} alt="speaking icon" />
                </GradiantBorderPlus>
                <h5 className="text-white text-xl tracking-wide">
                  Client-Centric Approach
                </h5>
              </div>
              <p className="mt-[30px] tracking-wide text-gray-90">
                We prioritize our clients and their unique needs. We listen to
                your ideas, challenges, and goals, and tailor our services to
                meet your specific requirements. Your success is our success.
              </p>
            </div>
            <div className="basis-1/2 border border-gray-15 p-[60px]">
              <div className="flex gap-[14px] items-center">
                <GradiantBorderPlus padding="p-5">
                  <Image src={electricalShield} alt="electricalShield icon" />
                </GradiantBorderPlus>
                <h5 className="text-white text-xl tracking-wide">
                  Results-Driven Solutions
                </h5>
              </div>
              <p className="mt-[30px] tracking-wide text-gray-90">
                Our team consists of highly skilled professionals who have a
                deep understanding of the digital landscape. We stay updated
                with the latest industry trends and best practices to deliver
                cutting-edge solutions.
              </p>
            </div>
            <div className="basis-1/2 border border-gray-15 p-[60px]">
              <div className="flex gap-[14px] items-center">
                <GradiantBorderPlus padding="p-5">
                  <Image src={crown} alt="crown icon" />
                </GradiantBorderPlus>
                <h5 className="text-white text-xl tracking-wide">
                  Collaborative Partnership
                </h5>
              </div>
              <p className="mt-[30px] tracking-wide text-gray-90">
                We value long-term relationships with our clients. We see
                ourselves as your digital partner, providing ongoing support,
                maintenance, and updates to ensure your digital products
                continue to thrive.
              </p>
            </div>
          </div>
        </section>
        {/* What our Clients say About us */}
        <section className="flex flex-col">
          {/* banner */}
          <div className="h-[280px] flex flex-col items-center justify-center w-full relative gap-2">
            <Image
              src={textContainer2}
              alt="background"
              className="bg-no-repeat	bg-cover bg-center absolute top-0 left-0 right-0 w-full h-full -z-10"
            />
            <h3 className="font-semibold text-[38px] tracking-wider capitalize text-white">
              What our Clients say About us
            </h3>
            <p className="text-gray-90 max-w-[600px] text-center">
              At SquareUp, we take pride in delivering exceptional digital
              products and services that drive success for our clients. Here&apos;s
              what some of our satisfied clients have to say about their
              experience working with us
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="border border-gray-15 py-20 px-[60px] flex flex-col justify-between">
              <div>
                <h6 className="text-green-80 text-[28px] font-medium tracking-wide">
                  SquareUp has been Instrumental in Transforming our Online
                  Presence.{" "}
                </h6>
                <p className="mt-6 text-gray-90">
                  Their team&apos;s expertise in web development and design resulted
                  in a visually stunning and user-friendly e-commerce platform.
                  Our online sales have skyrocketed, and we couldn&apos;t be happier.
                </p>
              </div>
              <StaffCard
                name="mark thompson"
                style="mt-20"
                position="CEO of EventMasters"
                webSiteLink="arn1380.ir"
                image={markThompson}
              />
            </div>
            <div className="border border-gray-15 py-20 px-[60px] flex flex-col justify-between">
              <div>
                <h6 className="text-green-80 text-[28px] font-medium tracking-wide">
                  Working with SquareUp was a breeze.
                </h6>
                <p className="mt-6 text-gray-90">
                  They understood our vision for a mobile app that streamlined
                  our food delivery service. The app they delivered exceeded our
                  expectations, and our customers love the seamless ordering
                  experience. SquareUp is a trusted partner we highly recommend.
                </p>
              </div>
              <StaffCard
                name="john Smith"
                style="mt-20"
                position="CEO of Chic Boutique"
                webSiteLink="arn1380.ir"
                image={johnSmith}
              />
            </div>
            <div className="border border-gray-15 py-20 px-[60px] flex flex-col justify-between">
              <div>
                <h6 className="text-green-80 text-[28px] font-medium tracking-wide">
                  SquareUp developed a comprehensive booking and reservation
                  system for our event management company
                </h6>
                <p className="mt-6 text-gray-90">
                  Their attention to detail and commitment to delivering a
                  user-friendly platform was evident throughout the project. The
                  system has streamlined our operations and enhanced our
                  clients&apos; event experiences.
                </p>
              </div>
              <StaffCard
                name="sarah Johnson"
                style="mt-20"
                position="Founder of HungryBites."
                webSiteLink="arn1380.ir"
                image={sarahJohnson}
              />
            </div>
            <div className="border border-gray-15 py-20 px-[60px] flex flex-col justify-between">
              <div>
                <h6 className="text-green-80 text-[28px] font-medium tracking-wide">
                  ProTech Solutions turned to SquareUp to automate our workflow{" "}
                </h6>
                <p className="mt-6 text-gray-90">
                  They delivered an exceptional custom software solution. The
                  system has significantly increased our productivity and
                  reduced manual errors. SquareUp&apos;s expertise and
                  professionalism have made them a trusted technology partner.
                </p>
              </div>
              <StaffCard
                name="laura Adams"
                style="mt-20"
                position="COO of ProTech Solutions."
                webSiteLink="arn1380.ir"
                image={lauraAdams}
              />
            </div>
            <div className="border border-gray-15 py-20 px-[60px] flex flex-col justify-between">
              <div>
                <h6 className="text-green-80 text-[28px] font-medium tracking-wide">
                  SquareUp designed and developed a captivating web portal for
                  showcasing our real estate listings.{" "}
                </h6>
                <p className="mt-6 text-gray-90">
                  The platform is visually appealing and easy to navigate,
                  allowing potential buyers to find their dream homes
                  effortlessly. SquareUp&apos;s expertise in the real estate industry
                  is unmatched.
                </p>
              </div>
              <StaffCard
                name="michael Anderson"
                style="mt-20"
                position="Founder of Dream Homes Realty."
                webSiteLink="arn1380.ir"
                image={michaelAnderson}
              />
            </div>
            <div className="border border-gray-15 py-20 px-[60px] flex flex-col justify-between">
              <div>
                <h6 className="text-green-80 text-[28px] font-medium tracking-wide">
                  FitLife Tracker wanted a mobile app that tracked fitness
                  activities and provided personalized workout plans.{" "}
                </h6>
                <p className="mt-6 text-gray-90">
                  SquareUp&apos;s team developed an intuitive and feature-rich app
                  that has helped our users stay motivated and achieve their
                  fitness goals. We highly recommend SquareUp for any health and
                  fitness app development needs.
                </p>
              </div>
              <StaffCard
                name="emily Turner"
                style="mt-20"
                position="CEO of FitLife Tracker"
                webSiteLink="arn1380.ir"
                image={emilyTurner}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
