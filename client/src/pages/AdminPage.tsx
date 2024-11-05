import { TypeModal } from "@/components/modals/TypeModal";
import { BrandModal } from "@/components/modals/BrandModal";
import { DeviceModal } from "@/components/modals/DeviceModal";
export const AdminPage = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col max-w-[350px] w-full gap-2">
        <h1 className="text-lg font-bold">Add:</h1>
        <TypeModal />
        <BrandModal />
        <DeviceModal />
      </div>
    </div>
  );
};
