import Image from "next/image";
import logo from "@/app/src/images/Logo-desktop.png";

export default function Header() {
  return (
    <header className="w-full h-[106px] border-b border-b-gray-15 flex justify-between pt-10 px-4 pb-5">
      <div className="h-full">
        <Image src={logo} alt="SquareUp logo" placeholder="blur" className="h-full w-auto" />
      </div>

      <div className="w-[46px] h-[46px] bg-gray-15 rounded-md p-1.5">
        <div className="w-full h-full flex items-end justify-center flex-col gap-[5px] pr-1">
          <div className="border border-green-80 w-[25px] rounded-full"></div>
          <div className="border border-green-80 w-[25px] rounded-full"></div>
          <div className="border border-green-80 w-[16px] rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
