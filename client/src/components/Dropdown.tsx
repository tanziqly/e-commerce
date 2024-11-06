import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "@/main";

export const Dropdown = observer(
  ({ title, variant }: { title: string; variant: "types" | "brands" }) => {
    const { device } = useContext(Context);

    return (
      <Select>
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
  }
);
