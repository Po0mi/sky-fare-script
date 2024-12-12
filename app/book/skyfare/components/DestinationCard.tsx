import * as React from "react";
import { DestinationProps } from "../types";

export const DestinationCard = ({
  emoji,
  name,
  price,
  discount,
}: DestinationProps) => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center py-3 basis-0 min-w-[240px]">
      <div className="self-center px-5 text-6xl leading-relaxed text-black whitespace-nowrap bg-black bg-opacity-10 h-[100px] rounded-[50px] w-[100px] max-md:text-4xl">
        {emoji}
      </div>
      <div className="flex flex-col items-start mt-5 w-full">
        <div className="text-xl leading-snug text-black">{name}</div>
        <div className="mt-2 text-base text-black text-opacity-50">{price}</div>
      </div>
      <div className="mt-5 text-3xl font-medium leading-none text-black">
        {discount}
      </div>
    </div>
  );
};
