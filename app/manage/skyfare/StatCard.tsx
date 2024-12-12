import * as React from "react";
import { StatCardProps } from "./types";

export function StatCard({ title, value, change }: StatCardProps) {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink p-4 rounded-md border border-solid basis-0 border-black border-opacity-10 min-w-[240px] max-md:max-w-full">
      <div className="text-black text-opacity-50 max-md:max-w-full">
        {title}
      </div>
      <div className="mt-1 text-3xl font-medium leading-none">{value}</div>
      <div className="mt-1">{change}</div>
    </div>
  );
}
