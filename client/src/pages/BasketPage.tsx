import { Device } from "@/components/Device";
import { Button } from "@/components/ui/button";
import { fetchCart } from "@/http/DeviceAPI";
import { Context } from "@/main";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";

export const BasketPage = observer(() => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const { device } = useContext(Context);

  useEffect(() => {
    fetchCart().then((data) => {
      setQuantity(data.length);
      const sum = data.reduce((acc, item) => acc + item.price, 0);
      setPrice(sum);
      device.setDevices(data);
    });
  }, []);

  const showCart = () => {
    console.log(fetchCart());
    console.log(`Sum: ${price}, Quantity: ${quantity}`);
  };

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
              id={device.idMore}
              basketDeviceId={device.id}
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
            <p>{price} Rub</p>
          </li>
          <li className="flex justify-between">
            <h3 className="text-neutral-500">Quantity:</h3>
            <p>{quantity}</p>
          </li>
        </ul>
        <Button onClick={showCart} className="w-full mt-4" variant="default">
          Proceed to payment
        </Button>
      </div>
    </div>
  );
});
