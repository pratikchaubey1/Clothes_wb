import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";

function Maincard() {
  const { all, setall } = useContext(ProductContext);

  return (
    <div>
      {/* Heading with item count */}
      <h1 className="bg-gray-100 px-4 py-2 mt-20 text-xl font-mono flex items-center gap-2">
        Fashion{" "}
        <span className="text-sm text-gray-600">
          ({all?.length || 0} items)
        </span>
      </h1>

      <div className="bg-white mt-10 px-4 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* First 12 cards */}
          {all?.slice(0, 12).map((item, index) => (
            <div
              key={index}
              onClick={() => setall(item)}
              className="bg-white overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out mx-auto w-[90%] sm:w-full"
            >
              <div className="relative h-96 sm:h-80 md:h-80 w-full">
                <img src={item.Img} alt={item.Name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 uppercase">
                  New
                </span>
              </div>
              <div className="p-3 text-left">
                <h1 className="text-gray-900 text-sm font-medium">{item.Name}</h1>
                <h2 className="text-gray-700 text-sm font-semibold mt-1">$ {item.Price}</h2>
              </div>
            </div>
          ))}

          {/* First Big Image LEFT + 2 Cards RIGHT */}
          <div className="col-span-1 md:col-span-4 flex flex-col md:flex-row gap-6 items-stretch mt-10">
            {/* Left Big Image */}
            <div className="md:flex-[2] flex-1 h-64 sm:h-80 md:h-[950px]">
              <img
                src="https://i.pinimg.com/736x/bb/9c/32/bb9c323a89fee4978bcf52901d172557.jpg"
                alt="Special"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right 2 Cards */}
            <div className="md:flex-1 flex flex-col gap-4 sm:gap-6 mt-4 md:mt-0">
              {all?.slice(12, 14).map((item, index) => (
                <div
                  key={index}
                  onClick={() => setall(item)}
                  className="bg-white overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out mx-auto w-[90%] sm:w-full"
                >
                  <div className="relative h-96 sm:h-80 md:h-100 w-full">
                    <img src={item.Img} alt={item.Name} className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 uppercase">
                      New
                    </span>
                  </div>
                  <div className="p-3 text-left">
                    <h1 className="text-gray-900 text-sm font-medium">{item.Name}</h1>
                    <h2 className="text-gray-700 text-sm font-semibold mt-1">$ {item.Price}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next 12 cards */}
          {all?.slice(14, 26).map((item, index) => (
            <div
              key={index}
              onClick={() => setall(item)}
              className="bg-white overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out mx-auto w-[90%] sm:w-full"
            >
              <div className="relative h-96 sm:h-80 md:h-80 w-full">
                <img src={item.Img} alt={item.Name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 uppercase">
                  New
                </span>
              </div>
              <div className="p-3 text-left">
                <h1 className="text-gray-900 text-sm font-medium">{item.Name}</h1>
                <h2 className="text-gray-700 text-sm font-semibold mt-1">$ {item.Price}</h2>
              </div>
            </div>
          ))}

          {/* 2 Cards LEFT + Big Image RIGHT */}
          <div className="col-span-1 md:col-span-4 flex flex-col md:flex-row gap-6 items-stretch mt-10">
            {/* Left 2 Cards */}
            <div className="md:flex-1 flex flex-col gap-4 sm:gap-6 mt-4 md:mt-0">
              {all?.slice(26, 28).map((item, index) => (
                <div
                  key={index}
                  onClick={() => setall(item)}
                  className="bg-white overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out mx-auto w-[90%] sm:w-full"
                >
                  <div className="relative h-96 sm:h-80 md:h-100 w-full">
                    <img src={item.Img} alt={item.Name} className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 uppercase">
                      New
                    </span>
                  </div>
                  <div className="p-3 text-left">
                    <h1 className="text-gray-900 text-sm font-medium">{item.Name}</h1>
                    <h2 className="text-gray-700 text-sm font-semibold mt-1">$ {item.Price}</h2>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Big Image */}
            <div className="md:flex-[2] flex-1 h-64 sm:h-80 md:h-[950px]">
              <img
                src="https://i.pinimg.com/1200x/de/e2/f0/dee2f05679de931e9cec9100b47a39b2.jpg"
                alt="Special"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Remaining cards */}
          {all?.slice(28, 36).map((item, index) => (
            <div
              key={index}
              onClick={() => setall(item)}
              className="bg-white overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out mx-auto w-[90%] sm:w-full"
            >
              <div className="relative h-96 sm:h-80 md:h-80 w-full">
                <img src={item.Img} alt={item.Name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 uppercase">
                  New
                </span>
              </div>
              <div className="p-3 text-left">
                <h1 className="text-gray-900 text-sm font-medium">{item.Name}</h1>
                <h2 className="text-gray-700 text-sm font-semibold mt-1">$ {item.Price}</h2>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Maincard;
