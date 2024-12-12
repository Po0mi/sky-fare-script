import * as React from "react";
import { navigationItems } from "../data/navigationItems";

export function Navigation() {
  return (
    <div className="flex overflow-hidden absolute inset-x-0 top-0 z-0 flex-wrap gap-5 justify-center items-center px-5 py-6 w-full h-20 text-black bg-white min-h-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.10)] max-md:max-w-full">
      <div className="flex-1 shrink self-stretch my-auto text-3xl font-medium leading-none basis-0 max-md:max-w-full">
        Sky Fare&nbsp;
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center self-stretch my-auto text-base bg-white min-w-[240px] max-md:max-w-full">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="self-stretch my-auto"
            tabIndex={0}
          >
            {item.label}
          </a>
        ))}
        <div className="flex gap-1 items-center self-stretch p-2 my-auto text-sm leading-none rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 w-[200px]">
          <label htmlFor="siteSearch" className="sr-only">
            Search in site
          </label>
          <input
            type="search"
            id="siteSearch"
            className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none"
            placeholder="Search in site"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/66d9a470fb75c27035749e639bb284dc4ba3d912b2b23446cd7ddad31a33bbff?apiKey=575482322951499baba16b3a7f82119f&"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt="Search icon"
          />
        </div>
      </div>
    </div>
  );
}
