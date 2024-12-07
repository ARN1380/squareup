import { props } from "./Types";

export default function PrimaryBtn({ children, style }: props) {
  return (
    <div className={`${style} bg-green-50`}>    
      {children}
    </div>
  );
}
