import * as React from "react";
import { NavBar } from "./components/NavBar";
import { FormField } from "./components/FormField";
import { DestinationCard } from "./components/DestinationCard";
import { destinations } from "./data/destinations";

export const SkyFare = () => {
  return (
    <div className="flex relative flex-col pt-20 bg-white">
      <NavBar />
      <div className="flex overflow-hidden relative z-0 gap-10 justify-center items-start px-44 py-16 w-full text-center text-white bg-zinc-950 max-md:px-5 max-md:max-w-full">
        <div className="flex z-0 flex-col flex-1 shrink items-center my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <h1 className="text-4xl font-bold leading-tight max-md:max-w-full">
            Book Your Flight
          </h1>
          <p className="mt-6 text-base max-md:max-w-full">
            Explore amazing deals and book your next adventure with Skyline.
          </p>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/4375c0390c2ebe6f7cc8a48da21680487a9b51a064afdf60421a0e7a8892be8b?apiKey=575482322951499baba16b3a7f82119f&"
          alt=""
          className="object-contain absolute inset-x-0 bottom-0 z-0 self-start h-0 w-[1440px] max-md:max-w-full"
        />
      </div>
      <div className="flex overflow-hidden relative z-0 gap-10 justify-center items-center px-44 py-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex z-0 flex-col flex-1 shrink self-stretch my-auto text-black basis-0 min-w-[240px] max-md:max-w-full">
          <h2 className="text-4xl font-bold leading-tight max-md:max-w-full">
            Fill in Your Details
          </h2>
          <p className="mt-6 text-base max-md:max-w-full">
            Please provide the following information to complete your booking.
          </p>
        </div>
        <form className="flex z-0 flex-col flex-1 shrink justify-center self-stretch my-auto text-sm basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex gap-10 items-start w-full leading-none max-md:max-w-full">
            <FormField
              label="Full Name"
              placeholder="Enter your full name"
              id="fullName"
            />
          </div>
          <div className="flex gap-10 items-start mt-10 w-full leading-none max-md:max-w-full">
            <FormField
              label="Email"
              placeholder="Enter your email address"
              type="email"
              id="email"
            />
          </div>
          <button
            type="submit"
            className="flex overflow-hidden flex-col mt-10 w-60 max-w-full text-base font-medium text-white whitespace-nowrap"
          >
            <span className="p-3 w-full bg-black rounded-lg">Submit</span>
          </button>
        </form>
      </div>
      <section className="flex overflow-hidden relative z-0 flex-col justify-center px-44 pb-16 w-full text-center max-md:px-5 max-md:max-w-full">
        <h2 className="w-full text-4xl font-bold leading-tight text-black max-md:max-w-full">
          Popular Destinations
        </h2>
        <div className="flex z-0 flex-col justify-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
            {destinations.map((destination) => (
              <DestinationCard key={destination.name} {...destination} />
            ))}
          </div>
        </div>
      </section>
      <footer className="flex overflow-hidden z-0 gap-10 justify-center items-center px-16 w-full text-xl leading-7 text-center text-black max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center self-stretch my-auto min-h-[100px] min-w-[240px] max-md:max-w-full">
          <div className="w-[322px]">© 2022 Sky Fare. All rights reserved.</div>
          <a
            href="/terms"
            className="w-[150px] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="w-[124px] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};


export default SkyFare;