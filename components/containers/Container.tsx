"use client";

import { ContainerProps } from "@/interfaces/base";
import { useState } from "react";
import SideMenu from "../ui/SideMenu";

export default function BaseContainer(props: ContainerProps) {
  const { children } = props;

  const [menuState] = useState([
    {
      name: "marca",
      id: "0",
      options: [
        { name: "RENAULT" },
        { name: "HYUNDAI" },
        { name: "PEUGEOT" },
        { name: "JEEP" },
        { name: "FIAT" },
        { name: "CHEVROLET" },
        { name: "MERCEDES-BENZ" },
        { name: "NISSAN" },
        { name: "TOYOTA" },
        { name: "VOLKSWAGEN" },
        { name: "HONDA" },
        { name: "CHEVROLET" },
        { name: "BMW" },
      ],
    },
    {
      name: "modelo",
      id: "1",
      options: [
        { name: "DUSTER OROCH" },
        { name: "DUSTER" },
        { name: "HB20S" },
      ],
    },
    {
      name: "año",
      id: "2",
      options: [
        { name: "2022/2023" },
        { name: "2021/2022" },
        { name: "2019/2020" },
        { name: "2018/2018" },
        { name: "2018/2017" },
        { name: "2017/2017" },
        { name: "2016/2017" },
        { name: "2015/2016" },
        { name: "2015/2015" },
        { name: "2013/2013" },
      ],
    },
    {
      name: "version",
      id: "3",
      options: [{ name: "1" }, { name: "2" }],
    },
    {
      name: "ciudad",
      id: "4",
      options: [{ name: "Capital Federal" }, { name: "Lanus" }],
    },
  ]);

  return (
    <div className="flex w-full h-screen p-8">
      <div className="w-1/5">
        <SideMenu menu={menuState} />
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  );
}
