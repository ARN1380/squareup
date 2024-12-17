import { props } from "./Types";

export default function PrimaryBtn({ children, style, href }: props) {
  return (
    <a className={`${style} bg-green-50 rounded-lg text-gray-15 px-5 py-[14px]`} href={href}>    
      {children}
    </a>
  );
}
