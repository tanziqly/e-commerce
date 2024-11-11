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
import { createType } from "@/http/DeviceAPI";
import { useState } from "react";

export function TypeModal() {
  const [value, setValue] = useState("");

  const addType = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createType({ name: value }).then((data) => {
      setValue("");
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Type</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adding Type</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name" className="text-left ml-2">
              Type
            </Label>
            <Input
              id="type"
              placeholder="write Something"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={addType} variant={"outline"}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
