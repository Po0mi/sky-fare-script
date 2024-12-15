"use client";
import * as React from "react";
import Image from "next/image"; // Import Image component
import { motion } from "framer-motion"; // Import Framer Motion
import { NavBar } from "./components/NavBar";
import { FormField } from "./components/FormField";
import { DestinationCard } from "./components/DestinationCard";
import { destinations } from "./data/destinations";

export const SkyFare = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex relative flex-col pt-20 bg-white"
    >
      <NavBar />

      <motion.div
        variants={fadeIn}
        className="flex overflow-hidden relative z-0 gap-10 justify-center items-start px-44 py-16 w-full text-center text-white bg-zinc-950 max-md:px-5 max-md:max-w-full"
      >
        <div className="flex z-0 flex-col flex-1 shrink items-center my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <h1 className="text-4xl font-bold leading-tight max-md:max-w-full">
            Book Your Flight
          </h1>
          <p className="mt-6 text-base max-md:max-w-full">
            Explore amazing deals and book your next adventure with Skyline.
          </p>
        </div>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/4375c0390c2ebe6f7cc8a48da21680487a9b51a064afdf60421a0e7a8892be8b?apiKey=575482322951499baba16b3a7f82119f&"
          alt="Skyline"
          className="object-contain absolute inset-x-0 bottom-0 z-0 self-start h-0 w-[1440px] max-md:max-w-full"
          width={1440}
          height={800}
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="flex overflow-hidden relative z-0 gap-10 justify-center items-center px-44 py-16 w-full max-md:px-5 max-md:max-w-full"
      >
        <motion.div variants={fadeIn} className="flex z-0 flex-col flex-1 shrink self-stretch my-auto text-black basis-0 min-w-[240px] max-md:max-w-full">
          <h2 className="text-4xl font-bold leading-tight max-md:max-w-full">
            Fill in Your Details
          </h2>
          <p className="mt-6 text-base max-md:max-w-full">
            Please provide the following information to complete your booking.
          </p>
        </motion.div>
        <motion.form
          variants={fadeIn}
          className="flex z-0 flex-col flex-1 shrink justify-center self-stretch my-auto text-sm basis-0 min-w-[240px] max-md:max-w-full"
        >
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
        </motion.form>
      </motion.div>

      <motion.section
        variants={staggerContainer}
        className="flex overflow-hidden relative z-0 flex-col justify-center px-44 pb-16 w-full text-center max-md:px-5 max-md:max-w-full"
      >
        <motion.h2
          variants={fadeIn}
          className="w-full text-4xl font-bold leading-tight text-black max-md:max-w-full"
        >
          Popular Destinations
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="flex z-0 flex-col justify-center mt-16 w-full max-md:mt-10 max-md:max-w-full"
        >
          <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
            {destinations.map((destination) => (
              <motion.div key={destination.name} variants={fadeIn}>
                <DestinationCard {...destination} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.footer
        variants={fadeIn}
        className="flex overflow-hidden z-0 gap-10 justify-center items-center px-16 w-full text-xl leading-7 text-center text-black max-md:px-5 max-md:max-w-full"
      >
        <div className="flex flex-wrap gap-10 justify-center self-stretch my-auto min-h-[100px] min-w-[240px] max-md:max-w-full">
          <div className="w-[322px]">© 2022 Sky Fare. All rights reserved.</div>
          <a
            href="/terms"
            className="w-[100px] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="w-[100px] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Privacy Policy
          </a>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default SkyFare;
