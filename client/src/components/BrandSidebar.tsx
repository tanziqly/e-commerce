import { useContext } from "react";
import { SidebarWrapper } from "./SidebarWrapper";
import { Button } from "./ui/button";
import { Context } from "@/main";
import { observer } from "mobx-react-lite";

export const BrandSidebar = observer(() => {
  const { device } = useContext(Context);

  // Проверка на наличие device и device.brands, а также на то, является ли device.brands массивом
  const brands = device?.brands && Array.isArray(device.brands) ? device.brands : [];

  return (
    <SidebarWrapper category="Brand">
      {brands.map((brand) => (
        <li key={brand.id}>
          <Button
            onClick={() => device.setSelectedBrand(brand)}
            className={`w-full px-2 justify-start hover:bg-primary hover:text-white ${
              brand.id === device.selectedBrand?.id ? "bg-primary text-white" : ""
            }`}
            variant="ghost"
          >
            {brand.name}
          </Button>
        </li>
      ))}
    </SidebarWrapper>
  );
});
