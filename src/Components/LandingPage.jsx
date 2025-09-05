import React from "react";
import Background from "../assets/BackGround.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LandingPage() {
  const products = [
    {
      Img: "https://i.pinimg.com/736x/9d/53/e0/9d53e0dfa111c93e7a127344f3731a6b.jpg",
      Name: "Sneaker",
      to: "/sneaker",
    },
    {
      Img: "https://i.pinimg.com/1200x/b3/92/fe/b392fe4fd072b53225b0775f3bf9dd56.jpg",
      Name: "Bag",
      to: "/bag",
    },
    {
      Img: "https://i.pinimg.com/736x/5b/47/b4/5b47b4084351b1940b5bb42317300acb.jpg",
      Name: "Baggy Jeans",
      to: "/BaggyJeans",
    },
    {
      Img: "https://i.pinimg.com/1200x/3c/fb/f1/3cfbf1d55cf2cda39ada027a7e5d0341.jpg",
      Name: "Baggy Shirt",
      to: "/BaggyShirt",
    },
  ];

  return (
    <div>
      {/* Landing Section */}
      <div className="bg-[#ceccc7] w-full min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Image with Animation */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Background})` }}
          aria-label="Landing page background"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{
            opacity: { duration: 2, ease: "easeOut" },
            scale: { duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          }}
        />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="absolute bottom-10 sm:bottom-12 flex gap-4 sm:gap-6 font-medium text-sm sm:text-md"
        >
          <button className="py-2 px-5 sm:py-3 sm:px-7 bg-transparent hover:bg-black border border-black rounded-md text-black hover:text-white transition duration-300 ease-in-out">
            Shop Now
          </button>
          <button className="py-2 px-5 sm:py-3 sm:px-7 bg-transparent border border-black rounded-md text-black hover:bg-black hover:text-white transition duration-300 ease-in-out">
            Know More
          </button>
        </motion.div>
      </div>

      {/* Products Section */}
      <div>
        <h1 className="text-3xl font-medium mb-4 text-black text-center mt-5">
          EXPLORE THE LATEST STYLES
        </h1>

        {/* Cards Grid */}
        <div className="mt-5 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            >
              <Link to={item.to}>
                {/* Product Image */}
                <img
                  src={item.Img}
                  alt={item.Name}
                  className="w-full h-72 object-cover"
                />

                {/* Title */}
                <h1 className="text-xl font-semibold text-black text-center py-3">
                  {item.Name}
                </h1>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
