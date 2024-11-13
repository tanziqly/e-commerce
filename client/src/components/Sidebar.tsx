import { BrandSidebar } from "./BrandSidebar";
import { TypeSidebar } from "./TypeSidebar";
import { Button } from "./ui/button";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "@/main";

export const Sidebar = observer(() => {
  const { device } = useContext(Context);

  const handleReset = () => {
    device.resetFilters();
  };

  return (
    <div className="flex flex-col gap-2 mb-2">
      <TypeSidebar />
      <BrandSidebar />
      <Button onClick={handleReset} variant="destructive">
        Reset
      </Button>
    </div>
  );
});
