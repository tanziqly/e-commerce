import { Sidebar } from "@/components/Sidebar";

export const HomePage = () => {
  return (
    <div className="flex w-full">
      <div className="w-[250px] mr-2 mt-2">
        <Sidebar />
      </div>
      <div className="flex flex-1 h-full bg-slate-500">
        <div className="bg-slate-500"></div>
      </div>
    </div>
  );
};
