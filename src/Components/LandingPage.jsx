import React from "react";
import Background from "../assets/BackGround.png";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="bg-[#ceccc7] w-full min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})`,  }} // head ke liye space
        aria-label="Landing page background"
      />

     

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="absolute bottom-10 sm:bottom-12 flex gap-4 sm:gap-6 font-medium text-sm sm:text-md"
      >
        <button
          aria-label="Go to shop page"
          className="py-2 px-5 sm:py-3 sm:px-7 bg-transparent hover:bg-black border border-black rounded-md text-black hover:text-white transition duration-300 ease-in-out"
        >
          Shop Now
        </button>
        <button
          aria-label="Learn more about us"
          className="py-2 px-5 sm:py-3 sm:px-7 bg-transparent border border-black rounded-md text-black hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          Know More
        </button>
      </motion.div>
    </div>
  );
}

export default LandingPage;
