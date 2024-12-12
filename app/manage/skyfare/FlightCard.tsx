"use client";
import * as React from "react";
import { FlightCardProps } from "./types";

export function FlightCard({ icon, destination, date, seat }: FlightCardProps) {
  return (
    <div className="flex flex-col flex-1 shrink justify-center py-3 basis-0">
      <div className="self-center px-5 text-6xl leading-relaxed text-black whitespace-nowrap bg-black bg-opacity-10 h-[100px] rounded-[50px] w-[100px] max-md:text-4xl">
        {icon}
      </div>
      <div className="flex flex-col items-start mt-5 w-full">
        <div className="text-xl leading-snug text-black">{destination}</div>
        <div className="mt-2 text-base text-black text-opacity-50">
          Departure: {date}
        </div>
      </div>
      <div className="mt-5 text-3xl font-medium leading-none text-black">
        Seat {seat}
      </div>
    </div>
  );
}
