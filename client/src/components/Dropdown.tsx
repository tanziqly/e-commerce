import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "@/main";
import { fetchTypes, fetchBrands } from "@/http/DeviceAPI";

interface DropdownProps {
  title: string;
  variant: "types" | "brands";
}

export const Dropdown = observer(({ title, variant }: DropdownProps) => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => {
      device.setTypes(data);
    });
    fetchBrands().then((data) => {
      device.setBrands(data);
    });
  }, [device]);

  const handleValueChange = (value: string) => {
    const selectedItem = device[variant].find(
      (item) => item.id.toString() === value
    );
    if (selectedItem) {
      device[variant === "types" ? "setSelectedType" : "setSelectedBrand"](
        selectedItem
      );
    }
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={`Select a ${title}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {device[variant].map((item: { id: number; name: string }) => (
            <SelectItem key={item.id} value={item.id.toString()}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});
