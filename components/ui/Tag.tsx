"use client";

import { ClearIcon } from "@/assets/icons";

export default function Tag() {
  return (
    <div className="border border-blue-400 rounded-xl text-xs p-1.5 flex justify-between max-w-[150px] w-[100px] hover:cursor-pointer text-blue-400">
      <p>San Pablo</p>
      <ClearIcon className="h-4 w-4 fill-blue-400" />
    </div>
  );
}
