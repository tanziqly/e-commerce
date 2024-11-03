import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface DeviceListProps {
  DeviceImg: string;
  DeviceName: string;
  DevicePrice: number;
}

export const Device = ({
  DeviceImg,
  DeviceName,
  DevicePrice,
}: DeviceListProps) => {
  return (
    <div className="flex h-fit flex-col border rounded-xl p-2">
      <img
        src={DeviceImg}
        className="rounded-lg border object-cover h-[250px]"
        alt=""
      />
      <div className="my-2">
        <h3 className="text-lg font-medium leading-none">{DeviceName}</h3>
        <p className="text-sm text-muted-foreground">{DevicePrice} RUB</p>
      </div>
      <div className="mt-auto flex gap-1 w-full">
        <Button className="flex flex-1">More details</Button>
        <Button size="icon" variant="outline">
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};
