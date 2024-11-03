import { BrandSidebar } from "./BrandSidebar";
import { TypeSidebar } from "./TypeSidebar";

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2">
      <TypeSidebar />
      <BrandSidebar />
    </div>
  );
};
