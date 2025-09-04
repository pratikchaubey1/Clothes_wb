import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";
import { FiShoppingBag } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  const { isScroll, logoSize } = useContext(ProductContext);
  const addCart = [];

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScroll ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto relative px-4 sm:px-6 py-2 sm:py-3 flex justify-center items-center">
          <motion.h1
            style={{ fontSize: logoSize }}
            className="font-serif tracking-widest text-gray-600 text-center"
          >
            Prab
          </motion.h1>

          {/* Right Side Icons */}
          <div className="absolute right-4 sm:right-6 top-2 sm:top-6 flex gap-3 sm:gap-6 text-gray-700">
            {/* Cart */}
            <div className="relative flex items-center">
              <Link
                to="/cart"
                className="hover:text-red-700 transition-all duration-300 border-b-2 border-transparent hover:border-red-700"
              >
                <FiShoppingBag className="text-2xl" />
                {addCart.length > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {addCart.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Profile */}
            <a
              href="#profile"
              className="hover:text-red-700 transition-all duration-300 border-b-2 border-transparent hover:border-red-700"
            >
              <CgProfile className="text-2xl" />
            </a>

            {/* Search */}
            <a
              href="#search"
              className="hover:text-red-700 transition-all duration-300 border-b-2 border-transparent hover:border-red-700"
            >
              <IoIosSearch className="text-2xl" />
            </a>

            {/* Menu */}
            <a
              href="#menu"
              className="hover:text-red-700 transition-all duration-300 border-b-2 border-transparent hover:border-red-700"
            >
              <MdMenu className="text-2xl" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
