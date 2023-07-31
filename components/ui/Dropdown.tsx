"use client";

import { DownIcon, UpIcon } from "@/assets/icons";
import { IDropDown } from "@/interfaces/base";
import { useState } from "react";

export default function DropDown({ name, id, options }: IDropDown) {
  const [isOpenState, setIsOpenState] = useState(false);
  return (
    <div className="p-2 py-4">
      <div
        className="flex justify-between hover:cursor-pointer"
        onClick={() => {
          setIsOpenState(!isOpenState);
        }}
      >
        <p className="font-medium">{name}</p>
        {isOpenState ? (
          <UpIcon className="h-4 w-4 mt-1" />
        ) : (
          <DownIcon className="h-4 w-4 mt-1" />
        )}
      </div>
      <div className="border-t border-gray-200">
        {isOpenState ? (
          <ul>
            {options.map((item, index: number) => {
              return (
                <li
                  key={index}
                  className="pt-1 hover:cursor-pointer"
                  onClick={() => {
                    console.log(item);
                  }}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
