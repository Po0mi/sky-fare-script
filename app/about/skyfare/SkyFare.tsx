import * as React from "react";
import Image from "next/image"; // Import Image from Next.js
import { Navigation } from "./components/Navigation";
import { InfoCard } from "./components/InfoCard";
import { NewsletterForm } from "./components/NewsletterForm";
import { infoCards } from "./data/infoCards";

export function SkyFare() {
  return (
    <div className="flex relative flex-col pt-20 bg-white">
      <Navigation />
      <div className="flex overflow-hidden relative z-0 flex-col justify-center px-44 py-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex z-0 flex-wrap gap-10 justify-center items-center w-full max-md:max-w-full">
          <div className="flex overflow-hidden self-stretch my-auto min-h-[430px] min-w-[240px] w-[475px] max-md:max-w-full">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/b305ab96e08ba814a25391d934cf64d26188644a2f0a6175fdcee48e6e7ce144?apiKey=575482322951499baba16b3a7f82119f&"
              alt="Sky Fare Airlines presentation"
              className="object-contain flex-1 shrink w-full aspect-[1.1] basis-0 min-w-[240px] max-md:max-w-full"
              width={475} // Define width
              height={430} // Define height
            />
          </div>
          <div className="flex flex-col flex-1 shrink self-stretch my-auto text-black basis-0 min-w-[240px] max-md:max-w-full">
            <div className="text-6xl font-bold leading-none max-md:max-w-full max-md:text-4xl">
              Who We Are
            </div>
            <div className="mt-6 text-base max-md:max-w-full">
              Discover the story behind Sky Fare Airline
            </div>
          </div>
        </div>
        <div className="flex z-0 flex-col justify-center py-5 mt-10 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
            {infoCards.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>
        </div>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/4375c0390c2ebe6f7cc8a48da21680487a9b51a064afdf60421a0e7a8892be8b?apiKey=575482322951499baba16b3a7f82119f&"
          alt="Sky Fare background"
          className="object-contain absolute inset-x-0 bottom-0 z-0 w-full h-0 max-md:max-w-full"
          width={1440} // Define width
          height={400} // Define height
        />
      </div>
      <div className="flex overflow-hidden relative z-0 gap-10 justify-center px-44 py-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex z-0 flex-col flex-1 shrink justify-center my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full text-black max-md:max-w-full">
            <div className="text-4xl font-bold leading-tight max-md:max-w-full">
              Subscribe to Our Newsletter
            </div>
            <div className="mt-6 text-base max-md:max-w-full">
              Stay updated with our latest offers and news
            </div>
          </div>
          <NewsletterForm />
        </div>
        <div className="flex overflow-hidden z-0 flex-1 shrink h-full basis-0 min-w-[240px] max-md:max-w-full">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/8c006c7b871f62761073df10de8b3d6803bf33082da451661513697ebd45ea72?apiKey=575482322951499baba16b3a7f82119f&"
            alt="Newsletter subscription illustration"
            className="object-contain flex-1 shrink w-full aspect-[1.17] basis-0 min-w-[240px] max-md:max-w-full"
            width={500} // Define width
            height={400} // Define height
          />
        </div>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/4375c0390c2ebe6f7cc8a48da21680487a9b51a064afdf60421a0e7a8892be8b?apiKey=575482322951499baba16b3a7f82119f&"
          alt="Sky Fare background"
          className="object-contain absolute inset-x-0 bottom-0 z-0 self-start h-0 w-[1440px] max-md:max-w-full"
          width={1440} // Define width
          height={400} // Define height
        />
      </div>
      <footer className="flex overflow-hidden z-0 gap-10 justify-center items-center px-16 w-full text-xl leading-7 text-center text-black max-md:px-5 max-md:max-w-full">
        <div className="gap-10 self-stretch my-auto min-h-[100px] min-w-[240px] w-[383px]">
          © 2023 Sky Fare Airline. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default SkyFare;
