import { Context } from "@/main";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Device } from "./Device";

export const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className="w-full h-fit mt-4 grid xl:grid-cols-4 lg:grid-cols-3 min-[495]:grid-cols-2 grid-cols-1 gap-4">
      {device.devices?.map((device) => (
        <Device
          key={device.id}
          id={device.id}
          DeviceImg={import.meta.env.VITE_API_URL + device.img}
          DeviceName={device.name}
          DevicePrice={device.price}
        />
      ))}
    </div>
  );
});
