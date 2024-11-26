import { Device } from "@/components/Device";
import { Button } from "@/components/ui/button";
import { fetchCart } from "@/http/DeviceAPI";
import { Context } from "@/main";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";

export const BasketPage = observer(() => {
  const { device } = useContext(Context);

  const showCart = () => {
    console.log(fetchCart());
  };

  useEffect(() => {
    fetchCart().then((data) => {
      device.setDevices(data);
    });
  }, []);

  return (
    <div className="flex basket:flex-row basket:items-start items-center flex-col-reverse gap-4 w-full">
      <div className="flex justify-center mt-4 h-full flex-1">
        <div className="grid h-fit grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
          {device.devices.map((device) => (
            <Device
              key={device.id}
              DeviceImg={import.meta.env.VITE_API_URL + device.img}
              DeviceName={device.name}
              DevicePrice={device.price}
              id={device.id}
              isBasket
            />
          ))}
        </div>
      </div>
      <div className="h-full px-6 basket:border-b-0 border-b py-4 basket:py-0 basket:border-l max-w-[300px] w-full">
        <h2 className="py-2 text-2xl font-bold">Total:</h2>
        <ul className="flex flex-col gap-1">
          <li className="flex justify-between">
            <h3 className="text-neutral-500">Summary:</h3>
            <p>Rub</p>
          </li>
          <li className="flex justify-between">
            <h3 className="text-neutral-500">Quantity:</h3>
            <p>9</p>
          </li>
        </ul>
        <Button onClick={showCart} className="w-full mt-4" variant="default">
          Proceed to payment
        </Button>
      </div>
    </div>
  );
});
