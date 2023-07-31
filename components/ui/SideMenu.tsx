"use client";

import { IMenu } from "@/interfaces/base";
import DropDown from "./Dropdown";

export default function SideMenu({ menu }: IMenu) {
  return (
    <div>
      {menu.map((item: any) => {
        return (
          <DropDown
            name={item.name}
            id={item.id}
            key={item.id}
            options={item.options}
          />
        );
      })}
    </div>
  );
}
