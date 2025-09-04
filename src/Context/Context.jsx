import { useScroll, useTransform } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);

  const { scrollY } = useScroll();
  const logoSize = useTransform(scrollY, [0, 50], ["10vw", "6vw"]);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const value = {
    isScroll,
    setIsScroll,
    logoSize,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
