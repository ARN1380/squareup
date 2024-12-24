import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import SimpleBorder from "./SimpleBorder";

interface props {
  name: string;
  position: string;
  webSiteLink: string;
  image: StaticImport | string;
  style?: string;
}
export default function StaffCard({
  name,
  position,
  webSiteLink,
  image,
  style,
}: props) {
  return (
    <div
      className={`border border-gray-15 rounded-lg bg-[#24242414] p-5 flex justify-between items-center w-full h-[103px] ${style}`}
    >
      <div className="flex items-center">
        <Image src={image} alt={`${name} photo`} height={60} width={60} />
        <div className="ml-[18px]">
          <h3 className="text-xl text-white capitalize">{name}</h3>
          <p className="text-gray-90">{position}</p>
        </div>
      </div>
      <SimpleBorder
        style="ml-[10px]"
        padding="px-5 py-[18px]"
        link
        href={webSiteLink}
      >
        Open Website
      </SimpleBorder>
    </div>
  );
}
