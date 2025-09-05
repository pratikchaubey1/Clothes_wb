import { useScroll, useTransform } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 }); 
  const { scrollY } = useScroll();

  // Logo size & position (for landing page only)
const logoSize = useTransform(
  scrollY,
  [0, 200],
  isDesktop ? ["10vw", "5vw"] : ["16vw", "8vw"]
);

const logoY = useTransform(
  scrollY,
  [0, 200],
  isDesktop ? ["0vh", "-8vh"] : ["0vh", "-6vh"]
);

const logoX = useTransform(
  scrollY,
  [0, 200],
  ["0vw", isDesktop ? "0vw" : "-18vw"]
);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown animation
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
  };

  // Search animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

   const [Sceekers,setSceekers] = useState([ 
      {Name: "Nike Air One" ,Price:15000 , Img:"https://i.pinimg.com/1200x/7f/86/0e/7f860e2f259fb5518a82f65aaa79d413.jpg"},
      {Name:"Nike Air Jordan" , Price:18000 ,Img:"https://i.pinimg.com/736x/f4/7f/fd/f47ffd0542531b6e54608d900a46b799.jpg"},
      {Name:"Nike Air Force" , Price:17000 ,Img:"https://i.pinimg.com/736x/62/a6/fe/62a6feaec1a4cc73050dd2de58280b08.jpg"},
      {Name:"Nike Air Max" , Price:16000 ,Img:"https://i.pinimg.com/1200x/78/be/38/78be386b31f6df0cd73f99e694d5ff15.jpg"},
      {Name:"Nike Air Zoom" , Price:19000 ,Img:"https://i.pinimg.com/736x/b4/fb/da/b4fbdaa7eb8e7e21c96de5e1ee4e11ac.jpg"},
      {Name:"Nike Air Presto" , Price:17500 ,Img:"https://i.pinimg.com/736x/87/f1/39/87f139592ff8e9a638ddc84deaf7aa3d.jpg"},
      {Name:"Nike Air VaporMax" , Price:20000 ,Img:""},
      {Name:"Nike Air Zoom Pegasus" , Price:18500 ,Img:"https://i.pinimg.com/1200x/f4/ce/86/f4ce86b9b0c18bf938aee7a7916f396c.jpg"},
      {Name:"Nike Air Zoom SuperRep" , Price:19500 ,Img:"https://i.pinimg.com/1200x/cb/42/e4/cb42e4a8826301fa318bf6e37f6ebce7.jpg"},
      {Name:"Nike Air Zoom TerraKnee" , Price:18000 ,Img:"https://i.pinimg.com/736x/23/8d/63/238d63d2587dbbad70fed834edf1468e.jpg"},
      {Name:"Nike Air Zoom Tempo" , Price:19000 ,Img:"https://i.pinimg.com/1200x/03/56/7d/03567d078b2f7a626b9259b3dc3f70f9.jpg"},
      {Name:"Nike Air Zoom Fly" , Price:17500 ,Img:"https://i.pinimg.com/1200x/86/0f/76/860f767ccf9142e56d9edc498863ef4c.jpg"},
      {Name:"Nike Air Zoom Pegasus" , Price:18500 ,Img:"https://i.pinimg.com/1200x/67/87/7d/67877d71b4f2811d5d88c6912a5098b4.jpg"},
      {Name:"Nike Air Zoom TerraKnee" , Price:18000 ,Img:"https://i.pinimg.com/1200x/03/56/7d/03567d078b2f7a626b9259b3dc3f70f9.jpg"},
      {Name:"Nike Air Zoom Tempo" , Price:19000 ,Img:"https://i.pinimg.com/1200x/25/d8/1f/25d81f77312233e8dfac7d1bc40313a4.jpg"},
      {Name:"Nike Air Zoom Fly" , Price:17500 ,Img:"https://i.pinimg.com/1200x/1d/df/e6/1ddfe6e94e1ae43d8deed7a675413f78.jpg"},
      {Name:"Nike Air Zoom Pegasus" , Price:18500 ,Img:"https://i.pinimg.com/1200x/94/0d/a0/940da0c0b86bd67f9027144e7e424559.jpg"},
      {Name:"Nike Air Zoom TerraKnee" , Price:18000 ,Img:"https://i.pinimg.com/1200x/28/4a/f9/284af9939d3d1d81451e664501af827d.jpg"},
      {Name:"Nike Air Zoom Tempo" , Price:19000 ,Img:"https://i.pinimg.com/736x/df/2b/4f/df2b4f386f6aba7696b0f4f8d163d5b1.jpg"},
    ]) ;
     console.log(Sceekers);
     

  const value = {
    isScroll,
    setIsScroll,
    logoSize,
    logoY,
    isOpen,
    setisOpen,
    isSearchOpen,
    setIsSearchOpen,
    profileOpen,
    setProfileOpen,
    dropdownVariants,
    overlayVariants,
    inputVariants,
    listItemVariants,
    Sceekers,
    setSceekers,
    logoX
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
