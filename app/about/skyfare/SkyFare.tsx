"use client";
import * as React from "react";
import Image from "next/image"; // Import Image from Next.js
import { Navigation } from "./components/Navigation";
import { InfoCard } from "./components/InfoCard";
import { NewsletterForm } from "./components/NewsletterForm";
import { infoCards } from "./data/infoCards";
import { motion } from "framer-motion"; // Import motion

export function SkyFare() {
  return (
    <motion.div 
      className="flex relative flex-col pt-20 bg-white" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} // Add fade-in animation
    >
      <Navigation />
      <motion.div 
        className="flex overflow-hidden relative z-0 flex-col justify-center px-44 py-16 w-full max-md:px-5 max-md:max-w-full"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }} // Add a fade-in effect with delay
      >
        <div className="flex z-0 flex-wrap gap-10 justify-center items-center w-full max-md:max-w-full">
          <motion.div 
            className="flex overflow-hidden self-stretch my-auto min-h-[430px] min-w-[240px] w-[475px] max-md:max-w-full"
            initial={{ x: -200, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }} // Slide in animation
          >
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/b305ab96e08ba814a25391d934cf64d26188644a2f0a6175fdcee48e6e7ce144?apiKey=575482322951499baba16b3a7f82119f&"
              alt="Sky Fare Airlines presentation"
              className="object-contain flex-1 shrink w-full aspect-[1.1] basis-0 min-w-[240px] max-md:max-w-full"
              width={475}
              height={430}
            />
          </motion.div>
          <motion.div 
            className="flex flex-col flex-1 shrink self-stretch my-auto text-black basis-0 min-w-[240px] max-md:max-w-full"
            initial={{ x: 200, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }} // Slide in animation
          >
            <div className="text-6xl font-bold leading-none max-md:max-w-full max-md:text-4xl">
              Who We Are
            </div>
            <div className="mt-6 text-base max-md:max-w-full">
              Discover the story behind Sky Fare Airline
            </div>
          </motion.div>
        </div>
        <div className="flex z-0 flex-col justify-center py-5 mt-10 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
            {infoCards.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>
        </div>
        <motion.div 
          className="object-contain absolute inset-x-0 bottom-0 z-0 w-full h-0 max-md:max-w-full"
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 1 }} // Slide up with fade-in
        >
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/4375c0390c2ebe6f7cc8a48da21680487a9b51a064afdf60421a0e7a8892be8b?apiKey=575482322951499baba16b3a7f82119f&"
            alt="Sky Fare background"
            className="object-contain w-full h-0 max-md:max-w-full"
            width={1440}
            height={400}
          />
        </motion.div>
      </motion.div>
      <div className="flex overflow-hidden relative z-0 gap-10 justify-center px-44 py-16 w-full max-md:px-5 max-md:max-w-full">
        <motion.div 
          className="flex z-0 flex-col flex-1 shrink justify-center my-auto basis-0 min-w-[240px] max-md:max-w-full"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1 }} // Fade-in effect with delay
        >
          <div className="flex flex-col w-full text-black max-md:max-w-full">
            <div className="text-4xl font-bold leading-tight max-md:max-w-full">
              Subscribe to Our Newsletter
            </div>
            <div className="mt-6 text-base max-md:max-w-full">
              Stay updated with our latest offers and news
            </div>
          </div>
          <NewsletterForm />
        </motion.div>
        <motion.div 
          className="flex overflow-hidden z-0 flex-1 shrink h-full basis-0 min-w-[240px] max-md:max-w-full"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1.5 }} // Fade-in effect with delay
        >
          <Image
            loading="lazy"
            src="https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg"
            alt="Newsletter subscription illustration"
            className="object-contain flex-1 shrink w-full aspect-[1.17] basis-0 min-w-[240px] max-md:max-w-full"
            width={500}
            height={400}
          />
        </motion.div>
        <motion.div 
          className="object-contain absolute inset-x-0 bottom-0 z-0 self-start h-0 w-[1440px] max-md:max-w-full"
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 2 }} // Slide up with fade-in
        >
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/4375c0390c2ebe6f7cc8a48da21680487a9b51a064afdf60421a0e7a8892be8b?apiKey=575482322951499baba16b3a7f82119f&"
            alt="Sky Fare background"
            className="object-contain w-full h-0 max-md:max-w-full"
            width={1440}
            height={400}
          />
        </motion.div>
      </div>
      <footer className="flex overflow-hidden z-0 gap-10 justify-center items-center px-16 w-full text-xl leading-7 text-center text-black max-md:px-5 max-md:max-w-full">
        <motion.div 
          className="gap-10 self-stretch my-auto min-h-[100px] min-w-[240px] w-[383px]"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 2 }} // Fade-in effect for footer
        >
          © 2023 Sky Fare Airline. All rights reserved.
        </motion.div>
      </footer>
    </motion.div>
  );
}

export default SkyFare;
