"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DestinationCard from "./components/DestinationCard";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import { destinations } from "./data/destinations";
import { features } from "./data/features";

export default function SkyFare() {
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
      <Header />
      <motion.div variants={fadeIn}>
        <Hero />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="flex overflow-hidden z-0 flex-col justify-center px-44 pt-16 pb-10 w-full max-md:px-5 max-md:max-w-full"
      >
        <div className="flex flex-col items-center w-full text-center text-black max-md:max-w-full">
          <motion.h2
            variants={fadeIn}
            className="text-5xl font-bold leading-none max-md:max-w-full max-md:text-4xl"
          >
            Featured Destinations
          </motion.h2>
          <motion.p variants={fadeIn} className="text-base max-md:max-w-full">
            Explore popular destinations
          </motion.p>
        </div>
        <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full"
          >
            {destinations.map((destination) => (
              <motion.div key={destination.id} variants={fadeIn}>
                <DestinationCard {...destination} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="flex overflow-hidden relative z-0 gap-10 justify-center px-44 pt-28 pb-16 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full"
      >
        <motion.div
          variants={fadeIn}
          className="flex overflow-hidden z-0 flex-1 shrink h-full basis-0 min-w-[240px] max-md:max-w-full"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/a909e8bbe76548c3a1fa4699802cb1e70370fb7bd9691d5c493bf300fcb9d554?apiKey=575482322951499baba16b3a7f82119f&"
            alt="Why choose Sky Fare illustration"
            className="object-contain flex-1 shrink w-full aspect-[0.86] basis-0 min-w-[240px] max-md:max-w-full"
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          className="flex z-0 flex-col flex-1 shrink justify-center my-auto basis-0 min-w-[240px] max-md:max-w-full"
        >
          <div className="flex flex-col w-full text-black max-md:max-w-full">
            <motion.h2
              variants={fadeIn}
              className="text-4xl font-bold leading-tight max-md:max-w-full"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mt-6 text-base max-md:max-w-full"
            >
              Discover what sets us apart
            </motion.p>
          </div>
          <div className="flex flex-col justify-center mt-16 w-full text-center max-md:mt-10 max-md:max-w-full">
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full"
            >
              {features.map((feature) => (
                <motion.div key={feature.id} variants={fadeIn}>
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/1cef6d47039446c336e8c20e5abb335a1d2c82013f1fc31ef029419e2bf6610c?apiKey=575482322951499baba16b3a7f82119f&"
          alt=""
          className="object-contain absolute inset-x-0 bottom-0 z-0 self-start h-0 aspect-[1000] w-[1440px] max-md:max-w-full"
        />
      </motion.div>
      <Footer />
    </motion.div>
  );
}
