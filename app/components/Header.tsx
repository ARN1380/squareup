"use client";

import Image from "next/image";
import logo from "@/app/src/images/Logo-desktop.png";
import Link from "next/link";
import PrimaryBtn from "./PrimaryBtn";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const linkStyle =
    "border border-gray-15 bg-gray-15 rounded-lg px-[22px] py-3";
  return (
    <header className="w-full h-[106px] border-b border-b-gray-15 flex justify-center">
      <div className="flex justify-between pt-10 px-4 pb-5 xl:py-5 xl:items-center xl:w-[1280px] w-full">

      {/* icon */}
      <div className="h-full xl:h-[80%] w-[400px] xl:basis-1/4 ">
        <Image
          src={logo}
          alt="SquareUp logo"
          placeholder="blur"          
          className="h-full w-auto "
        />
      </div>
      {/* hamburger menu */}
      <div className="min-w-[46px] min-h-[46px] bg-gray-15 rounded-md p-1.5 xl:hidden">
        <div className="w-full h-full flex items-end justify-center flex-col gap-[5px] pr-1">
          <div className="border border-green-80 w-[25px] rounded-full"></div>
          <div className="border border-green-80 w-[25px] rounded-full"></div>
          <div className="border border-green-80 w-[16px] rounded-full"></div>         
        </div>
      </div>
      {/* links */}
      <nav className="hidden capitalize font-semibold text-sm xl:basis-1/2 xl:flex justify-center">
        <ul className="flex gap-4">
          <li>
            <Link
              href={"/"}
              className={`link ${
                pathName === "/"
                  ? "border border-gray-15 bg-gray-15 rounded-lg px-[22px] py-3"
                  : ""
              }`}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href={"/services"}
              className={`link ${
                pathName === "/services" ? `${linkStyle}` : ""
              }`}
            >
              services
            </Link>
          </li>
          <li>
            <Link
              href={"/works"}
              className={`link ${pathName === "/works" ? `${linkStyle}` : ""}`}
            >
              works
            </Link>
          </li>
          <li>
            <Link
              href={"/process"}
              className={`link ${
                pathName === "/process" ? `${linkStyle}` : ""
              }`}
            >
              process
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={`link ${pathName === "/about" ? `${linkStyle}` : ""}`}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              href={"/careers"}
              className={`link ${
                pathName === "/careers" ? `${linkStyle}` : ""
              }`}
            >
              careers
            </Link>
          </li>
        </ul>
      </nav>
      {/* contact us button */}
      <div className="hidden xl:basis-1/4 xl:flex justify-end">
        <PrimaryBtn
          href="/contact-us"
          style="h-min font-semibold hidden xl:block"
        >
          Contact Us
        </PrimaryBtn>
      </div>
      </div>
    </header>
  );
}
