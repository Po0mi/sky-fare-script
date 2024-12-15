"use client";
import * as React from "react";
import { DestinationProps } from "../types";

export const DestinationCard = ({
  emoji,
  name,
  price,
  discount,
}: DestinationProps) => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center py-3 basis-0 min-w-[350px] items-center text-center animate-fade-in">
      <div className="text-6xl leading-relaxed text-black whitespace-nowrap max-md:text-4xl drop-shadow-lg flex justify-center items-center">
        {emoji}
      </div>
      <div className="flex flex-col items-center mt-5 w-full">
        <div className="text-xl leading-snug text-black drop-shadow-lg">{name}</div>
        <div className="mt-2 text-base text-black text-opacity-50 drop-shadow-lg">{price}</div>
      </div>
      <div className="mt-5 text-3xl font-medium leading-none text-black drop-shadow-lg">
        {discount}
      </div>
    </div>
  );
};
