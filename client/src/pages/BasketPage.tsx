import { Device } from "@/components/Device";
import { Button } from "@/components/ui/button";
export const BasketPage = () => {
  return (
    <div className="flex basket:flex-row basket:items-start items-center flex-col-reverse gap-4 w-full">
      <div className="flex justify-center mt-4 h-full flex-1">
        <div className="grid h-fit grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
          <Device
            DeviceImg={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrmbEEUOzvUm5sSXoEL0gjmTUutwQSDqKpg&s"
            }
            DeviceName={"iphone 12"}
            DevicePrice={100000}
            id={1}
            isBasket
          />
          <Device
            DeviceImg={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrmbEEUOzvUm5sSXoEL0gjmTUutwQSDqKpg&s"
            }
            DeviceName={"iphone 12"}
            DevicePrice={100000}
            id={2}
            isBasket
          />
          <Device
            DeviceImg={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrmbEEUOzvUm5sSXoEL0gjmTUutwQSDqKpg&s"
            }
            DeviceName={"iphone 12"}
            DevicePrice={100000}
            id={3}
            isBasket
          />
        </div>
      </div>
      <div className="h-full px-6 basket:border-b-0 border-b py-4 basket:py-0 basket:border-l max-w-[300px] w-full">
        <h2 className="py-2 text-2xl font-bold">Total:</h2>
        <ul className="flex flex-col gap-1">
          <li className="flex justify-between">
            <h3 className="text-neutral-500">Summary:</h3>
            <p>100000</p>
          </li>
          <li className="flex justify-between">
            <h3 className="text-neutral-500">Quantity:</h3>
            <p>2</p>
          </li>
        </ul>
        <Button className="w-full mt-4" variant="default">
          Proceed to payment
        </Button>
      </div>
    </div>
  );
};
