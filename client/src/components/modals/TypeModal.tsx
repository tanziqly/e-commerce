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

export function TypeModal() {
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
              value={""}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant={"outline"}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
