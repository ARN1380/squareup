import { props } from "./Types";

export default function SimpleBorder({ children, style, link, href }: props) {
  const localComponentStyle: string = 'border border-gray-15 bg-gray-15 rounded-lg text-center'
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
