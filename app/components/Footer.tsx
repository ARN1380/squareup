import Image from "next/image";
import logo from "@/app/src/images/Logo-desktop.png";
import Link from "next/link";
import facebook from "@/app/src/images/facebook.svg";
import twitter from "@/app/src/images/twitter.svg";
import Linkedin from "@/app/src/images/Linkedin.svg";
import mail from "@/app/src/images/mail.svg";
import phone from "@/app/src/images/phone.svg";
import location from "@/app/src/images/location.svg";
import GradiantBorder from "./GradiantBorder";
function Footer() {
  return (
    <footer className="px-4 py-[30px] border-t border-gray-15 flex justify-center">
      <div className="xl:w-[1280px] w-full">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <div className="pb-[30px] flex justify-center items-center border-b border-gray-15 xl:border-0 xl:pb-0 xl:basis-1/4">
            <Image src={logo} alt="square up logo" width={150} />
          </div>
          <div className="py-[30px] px-4 flex-grow xl:basis-1/2">
            <ul className="capitalize font-barlow font-medium flex gap-5 flex-wrap items-center justify-center">
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/services">services</Link>
              </li>
              <li>
                <Link href="/works">works</Link>
              </li>
              <li>
                <Link href="/process">process</Link>
              </li>
              <li>
                <Link href="/about">about</Link>
              </li>
              <li>
                <Link href="/careers">careers</Link>
              </li>
              <li>
                <Link href="/contact">contact</Link>
              </li>
            </ul>
          </div>
          <div className="border border-gray-15 p-4 flex flex-col justify-center items-center rounded-lg gap-4 xl:flex-row xl:basis-1/4">
            <p className="capitalize">stay connected</p>
            <div className="flex gap-[10px]">
              <GradiantBorder>
                <Image src={facebook} alt="facebook link" />
              </GradiantBorder>
              <GradiantBorder>
                <Image src={twitter} alt="twitter link" />
              </GradiantBorder>
              <GradiantBorder>
                <Image src={Linkedin} alt="Linkedin link" />
              </GradiantBorder>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center mt-[30px] w-full text-lg xl:flex-row">
            <div className="flex gap-[10px] border-b border-gray-15 py-5 w-full justify-center">
              <Image src={mail} alt="mail link" />
              <div>alireza.naghavi0@gmail.com</div>
            </div>
            <div className="flex gap-[10px] border-b border-gray-15 py-5 w-full justify-center">
              <Image src={phone} alt="phone link" />
              <div>+98 910 214 5718</div>
            </div>
            <div className="flex gap-[10px] border-b border-gray-15 py-5 w-full justify-center">
              <Image src={location} alt="location link" />
              <div>Tehran, Nofel Loshato St</div>
            </div>
          </div>
          <div className="text-gray-60 mt-[20px] font-normal">
            © 2024 SquareUp by Alireza Naghavi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
