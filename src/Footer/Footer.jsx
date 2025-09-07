import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black mt-20 text-white px-4 sm:px-10 py-10 md:py-20">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl py-5 font-medium text-center">
        SIGN UP FOR LEVEL UPDATES
      </h1>

      {/* Info Text */}
      <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
        Get exclusive updates on the collection's launch,
      </p>
      <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-5">
        personalized communication and the House's latest news.
      </p>

      {/* Contact Link */}
      <div className="text-center my-5">
        <Link to="/Contact">
          <h2 className="text-lg sm:text-xl md:text-2xl py-3 font-medium hover:text-gray-400 transition">
            +Contact
          </h2>
        </Link>
      </div>

      {/* LEVEL Title */}
      <h1 className="text-5xl sm:text-7xl md:text-9xl font-sans text-center my-10">
        L E V E L
      </h1>

      {/* Developer Credit */}
      <p className="text-center bg-black py-4 text-sm sm:text-base text-gray-600">
        Developed by <span className="font-medium">Prab Only</span>
      </p>
    </div>
  );
}

export default Footer;
