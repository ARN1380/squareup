import { props } from "./Types";

export default function GradiantBorderPlus({
  children,
  padding = "p-4",
}: props) {
  return (
    <div className="bg-gradient-to-b from-[#2e2e2e] rounded-md p-[1px] w-fit">
      <div className={`bg-gradient-to-b from-[#242424] rounded-md `}>
        <div className={`bg-gradient-to-bl from-[#9dff0023] to-30% rounded-md ${padding}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
