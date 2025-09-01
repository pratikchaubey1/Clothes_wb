import React from "react";
import Background from "../assets/BackGround.png";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="bg-[#ceccc7] w-full min-h-screen relative">
      {/* Background Image */}
      <div
        className="relative min-h-screen bg-cover w-full bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
        aria-label="Landing page background"
      />

      {/* Buttons with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="absolute bottom-8 left-6 sm:left-12 lg:left-[110px] flex flex-row gap-3 sm:gap-4 font-bold text-sm sm:text-md"
      >
        <button
          aria-label="Go to shop page"
          className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent hover:bg-black border border-black rounded-md text-black hover:text-white transition duration-200 ease-in-out"
        >
          Shop Now
        </button>
        <button
          aria-label="Learn more about us"
          className="py-2 px-4 sm:py-3 sm:px-6 bg-transparent border border-black rounded-md text-black hover:bg-black hover:text-white transition duration-200 ease-in-out"
        >
          Know More
        </button>
      </motion.div>
    </div>
  );
}

export default LandingPage;
