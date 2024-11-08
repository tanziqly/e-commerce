import { Button } from "./ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "@/lib/constants";
interface DeviceListProps {
  isBasket?: boolean;
  DeviceImg: string;
  DeviceName: string;
  DevicePrice: number;
  id: number;
}

export const Device = ({
  isBasket,
  DeviceImg,
  DeviceName,
  DevicePrice,
  id,
}: DeviceListProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-fit w-fit flex-col border rounded-xl p-2">
      <img
        src={DeviceImg}
        className="rounded-lg border object-cover max-w-[250px] w-full h-[250px]"
        alt=""
      />
      <div className="my-2">
        <h3 className="text-lg font-medium leading-none">{DeviceName}</h3>
        <p className="text-sm text-muted-foreground">{DevicePrice} RUB</p>
      </div>
      <div className="mt-auto flex gap-1 w-full">
        <Button
          className="flex flex-1"
          onClick={() => navigate(`${PRODUCT_ROUTE}/${id}`)}
        >
          More details
        </Button>
        {!isBasket ? (
          <Button size="icon" variant="outline">
            <ShoppingCart />
          </Button>
        ) : (
          <Button size="icon" variant="destructive">
            <Trash2 />
          </Button>
        )}
      </div>
    </div>
  );
};
