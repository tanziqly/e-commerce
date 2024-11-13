import { DeviceList } from "@/components/DeviceList";
import { Sidebar } from "@/components/Sidebar";
import {
  fetchBrands,
  fetchDevices,
  // fetchOneDevice,
  fetchTypes,
} from "@/http/DeviceAPI";
import { Context } from "@/main";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";

export const HomePage = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => {
      device.setTypes(data);
    });
    fetchBrands().then((data) => {
      device.setBrands(data);
    });
    fetchDevices().then((data) => {
      device.setDevices(data);
    });
  }, [device]);

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
});
