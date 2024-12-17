import { props } from "./Types";

export default function BlurBorder({ children, style, link, href }: props) {
  const localComponentStyle: string = 'border border-gray-15 bg-gray-15 bg-opacity-15 backdrop-blur-md rounded-lg text-center'
  if (link) {
    return (
      <a
        className={`${style} ${localComponentStyle}`}
        href={href}
      >
        {children}
      </a>
    );  
  } else {
    return (
      <div
        className={`${style} ${localComponentStyle}`}
      >
        {children}
      </div>
    );
  }
}
