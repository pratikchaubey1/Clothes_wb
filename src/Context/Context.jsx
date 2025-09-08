import { useScroll, useTransform } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [all, setall] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

   const filteredProducts = all.filter((item) =>
  item.Name.toLowerCase().includes(searchTerm.toLowerCase())
);

  const [Sceekers, setSceekers] = useState([
    {
      id: 1,
      Name: "Nike Air One",
      Price: 15000,
      Img: "https://i.pinimg.com/736x/1d/25/8f/1d258f24f26db033ea98afa36266257a.jpg",
    },
    {
      id: 2,
      Name: "Nike Air Jordan",
      Price: 18000,
      Img: "https://i.pinimg.com/736x/3e/12/eb/3e12eb1d1b35de8c0e5284135db4cc78.jpg",
    },
    {
      id: 3,
      Name: "Nike Air Force",
      Price: 17000,
      Img: "https://i.pinimg.com/1200x/38/3e/47/383e47bd2935ca5d8f1ce162396d9c9d.jpg",
    },
    {
      id: 4,
      Name: "Nike Air Max",
      Price: 16000,
      Img: "https://i.pinimg.com/736x/ee/eb/26/eeeb26f13d0f2309f9c4592703a3bad0.jpg",
    },
    {
      id: 5,
      Name: "Nike Air Zoom",
      Price: 19000,
      Img: "https://i.pinimg.com/736x/c8/4f/6f/c84f6f0159d23d973e5d7f998b3c02db.jpg",
    },
    {
      id: 6,
      Name: "Nike Air Presto",
      Price: 17500,
      Img: "https://i.pinimg.com/736x/87/f1/39/87f139592ff8e9a638ddc84deaf7aa3d.jpg",
    },
    {
      id: 7,
      Name: "Nike Air VaporMax",
      Price: 20000,
      Img: "https://i.pinimg.com/736x/0a/d8/0d/0ad80d5f1c5a75d92e1dc0027c968389.jpg",
    },
    {
      id: 8,
      Name: "Nike Air Zoom Pegasus",
      Price: 18500,
      Img: "https://i.pinimg.com/1200x/f4/ce/86/f4ce86b9b0c18bf938aee7a7916f396c.jpg",
    },
    {
      id: 9,
      Name: "Nike Air Zoom SuperRep",
      Price: 19500,
      Img: "https://i.pinimg.com/1200x/75/01/e3/7501e31723ce76288090bdfc80df882e.jpg",
    },
    {
      id: 10,
      Name: "Nike Air Zoom TerraKnee",
      Price: 18000,
      Img: "https://i.pinimg.com/1200x/a7/12/a2/a712a2d196ae2267bc9d10a23ae6e3fc.jpg",
    },
    {
      id: 11,
      Name: "Nike Air Zoom Tempo",
      Price: 19000,
      Img: "https://i.pinimg.com/1200x/28/66/1f/28661f755da7c81111b864421ccd1935.jpg",
    },
    {
      id: 12,
      Name: "Nike Air Zoom Fly",
      Price: 17500,
      Img: "https://i.pinimg.com/1200x/86/0f/76/860f767ccf9142e56d9edc498863ef4c.jpg",
    },
    {
      id: 13,
      Name: "Nike Air Zoom Pegasus",
      Price: 18500,
      Img: "https://i.pinimg.com/1200x/67/87/7d/67877d71b4f2811d5d88c6912a5098b4.jpg",
    },
    {
      id: 14,
      Name: "Nike Air Zoom TerraKnee",
      Price: 18000,
      Img: "https://i.pinimg.com/1200x/ce/9d/9e/ce9d9ea16838ff8d390e410011fc5889.jpg",
    },
    {
      id: 15,
      Name: "Nike Air Zoom Tempo",
      Price: 19000,
      Img: "https://i.pinimg.com/1200x/25/d8/1f/25d81f77312233e8dfac7d1bc40313a4.jpg",
    },
    {
      id: 16,
      Name: "Nike Air Zoom Fly",
      Price: 17500,
      Img: "https://i.pinimg.com/1200x/1d/df/e6/1ddfe6e94e1ae43d8deed7a675413f78.jpg",
    },
    {
      id: 17,
      Name: "Nike Air Zoom Pegasus",
      Price: 18500,
      Img: "https://i.pinimg.com/1200x/94/0d/a0/940da0c0b86bd67f9027144e7e424559.jpg",
    },
    {
      id: 18,
      Name: "Nike Air Zoom TerraKnee",
      Price: 18000,
      Img: "https://i.pinimg.com/1200x/28/4a/f9/284af9939d3d1d81451e664501af827d.jpg",
    },
    {
      id: 19,
      Name: "Nike Air Zoom Tempo",
      Price: 19000,
      Img: "https://i.pinimg.com/736x/df/2b/4f/df2b4f386f6aba7696b0f4f8d163d5b1.jpg",
    },
  ]);

  const [bag, setbag] = useState([
    {
      id: 1,
      Name: "Prada Altares Cowhide Baguette",
      Price: 4000,
      Img: "https://i.pinimg.com/1200x/b1/23/8e/b1238eecbfcada90d5888db30c0cb4af.jpg",
    },
    {
      id: 2,
      Name: "Vintage Dior Saddle Bag",
      Price: 2000,
      Img: "https://i.pinimg.com/1200x/60/dc/9a/60dc9aed1da90763c5571382fcf6f7dd.jpg",
    },
    {
      id: 3,
      Name: "Dior Denim Cargo Shoulder Bag",
      Price: 20000,
      Img: "https://i.pinimg.com/736x/88/fa/9c/88fa9cf0c662edfadf37e3e52ecf065c.jpg",
    },
    {
      id: 4,
      Name: "Chanel Cambon Reporter Purse",
      Price: 1000,
      Img: "https://i.pinimg.com/736x/e8/06/bd/e806bdf68218a667733627f222849522.jpg",
    },
    {
      id: 5,
      Name: "Louis Vuitton Air Monogram Bag",
      Price: 20000,
      Img: "https://i.pinimg.com/1200x/78/66/0f/78660f47160ff814665b3486ae621868.jpg",
    },
    {
      id: 6,
      Name: "Louis Vuitton Classic Tote",
      Price: 10000,
      Img: "https://i.pinimg.com/1200x/72/f7/2d/72f72dd1f30479590dbc57cd21b47d12.jpg",
    },
    {
      id: 7,
      Name: "Louis Vuitton Cherry Blossom Edition",
      Price: 5000,
      Img: "https://i.pinimg.com/1200x/ea/70/73/ea7073770ce960b1dfaa17fd07626d0a.jpg",
    },
    {
      id: 8,
      Name: "Louis Vuitton Denim Monogram Bag",
      Price: 3000,
      Img: "https://i.pinimg.com/736x/7b/cb/e5/7bcbe5e20249a983ad27a8de18a737cd.jpg",
    },
    {
      id: 9,
      Name: "Louis Vuitton Green Épi Leather Bag",
      Price: 20000,
      Img: "https://i.pinimg.com/736x/20/a2/3c/20a23c5de7187acfe4f255bcfd498b60.jpg",
    },
    {
      id: 10,
      Name: "Louis Vuitton Stone Gray Tote",
      Price: 5000,
      Img: "https://i.pinimg.com/1200x/dd/07/c5/dd07c58741602f81d03fe604be31c7d6.jpg",
    },
    {
      id: 11,
      Name: "Louis Vuitton Sea Breeze Bag",
      Price: 800,
      Img: "https://i.pinimg.com/1200x/42/ce/21/42ce217af6f1bd1c78043a39adc0d568.jpg",
    },
    {
      id: 12,
      Name: "Gucci One Day Crossbody",
      Price: 2000,
      Img: "https://i.pinimg.com/1200x/53/e4/78/53e478cfe0bde6495b4ed9de0ebc07df.jpg",
    },
    {
      id: 13,
      Name: "Gucci Pink Level Satchel",
      Price: 3000,
      Img: "https://i.pinimg.com/1200x/d7/de/b5/d7deb5a496f1114f2a883750687f0b87.jpg",
    },
    {
      id: 14,
      Name: "Gucci Office Leather Tote",
      Price: 9000,
      Img: "https://i.pinimg.com/736x/f6/5a/b5/f65ab5911f885e386cf992d94aae126b.jpg",
    },
    {
      id: 15,
      Name: "Moschino Classic Quilted Bag",
      Price: 11000,
      Img: "https://i.pinimg.com/1200x/0b/cc/f5/0bccf506ceda2558a12d93e2662d3749.jpg",
    },
    {
      id: 16,
      Name: "Moschino Spice Edition Bag",
      Price: 12000,
      Img: "https://i.pinimg.com/1200x/52/4c/a0/524ca08423ace2ea429277e22c521c37.jpg",
    },
    {
      id: 17,
      Name: "Moschino Cowgirl Limited Edition",
      Price: 230000,
      Img: "https://i.pinimg.com/736x/4a/dc/c0/4adcc016af10c328ab3093726e37c90a.jpg",
    },
    {
      id: 18,
      Name: "Moschino RJ Signature Bag",
      Price: 1000,
      Img: "https://i.pinimg.com/736x/4d/13/0b/4d130b4ad3c45ec022675f8b836c965d.jpg",
    },
  ]);

  const [jens, setjens] = useState([
    {
      id: 1,
      Name: "Classic Baggy Jeans",
      Price: "600",
      Img: "https://i.pinimg.com/1200x/16/9e/94/169e94d64b35fbfe2f2e3600b92dbf5f.jpg",
    },
    {
      id: 2,
      Name: "Vintage Baggy Jeans",
      Price: "800",
      Img: "https://i.pinimg.com/736x/34/e4/88/34e488257882f1bda30c56d534171968.jpg",
    },
    {
      id: 3,
      Name: "Slim Fit Baggy Jeans",
      Price: "300",
      Img: "https://i.pinimg.com/736x/6a/33/7b/6a337bdf56483d96a022ed12a4fb2da9.jpg",
    },
    {
      id: 4,
      Name: "Ripped Baggy Jeans",
      Price: "6000",
      Img: "https://i.pinimg.com/1200x/88/77/28/887728a39cacce9a8867f1cd9609f1a7.jpg",
    },
    {
      id: 5,
      Name: "Blue Wash Baggy Jeans",
      Price: "100",
      Img: "https://i.pinimg.com/1200x/92/ed/95/92ed95f313e881b8071232c05b779317.jpg",
    },
    {
      id: 6,
      Name: "Streetwear Baggy Jeans",
      Price: "800",
      Img: "https://i.pinimg.com/1200x/0b/af/2a/0baf2a84205b566fae7c71f74c6c1f68.jpg",
    },
    {
      id: 7,
      Name: "Oversized Baggy Jeans",
      Price: "2000",
      Img: "https://i.pinimg.com/736x/0a/3f/75/0a3f758d0e0f4f3f0b6be146afdb3b20.jpg",
    },
    {
      id: 8,
      Name: "Casual Baggy Jeans",
      Price: "5000",
      Img: "https://i.pinimg.com/1200x/8d/ab/c2/8dabc2d8386ced734484dcf2d8e11f31.jpg",
    },
    {
      id: 9,
      Name: "Black Baggy Jeans",
      Price: "1100",
      Img: "https://i.pinimg.com/1200x/0f/59/1b/0f591b7ffa17a0bb83e301d2272e892d.jpg",
    },
    {
      id: 10,
      Name: "Distressed Baggy Jeans",
      Price: "3000",
      Img: "https://i.pinimg.com/736x/95/00/37/95003763fa714d93ee638d9a21ca784d.jpg",
    },
    {
      id: 11,
      Name: "Retro Baggy Jeans",
      Price: "890",
      Img: "https://i.pinimg.com/1200x/c6/c0/47/c6c047759ea7c016afd88a4ce774c809.jpg",
    },
    {
      id: 12,
      Name: "High Waist Baggy Jeans",
      Price: "220",
      Img: "https://i.pinimg.com/736x/6e/86/07/6e8607cf7487c637df93b253bf976f33.jpg",
    },
    {
      id: 13,
      Name: "Urban Baggy Jeans",
      Price: "559",
      Img: "https://i.pinimg.com/736x/16/11/1d/16111d54247c8611d164d3d9145ffe2b.jpg",
    },
    {
      id: 14,
      Name: "Designer Baggy Jeans",
      Price: "973",
      Img: "https://i.pinimg.com/1200x/db/70/a6/db70a6dd653ee2e96ee748e7b1846083.jpg",
    },
    {
      id: 15,
      Name: "Everyday Baggy Jeans",
      Price: "2356",
      Img: "https://i.pinimg.com/736x/07/6d/a6/076da6f3d10967f48850104fda8aafa7.jpg",
    },
    {
      id: 16,
      Name: "Premium Baggy Jeans",
      Price: "6777",
      Img: "https://i.pinimg.com/1200x/ef/de/7a/efde7a954519b4065d8848f52ec7befd.jpg",
    },
    {
      id: 17,
      Name: "Loose Fit Baggy Jeans",
      Price: "223",
      Img: "https://i.pinimg.com/736x/b3/50/d7/b350d7e3f37d9b97f789ee8fe831d37a.jpg",
    },
    {
      id: 18,
      Name: "Gray Wash Baggy Jeans",
      Price: "678",
      Img: "https://i.pinimg.com/736x/e4/61/db/e461db7b2b4d8b6cfb38c3280ed03aae.jpg",
    },
    {
      id: 19,
      Name: "Stylish Baggy Jeans",
      Price: "344",
      Img: "https://i.pinimg.com/736x/5d/80/1a/5d801ad915297d760127be5c15fafb80.jpg",
    },
    {
      id: 20,
      Name: "Trendy Baggy Jeans",
      Price: "7654",
      Img: "https://i.pinimg.com/736x/06/c8/b0/06c8b07b6483808eca4707013d955d37.jpg",
    },
  ]);

  const [shirt, setshirts] = useState([
    {
      id: 1,
      Name: "Zara Slim Fit Shirt",
      Price: "4546",
      Img: "https://i.pinimg.com/736x/37/c5/d6/37c5d63581fd7d56d0a8b2ce0e7d3cda.jpg",
    },
    {
      id: 2,
      Name: "H&M Casual Cotton Shirt",
      Price: "234",
      Img: "https://i.pinimg.com/736x/bc/45/7a/bc457abda45f57279d166252b44f87de.jpg",
    },
    {
      id: 3,
      Name: "Levi’s Denim Shirt",
      Price: "4556",
      Img: "https://i.pinimg.com/736x/3e/93/f7/3e93f7f1eb46622df5decee101f98fa8.jpg",
    },
    {
      id: 4,
      Name: "Gucci Luxury Printed Shirt",
      Price: "133",
      Img: "https://i.pinimg.com/1200x/dc/72/c3/dc72c3664c49d1460912129adcabe1cc.jpg",
    },
    {
      id: 5,
      Name: "Nike Sportswear Shirt",
      Price: "653",
      Img: "https://i.pinimg.com/736x/1c/0a/0b/1c0a0b11d9a50b9e99274ed1316147cf.jpg",
    },
    {
      id: 6,
      Name: "Adidas Originals Shirt",
      Price: "123",
      Img: "https://i.pinimg.com/736x/a1/4b/ec/a14becb8468d357c784831d11cb511a0.jpg",
    },
    {
      id: 7,
      Name: "Uniqlo Oxford Classic Shirt",
      Price: "567",
      Img: "https://i.pinimg.com/1200x/ff/e4/e7/ffe4e7a250b46ab104de1c35892e3ee3.jpg",
    },
    {
      id: 8,
      Name: "Tommy Hilfiger Striped Shirt",
      Price: "123",
      Img: "https://i.pinimg.com/1200x/4e/5b/22/4e5b22d4d0e68c2570f8831993d274b9.jpg",
    },
    {
      id: 9,
      Name: "Ralph Lauren Polo Shirt",
      Price: "784",
      Img: "https://i.pinimg.com/736x/f4/c8/50/f4c850f09bc6bfd7c34f37acc0fa70c8.jpg",
    },
    {
      id: 10,
      Name: "Calvin Klein Formal Shirt",
      Price: "863",
      Img: "https://i.pinimg.com/736x/ff/23/4b/ff234bac943e7bdf2fbf617c9442dd1b.jpg",
    },
    {
      id: 11,
      Name: "Diesel Printed Shirt",
      Price: "244",
      Img: "https://i.pinimg.com/1200x/cc/27/7c/cc277c92016bfe94c1684ed7df53f424.jpg",
    },
    {
      id: 12,
      Name: "Lacoste Casual Polo Shirt",
      Price: "4432",
      Img: "https://i.pinimg.com/1200x/11/ff/a7/11ffa7a7cfc9d3d8eafb8d7a993e0690.jpg",
    },
    {
      id: 13,
      Name: "Versace Designer Shirt",
      Price: "556",
      Img: "https://i.pinimg.com/1200x/17/d7/33/17d7333fdfabc1f1a06f6384c5a9cc65.jpg",
    },
    {
      id: 14,
      Name: "Armani Classic White Shirt",
      Price: "2456",
      Img: "https://i.pinimg.com/736x/dc/8c/64/dc8c644603c17a9c9eb6eadc355869c3.jpg",
    },
    {
      id: 15,
      Name: "Balenciaga Oversized Shirt",
      Price: "133",
      Img: "https://i.pinimg.com/736x/dc/8c/64/dc8c644603c17a9c9eb6eadc355869c3.jpg",
    },
    {
      id: 16,
      Name: "Burberry Checked Shirt",
      Price: "765",
      Img: "https://i.pinimg.com/1200x/8e/99/2f/8e992f5053aa05fa4e4e8603c495d001.jpg",
    },
    {
      id: 17,
      Name: "Prada Designer Shirt",
      Price: "876",
      Img: "https://i.pinimg.com/1200x/ae/25/2b/ae252be6d5a9c5810651039d4fc7ee4b.jpg",
    },
    {
      id: 18,
      Name: "Off-White Graphic Shirt",
      Price: "323",
      Img: "https://i.pinimg.com/1200x/3e/c9/a5/3ec9a5cbcf774399ae773ed8a68c29c0.jpg",
    },
    {
      id: 19,
      Name: "Supreme Streetwear Shirt",
      Price: "9765",
      Img: "https://i.pinimg.com/736x/c9/29/c1/c929c18a4fc940899ca161cb8b0c116d.jpg",
    },
    {
      id: 20,
      Name: "Louis Vuitton Exclusive Shirt",
      Price: "1345",
      Img: "https://i.pinimg.com/736x/af/4f/c8/af4fc86c609650038aeee201976d7066.jpg",
    },
  ]);
  useEffect(() => {
    // sabse bada array ka length find karna
    const maxLength = Math.max(
      Sceekers.length,
      jens.length,
      shirt.length,
      bag.length
    );
    const mixed = [];

    for (let i = 0; i < maxLength; i++) {
      if (Sceekers[i]) mixed.push({ ...Sceekers[i], type: "sneaker" });
      if (jens[i]) mixed.push({ ...jens[i], type: "jeans" });
      if (shirt[i]) mixed.push({ ...shirt[i], type: "shirt" });
      if (bag[i]) mixed.push({ ...bag[i], type: "bag" });
    }

    setall(mixed);
  }, [Sceekers, jens, shirt, bag]);

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
    bag,
    setbag,
    jens,
    setjens,
    shirt,
    setshirts,
    scrolled,
    setScrolled,
    all,
    setall,
    searchTerm, 
    setSearchTerm,
    filteredProducts
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
