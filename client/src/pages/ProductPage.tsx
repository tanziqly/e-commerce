// import { observer } from "mobx-react-lite";
// import { useContext } from "react";
// import { Context } from "@/main";

import { Button, buttonVariants } from "@/components/ui/button";
import { fetchOneDevice } from "@/http/DeviceAPI";
import { HOME_ROUTE } from "@/lib/constants";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  // const { device } = useContext(Context);
  const [device, setDevice] = useState({ info: [] });
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetchOneDevice(Number(params.id)).then((data) => {
      setDevice(data);
    });
  }, [params.id]);

  return (
    <div className="flex relative justify-center w-full">
      <Link
        to={HOME_ROUTE}
        className={`${buttonVariants({
          variant: "outline",
        })} mt-2 left-16 absolute`}
      >
        Back to home
      </Link>

      <div className="flex md:flex-row flex-col md:gap-20 gap-4 p-16">
        <img
          src={import.meta.env.VITE_API_URL + device.img}
          className="w-96 h-96 object-cover rounded-md border border-neutral-400"
          alt=""
        />
        <div className="pt-3 flex gap-6 flex-col">
          <div>
            <h2 className="font-black text-2xl">{device.name}</h2>
            <p className="text-xl font-medium">{device.price} RUB</p>
          </div>
          <Button>
            <ShoppingCart />
            Add to cart
          </Button>
          <div>
            <h3 className="text-lg font-medium">Characteristics:</h3>
            <div>
              {device.info.map((item) => (
                <ul key={item.id}>
                  <li className="flex mb-1  text-base text-neutral-500 gap-1 font-medium">
                    {item.title}:
                    <span className="text-black font-normal">{item.value}</span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
