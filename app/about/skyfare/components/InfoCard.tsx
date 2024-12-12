import * as React from "react";
import { InfoCardProps } from "../types";

export function InfoCard({ icon, title, description, alt }: InfoCardProps) {
  return (
    <div className="flex flex-wrap flex-1 shrink gap-4 justify-center items-start self-stretch p-4 my-auto rounded-md border border-solid basis-0 border-black border-opacity-10 min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
      <div className="flex overflow-hidden min-h-[100px] w-[100px]">
        <img
          loading="lazy"
          src={icon}
          alt={alt}
          className="object-contain flex-1 shrink aspect-square basis-0 w-[100px]"
        />
      </div>
      <div className="flex flex-col flex-1 shrink text-black basis-0 min-w-[240px]">
        <div className="text-xl font-medium leading-snug">{title}</div>
        <div className="mt-2 text-base leading-6">{description}</div>
      </div>
    </div>
  );
}
