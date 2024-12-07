export default function GradiantBorder({children}: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#2e2e2e] rounded-md p-[1px]">
        <div className="bg-gradient-to-b from-[#242424] rounded-md p-4">
          {children}            
        </div>
      </div>
    </div>
  );
}
