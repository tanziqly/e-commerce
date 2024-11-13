import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Dropdown } from "@/components/Dropdown";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { createDevice } from "@/http/DeviceAPI";
import { Context } from "@/main";

interface Info {
  title: string;
  description: string;
  number: number;
}

export const DeviceModal = observer(() => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const { device } = useContext(Context);

  const [name, setName] = useState("");
  const [picture, setPicture] = useState<File | null>(null);
  const [price, setPrice] = useState(0);

  const [info, setInfo] = useState<Info[]>([
    { number: 0, title: "", description: "" },
  ]);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const deleteInfo = (number: number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPicture(e.target.files?.[0] || null);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", picture!);
    formData.append("brandId", device.selectedBrand?.id.toString() || "");
    formData.append("typeId", device.selectedType?.id.toString() || "");
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => {
      closeModal();
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Device</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Adding Device</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="ml-2" htmlFor="email">
              Device type
            </Label>
            <Dropdown variant="types" title="Type" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="ml-2" htmlFor="email">
              Device brand
            </Label>
            <Dropdown variant="brands" title="Brand" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="ml-2" htmlFor="email">
              Device name
            </Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="deviceName"
              placeholder="Device name"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="ml-2" htmlFor="picture">
              Picture
            </Label>
            <Input id="picture" onChange={selectFile} type="file" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="ml-2" htmlFor="email">
              Price
            </Label>
            <Input
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              type="number"
              id="devicePrice"
              placeholder="Device price"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={addDevice} className="w-full" type="submit">
            Add
          </Button>
          <Button onClick={addInfo} className="w-full" type="submit">
            Add info
          </Button>
        </DialogFooter>
        <div>
          {info.map((item) => (
            <div
              key={item.number}
              className="flex flex-col gap-2 pb-1 border-b"
            >
              <Input
                type="text"
                value={item.title || ""}
                onChange={(e) =>
                  changeInfo("title", e.target.value, item.number)
                }
                id="title"
                placeholder="Title"
              />
              <Input
                type="text"
                value={item.description || ""}
                onChange={(e) =>
                  changeInfo("description", e.target.value, item.number)
                }
                id="description"
                placeholder="Description"
              />
              <Button
                onClick={() => deleteInfo(item.number)}
                variant={"destructive"}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
});
