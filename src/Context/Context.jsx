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
      {Name:"Nike Air VaporMax" , Price:20000 ,Img:"https://i.pinimg.com/736x/0a/d8/0d/0ad80d5f1c5a75d92e1dc0027c968389.jpg"},
      {Name:"Nike Air Zoom Pegasus" , Price:18500 ,Img:"https://i.pinimg.com/1200x/f4/ce/86/f4ce86b9b0c18bf938aee7a7916f396c.jpg"},
      {Name:"Nike Air Zoom SuperRep" , Price:19500 ,Img:"https://i.pinimg.com/1200x/75/01/e3/7501e31723ce76288090bdfc80df882e.jpg"},
      {Name:"Nike Air Zoom TerraKnee" , Price:18000 ,Img:"https://i.pinimg.com/1200x/ad/13/7f/ad137fa92f9fdd519d9341359fb84458.jpg"},
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
     const [bag,setbag] = useState([
      {Name: "Altares Baguette Cowhide Brown",Price:4000,Img:"https://i.pinimg.com/1200x/b1/23/8e/b1238eecbfcada90d5888db30c0cb4af.jpg"},
      {Name:"Vintage Dior brown ",Price:2000,Img:"https://i.pinimg.com/736x/39/87/bd/3987bd69945f5b95e0fe84ca46893e93.jpg"},
      {Name:"vintage dior denim cargo shoulder bag",Price:20000,Img:"https://i.pinimg.com/1200x/6c/f2/2e/6cf22e4f20b7f2449d93594f186b7d83.jpg"},
      {Name:"Cambon Reporter Purse ",Price:1000,Img:"https://i.pinimg.com/736x/e8/06/bd/e806bdf68218a667733627f222849522.jpg"},
      {Name:"Lv air Bag",Price:20000,Img:"https://i.pinimg.com/1200x/78/66/0f/78660f47160ff814665b3486ae621868.jpg"},
      {Name:"Lv Real",Price:10000,Img:"https://i.pinimg.com/736x/1b/04/41/1b04416fd9a244780ee97a80ae80d8dc.jpg"},
      {Name:"Lv cherry",Price:5000,Img:"https://i.pinimg.com/1200x/ea/70/73/ea7073770ce960b1dfaa17fd07626d0a.jpg"},
      {Name:"Lv Jens ",Price:3000,Img:"https://i.pinimg.com/736x/7b/cb/e5/7bcbe5e20249a983ad27a8de18a737cd.jpg"},
      {Name:"Lv green Role",Price:20000,Img:"https://i.pinimg.com/1200x/87/73/7d/87737d93a95a7bfa5e5cb36cc91fa234.jpg"},
      {Name:"Lv Stone",Price:5000,Img:"https://i.pinimg.com/736x/60/52/2a/60522a11da57a05acbe9bb5f0174d8fe.jpg"},
      {Name:"Lv Sea ",Price:800,Img:"https://i.pinimg.com/1200x/42/ce/21/42ce217af6f1bd1c78043a39adc0d568.jpg"},
      {Name:"Guuci One Day",Price:2000,Img:"https://i.pinimg.com/1200x/53/e4/78/53e478cfe0bde6495b4ed9de0ebc07df.jpg"},
      {Name:"Level Pinki",Price:3000,Img:"https://i.pinimg.com/1200x/d7/de/b5/d7deb5a496f1114f2a883750687f0b87.jpg"},
      {Name:"Level Office",Price:9000,Img:"https://i.pinimg.com/736x/f6/5a/b5/f65ab5911f885e386cf992d94aae126b.jpg"},
      {Name:"Moschino",Price:11000,Img:"https://i.pinimg.com/1200x/57/6e/b4/576eb418d39e8d99b870184ab6c30b7f.jpg"},
      {Name:"Moschino Spice",Price:12000,Img:"https://i.pinimg.com/1200x/52/4c/a0/524ca08423ace2ea429277e22c521c37.jpg"},
      {Name:"Moschino CowGirl",Price:230000,Img:"https://i.pinimg.com/1200x/ea/ad/62/eaad626de99d2f490da9c7c22373d949.jpg"},
      {Name:"Moschino Rj",Price:1000,Img:"https://i.pinimg.com/736x/b6/07/1b/b6071b8540840c1891bce7b030de29a8.jpg"},

     ]);
     

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
    logoX,
    bag,setbag
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
