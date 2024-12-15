"use client";
import * as React from "react";
import { navigationItems } from "../data/navigationItems";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

export function Navigation() {
  return (
    <div className="flex overflow-hidden absolute inset-x-0 top-0 z-0 flex-wrap gap-5 justify-center items-center px-5 py-6 w-full h-20 text-black bg-white min-h-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.10)] max-md:max-w-full">
      <div className="flex-1 shrink self-stretch my-auto text-3xl font-bold leading-none basis-0 max-md:max-w-full">
        Sky Fare&nbsp;
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center self-stretch my-auto text-base bg-white min-w-[240px] max-md:max-w-full">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="self-stretch my-auto transition-all duration-300 transform hover:text-blue-500 hover:scale-110"
          >
            {item.label}
          </Link>
        ))}
        <div className="flex gap-1 items-center self-stretch p-2 my-auto text-sm leading-none rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 w-[250px]">
          <label htmlFor="siteSearch" className="sr-only">
            Search in site
          </label>
          <input
            type="search"
            id="siteSearch"
            className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none focus:outline-none"
            placeholder="Search in site"
          />
          <Image
            loading="lazy"
            src="https://www.svgrepo.com/show/532555/search.svg"
            alt="Search icon"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
