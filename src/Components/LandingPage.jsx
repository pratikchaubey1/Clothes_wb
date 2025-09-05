import React, { useRef, useState } from "react";
import Background from "../assets/BackGround.png";
import One from "../assets/One.png";
import Two from "../assets/Main.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

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

  // Video control states
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

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
      scale: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    }}
  />

  {/* Bottom Content Wrapper with Animation */}
  <motion.div
    className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-6 px-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {/* Animated Heading */}
    <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      Fashion 2025
    </motion.h1>

    {/* Animated Buttons */}
    <motion.div
      className="flex gap-4 sm:gap-6 font-medium text-sm sm:text-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <motion.button
        className="py-2 px-5 sm:py-3 sm:px-7 bg-transparent border border-black rounded-md text-black transition duration-300 ease-in-out hover:bg-black hover:text-white"
        whileHover={{ scale: 1.05 }}
      >
        Shop Now
      </motion.button>
      <motion.button
        className="py-2 px-5 sm:py-3 sm:px-7 bg-transparent border border-black rounded-md text-black transition duration-300 ease-in-out hover:bg-black hover:text-white"
        whileHover={{ scale: 1.05 }}
      >
        Know More
      </motion.button>
    </motion.div>
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
              className="bg-white overflow-hidden cursor-pointer"
            >
              <Link to={item.to}>
                <img
                  src={item.Img}
                  alt={item.Name}
                  className="w-full h-72 object-cover"
                />
                <h1 className="text-xl font-semibold text-black text-center py-3">
                  {item.Name}
                </h1>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Image */}
    <div className="flex justify-center mt-15 px-4">
  <div className="relative w-full sm:max-w-md md:max-w-3xl lg:max-w-5xl h-48 sm:h-56 md:h-64 lg:h-72 
                  transform transition duration-700 hover:scale-105 hover:shadow-2xl animate-fadeInUp">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-center bg-cover rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${One})` }}
    ></div>

    {/* Centered Text + Button */}
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-black animate-fadeIn">
        Fashion 2025
      </h1>

      <button className="py-2 px-6 sm:py-3 sm:px-8 bg-white/20 rounded-md text-black font-medium 
                         transition duration-300 hover:backdrop-blur-sm hover:bg-white/30 hover:scale-105">
        SHOP THE NEW COLLECTION
      </button>
    </div>
  </div>
</div>


      {/* Featured Section with Video + Text */}
      <di className="mt-10 px-4 md:px-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left Side Video */}
        <div className="w-100  h-120 md:h-96 relative">
          <video
            ref={videoRef}
            src={Two}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover  shadow-2xl"
          />
          {/* Controls */}
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              onClick={togglePlay}
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-black hover:bg-gray-300"
            >
              {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
            </button>
            <button
              onClick={toggleMute}
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-black hover:bg-gray-300"
            >
              {isMuted ? <FaVolumeMute size={12} /> : <FaVolumeUp size={12} />}
            </button>
          </div>
        </div>

        {/* Right Side Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-gray-900">
            The LEVEL Identity Series
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-sans mb-4">
            A curated exploration of individuality captured for LEVEL, where
            style becomes a canvas for authentic self-expression, blending
            fashion with personal stories.
          </p>
          <button className="border border-black py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300">
            Keep Discovering
          </button>
        </div>
      </di >
      <div className="">
        <h1 className="text-3xl font-medium mb-4 text-black text-center mt-5">LEVEL SERVICE</h1>
        </div>
    </div>
  );
}

export default LandingPage;
