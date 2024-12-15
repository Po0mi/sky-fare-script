"use client";
import * as React from "react";
import { FlightCardProps } from "./types";

export function FlightCard({ icon, destination, date, seat }: FlightCardProps) {
  return (
    <div className="flex flex-col flex-1 shrink justify-center py-3 basis-0 items-center">
      <div className="text-6xl h-[100px] w-[100px] flex items-center justify-center mx-auto">
        {icon}
      </div>
      <div className="flex flex-col items-center mt-5 w-full">
        <div className="text-xl leading-snug text-black text-center">{destination}</div>
        <div className="mt-2 text-base text-black text-opacity-50 text-center">
          Departure: {date}
        </div>
      </div>
      <div className="mt-5 text-3xl font-medium leading-none text-black text-center">
        Seat {seat}
      </div>
    </div>
  );
}
