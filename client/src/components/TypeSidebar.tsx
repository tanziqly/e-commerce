import { observer } from "mobx-react-lite";
import { SidebarWrapper } from "./SidebarWrapper";
import { Button } from "./ui/button";
import { useContext } from "react";
import { Context } from "@/main";

export const TypeSidebar = observer(() => {
  const { device } = useContext(Context);

  // Проверка на наличие device и device.types, а также на то, является ли device.types массивом
  const types = device?.types && Array.isArray(device.types) ? device.types : [];

  return (
    <SidebarWrapper category="Type">
      {types.map((type) => (
        <li key={type.id}>
          <Button
            onClick={() => device.setSelectedType(type)}
            className={`w-full px-2 justify-start hover:bg-primary hover:text-white ${
              type.id === device.selectedType?.id ? "bg-primary text-white" : ""
            }`}
            variant="ghost"
          >
            {type.name}
          </Button>
        </li>
      ))}
    </SidebarWrapper>
  );
});
