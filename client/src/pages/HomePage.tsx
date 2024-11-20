import { DeviceList } from "@/components/DeviceList";
import { Pages } from "@/components/Pages";
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
    fetchDevices(null, null, 1, 2).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device]);

  useEffect(() => {
    fetchDevices(
      device.selectedType.id || null,
      device.selectedBrand.id || null,
      device.page,
      2
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <div className="flex w-full">
      <div className="max-w-[250px] hidden sm:block w-full mr-2 mt-4">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col h-full">
        <DeviceList />
        <div className="flex justify-center w-full mt-auto py-2 border-t">
          <Pages />
        </div>
      </div>
    </div>
  );
});
