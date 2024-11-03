import { DeviceList } from "@/components/DeviceList";
import { Sidebar } from "@/components/Sidebar";

export const HomePage = () => {
  return (
    <div className="flex w-full">
      <div className="max-w-[250px] hidden sm:block w-full mr-2 mt-4">
        <Sidebar />
      </div>
      <div className="flex flex-1 h-full">
        <DeviceList />
      </div>
    </div>
  );
};
