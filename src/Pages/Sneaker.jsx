import { div } from "framer-motion/client";
import React, { use, useContext } from "react";
import { PiSneakerMoveDuotone } from "react-icons/pi";
import { ProductContext } from "../Context/Context";

function Sneaker() {
    const {Sceekers,setSceekers} = useContext(ProductContext)
  return (
    <div>
      <h1 className="text-left bg-gray-100 px-2 gap-2 text-xl flex  font-mono mt-20">
        Sneaker 
      </h1>
      <div></div>
    </div>
  );
}

export default Sneaker;
