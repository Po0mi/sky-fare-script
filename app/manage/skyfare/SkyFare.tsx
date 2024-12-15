"use client";
import * as React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { FlightCard } from "./FlightCard";
import { StatCard } from "./StatCard";
import Image from "next/image";
import Link from "next/link";

const upcomingFlights = [
  {
    icon: "✈️",
    destination: "Flight to Paris",
    date: "12/12/2021",
    seat: "18A",
  },
  {
    icon: "✈️",
    destination: "Flight to Tokyo",
    date: "15/12/2021",
    seat: "22F",
  },
];

const pastFlights = [
  {
    icon: "🌎",
    destination: "Madrid Trip",
    date: "01/11/2021",
    seat: "15C",
  },
  {
    icon: "🌎",
    destination: "New York Tour",
    date: "20/10/2021",
    seat: "7A",
  },
];

const stats = [
  {
    title: "Total Flights",
    value: "132",
    change: "+7%",
  },
  {
    title: "On-time Arrivals",
    value: "89%",
    change: "-3%",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function SkyFare() {
  return (
    <motion.div
    className="flex relative flex-col pt-20 bg-white"
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={fadeIn}
    >
      {/* Header */}
      <header className="flex overflow-hidden absolute inset-x-0 top-0 z-0 flex-wrap gap-5 justify-center items-center px-5 py-6 w-full h-20 text-black bg-white min-h-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
        <div className="flex-1 shrink self-stretch my-auto text-3xl font-bold leading-none basis-0 max-md:max-w-full">
          Sky Fare
        </div>
        <nav className="flex flex-wrap gap-10 justify-center items-center self-stretch my-auto text-base bg-white min-w-[240px] max-md:max-w-full">
          {[
            { href: "/home", label: "Home" },
            { href: "/book", label: "Book" },
            { href: "/manage", label: "Manage" },
            { href: "/about", label: "About" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="self-stretch my-auto transition-all duration-300 transform hover:text-blue-500 hover:scale-110"
            >
              {link.label}
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
        </nav>
      </header>

      {/* Hero Section */}
      <motion.div
        className="flex overflow-hidden relative z-0 gap-10 justify-center items-center px-44 py-8 w-full text-black bg-white bg-opacity-60 min-h-[160px] max-md:px-5 max-md:max-w-full"
        variants={fadeIn}
      >
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/4e134b82144eaab1aeb6f66d3f05f52ddae52d5ad83dbaa2510e6e823971b971?apiKey=575482322951499baba16b3a7f82119f&"
          alt="Sky Fare Logo"
          width={100}
          height={100}
          className="object-contain z-0 shrink-0 self-stretch my-auto aspect-square rounded-[50px] w-[100px]"
        />
        <div className="flex z-0 flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <h1 className="text-2xl font-bold leading-none max-md:max-w-full">
            Explore Sky Fare Maris
          </h1>
          <p className="mt-3 text-base max-md:max-w-full">Manage Your Flight</p>
        </div>
      </motion.div>

      {/* Upcoming Flights Section */}
      <section className="flex overflow-hidden relative z-0 gap-10 justify-center items-center px-44 w-full max-md:px-5 max-md:max-w-full">
        <h2 className="flex-1 shrink self-stretch my-auto text-4xl font-bold leading-tight text-black min-w-[240px] max-md:max-w-full">
          Upcoming Flights
        </h2>
        <div className="flex z-0 flex-col flex-1 shrink justify-center self-stretch my-auto text-center basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
            {upcomingFlights.map((flight, index) => (
              <FlightCard key={index} {...flight} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Flights Section */}
      <section className="flex overflow-hidden relative z-0 gap-10 justify-center items-center px-44 pb-16 w-full max-md:px-5 max-md:max-w-full">
        <h2 className="flex-1 shrink self-stretch my-auto text-4xl font-bold leading-tight text-black min-w-[240px] max-md:max-w-full">
          Past Flights
        </h2>
        <div className="flex z-0 flex-col flex-1 shrink justify-center self-stretch my-auto text-center basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
            {pastFlights.map((flight, index) => (
              <FlightCard key={index} {...flight} />
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="flex overflow-hidden relative z-0 gap-10 justify-center items-center px-44 pb-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex z-0 flex-col flex-1 shrink self-stretch my-auto text-black basis-0 min-w-[240px] max-md:max-w-full">
          <h2 className="text-4xl font-bold leading-tight max-md:max-w-full">
            Feedback Form
          </h2>
          <p className="mt-6 text-base max-md:max-w-full">
            Share your flight experience with us
          </p>
        </div>
        <form className="flex z-0 flex-col flex-1 shrink justify-center self-stretch my-auto text-sm basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex gap-10 items-start w-full leading-none max-md:max-w-full">
            <div className="flex overflow-hidden flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
              <label
                htmlFor="rating"
                className="font-medium text-black max-md:max-w-full"
              >
                Overall Rating
              </label>
              <select
                id="rating"
                className="flex-1 shrink gap-1 self-stretch px-3 py-2 mt-1 w-full bg-white rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 max-md:max-w-full"
              >
                <option value="">Rate from 1 to 5</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-10 items-start mt-10 w-full leading-none max-md:max-w-full">
            <div className="flex overflow-hidden flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
              <label
                htmlFor="comments"
                className="font-medium text-black max-md:max-w-full"
              >
                Comments
              </label>
              <textarea
                id="comments"
                className="flex-1 shrink gap-1 self-stretch px-3 py-2 mt-1 w-full bg-white rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 max-md:max-w-full"
                placeholder="Your feedback"
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex overflow-hidden flex-col mt-10 w-60 max-w-full text-base font-medium text-white whitespace-nowrap"
          >
            <span className="p-3 w-full bg-black rounded-lg">Submit</span>
          </button>
        </form>
      </section>

      {/* Flight Statistics Section */}
      <section className="flex overflow-hidden relative z-0 flex-col justify-center px-44 w-full text-base text-black max-md:px-5 max-md:max-w-full">
        <h2 className="flex z-0 gap-10 justify-center items-center w-full text-4xl font-bold leading-tight text-center max-md:max-w-full">
          Flight Statistics
        </h2>
        <div className="flex z-0 flex-col justify-center mt-4 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
        <div className="flex z-0 flex-col mt-4 w-full min-h-[440px] text-black text-opacity-50 max-md:max-w-full">
          <div className="flex flex-col flex-1 p-5 w-full rounded-md border border-solid border-black border-opacity-10 max-md:max-w-full">
            <h3 className="text-xl font-medium leading-snug text-black max-md:max-w-full">
              Flights Performance
            </h3>
            <p className="mt-3 max-md:max-w-full">Number of Flights</p>
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/548ed912a5b7861e5a5b35021d29837901ee39a9d1e827ccbdbbb2b38d4b9114?apiKey=575482322951499baba16b3a7f82119f&"
              alt="Flight performance graph showing number of flights over months"
              className="object-contain flex-1 mt-3 w-full aspect-[3.68] max-md:max-w-full"
              width={700}
              height={380}
            />
            <p className="mt-3 text-right max-md:max-w-full">Months</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex overflow-hidden z-0 gap-10 justify-center items-center px-16 mt-4 w-full text-xl leading-7 text-center max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center self-stretch my-auto min-h-[100px] min-w-[240px] max-md:max-w-full">
          <p className="w-[322px]">© 2022 Sky Fare. All rights reserved.</p>
          <Link href="/terms" className="w-[150px]">
            Terms of Service
          </Link>
          <Link href="/privacy" className="w-[124px]">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </motion.div>
  );
}

export default SkyFare;
