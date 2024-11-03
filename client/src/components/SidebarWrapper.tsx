import { ReactNode } from "react";

export const SidebarWrapper = ({
  children,
  category,
}: {
  children: ReactNode;
  category: string;
}) => {
  return (
    <ul className="flex flex-col gap-1 p-2 border rounded-lg text-neutral-500">
      <li className="flex flex-col">
        <div className="flex font-bold items-center gap-2 py-1 px-2 text-neutral-800">
          <div className="h-1 w-1 rounded-full bg-neutral-800"></div>
          {category}
        </div>
        <hr />
      </li>
      {children}
    </ul>
  );
};
