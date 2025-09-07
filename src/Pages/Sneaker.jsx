import React, { useContext } from "react";
import Sneakers from "../assets/Sneakers.png";
import { ProductContext } from "../Context/Context";

function Sneaker() {
  const { Sceekers, setSceekers } = useContext(ProductContext);

  return (
    <div>
      {/* Heading */}
      {/* Heading with item count */}
<h1 className="flex justify-between  items-center bg-gray-100 px-4 py-2 mt-20 text-xl font-mono">
  <span>Sneaker</span>
  <span className="text-sm  text-gray-600">{Sceekers.length} items</span>
</h1>


      {/* Top Image Banner */}
      <div className="w-full h-64 sm:h-80 md:h-[400px] mt-3 relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Sneakers})` }}
        ></div>
      </div>

      {/* Products Grid */}
      <div className="bg-white mt-10 px-4 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* First 8 cards */}
          {Sceekers.slice(0, 8).map((item, index) => (
            <div
              key={index}
              onClick={() => setSceekers(item)}
              className="bg-white overflow-hidden hover:scale-105 transform transition duration-300 ease-in-outmx-auto w-[90%] sm:w-full"
            >
              <div className="relative h-72 sm:h-60 md:h-60 w-full">
                <img
                  src={item.Img}
                  alt="photo"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-black text-white text-[10px] tracking-wide px-2 py-0.5 uppercase">
                  New
                </span>
              </div>
              <div className="p-3 text-left">
                <h1 className="text-gray-900 text-sm font-medium">{item.Name}</h1>
                <h2 className="text-gray-700 text-sm font-semibold mt-1">{item.Price}</h2>
              </div>
            </div>
          ))}

          {/* Middle Section → 1 Big Image + 2 Cards */}
          <div className="col-span-1 md:col-span-4 flex flex-col md:flex-row gap-6 items-stretch mt-10">
            {/* Left Side Big Image */}
            <div className="md:flex-[2] flex-1 h-64 sm:h-80 md:h-[600px]">
              <img
                src="https://i.pinimg.com/1200x/9a/ee/aa/9aeeaa8d3891381d6cc1542b6589c47d.jpg"
                alt="Special"
                className="w-full h-full object-cover "
              />
            </div>

            {/* Right Side → 2 Cards */}
            <div className="md:flex-1 flex flex-col gap-4 sm:gap-6 mt-4 md:mt-0">
              {Sceekers.slice(8, 10).map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSceekers(item)}
                  className="bg-white overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out mx-auto w-[90%] sm:w-full"
                >
                  <div className="relative h-72 sm:h-60 md:h-60 w-full">
                    <img
                      src={item.Img}
                      alt="photo"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-black text-white text-[10px] tracking-wide px-2 py-0.5 uppercase">
                      New
                    </span>
                  </div>
                  <div className="p-3 text-left">
                    <h1 className="text-gray-900 text-sm font-medium">{item.Name}</h1>
                    <h2 className="text-gray-700 text-sm font-semibold mt-1">{item.Price}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next 8 cards */}
          {Sceekers.slice(10, 18).map((item, index) => (
            <div
              key={index}
              onClick={() => setSceekers(item)}
              className="bg-white overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out mx-auto w-[90%] sm:w-full"
            >
              <div className="relative h-72 sm:h-60 md:h-60 w-full">
                <img
                  src={item.Img}
                  alt="photo"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-black text-white text-[10px] tracking-wide px-2 py-0.5 uppercase">
                  New
                </span>
              </div>
              <div className="p-3 text-left">
                <h1 className="text-gray-900 text-sm font-medium">{item.Name}</h1>
                <h2 className="text-gray-700 text-sm font-semibold mt-1">{item.Price}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sneaker;
