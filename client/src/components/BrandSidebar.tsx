import { useContext } from "react";
import { SidebarWrapper } from "./SidebarWrapper";
import { Button } from "./ui/button";
import { Context } from "@/main";
import { observer } from "mobx-react-lite";

export const BrandSidebar = observer(() => {
  const { device } = useContext(Context);

  return (
    <SidebarWrapper category="Бренд">
      {device.brands.map((brand) => (
        <li key={brand.id}>
          <Button
            onClick={() => device.setSelectedBrand(brand)}
            className={`w-full px-2 justify-start hover:bg-primary hover:text-white ${
              brand.id === device.selectedBrand.id
                ? "bg-primary text-white"
                : ""
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
