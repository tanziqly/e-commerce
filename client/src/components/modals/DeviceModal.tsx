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
import { useState } from "react";

interface Info {
  title: string;
  description: string;
  number: number;
}

export function DeviceModal() {
  const [info, setInfo] = useState<Info[]>([]);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const deleteInfo = (number: number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <Dialog>
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
              Device type
            </Label>
            <Dropdown variant="brands" title="Brand" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="ml-2" htmlFor="email">
              Device name
            </Label>
            <Input type="text" id="deviceName" placeholder="Device name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="ml-2" htmlFor="picture">
              Picture
            </Label>
            <Input id="picture" type="file" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="ml-2" htmlFor="email">
              Price
            </Label>
            <Input type="number" id="devicePrice" placeholder="Device price" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={addInfo} className="w-full" type="submit">
            Add
          </Button>
        </DialogFooter>
        <div>
          {info.map((item) => (
            <div
              key={item.number}
              className="flex flex-col gap-2 pb-1 border-b"
            >
              <Input type="text" id="title" placeholder="Title" />
              <Input type="text" id="description" placeholder="Description" />
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
}
