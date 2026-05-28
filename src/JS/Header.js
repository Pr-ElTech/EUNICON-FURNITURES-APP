import chair1 from "../assets/chair1.jpg";
import chair2 from "../assets/chair2.jpg";
import chair3 from "../assets/chair3.jpg";
import chair4 from "../assets/chair4.jpg";
import chair5 from "../assets/chair5.jpg";
import chair6 from "../assets/chair6.jpg";
import chair7 from "../assets/chair7.jpg";
import chair8 from "../assets/chair8.jpg";
import chair9 from "../assets/chair9.jpg";

import table1 from "../assets/TABLE2.jpg";
import table2 from "../assets/TABLE2.jpg";
import table3 from "../assets/TABLE3.jpg";
import table4 from "../assets/TABLE4.jpg";
import table5 from "../assets/TABLE5.jpg";
import table6 from "../assets/TABLE5.jpg";

import bed1 from "../assets/BED1.jpg";
import bed2 from "../assets/BED2.jpg";
import bed3 from "../assets/BED3.jpg";
import bed4 from "../assets/BED4.jpg";
import bed5 from "../assets/BED5.jpg";
import bed6 from "../assets/BED6.jpg";
import bed7 from "../assets/BED7.jpg";
import bed8 from "../assets/BED8.jpg";

import sofa1 from "../assets/sofa2.jpg";
import sofa2 from "../assets/sofa2.jpg";
import sofa3 from "../assets/sofa3.jpg";
import sofa4 from "../assets/sofa4.jpg";
import sofa5 from "../assets/sofa5.jpg";
import sofa6 from "../assets/sofa4.jpg";

import rug1 from "../assets/rug1.jpg";
import rug2 from "../assets/rug2.jpg";
import rug3 from "../assets/rug3.jpg";
import rug4 from "../assets/rug4.jpg";
import rug5 from "../assets/rug5.jpg";

export const headerMiddle = [
  { id: 1, category: "Home" },
  { id: 2, category: "About" },

  {
    id: 3,
    category: "Product",
    categories: [
      {
        id: "chairs",
        name: "Chairs",
        image: chair1,
        items: [],
      },

      {
        id: "tables",
        name: "Tables",
        image: table1,
        items: [],
      },

      {
        id: "beds",
        name: "Beds",
        image: bed1,
        items: [],
      },

      {
        id: "sofas",
        name: "Sofas",
        image: sofa1,
        items: [],
      },

      {
        id: "decor",
        name: "Decor Accessories",
        image: sofa2,
        items: [],
      },

      {
        id: "rugs",
        name: "Rugs",
        image: rug1,
        items: [],
      },
    ],
  },

  {
    id: 4,
    category: "Services",
    categories: [
      {
        id: "custom-furniture",
        name: "Custom Furniture",
        items: [],
      },

      {
        id: "hire-artisan",
        name: "Hire An Artisan",
        items: [],
      },

      {
        id: "interior-design",
        name: "Interior Design",
        items: [],
      },
    ],
  },

  { id: 5, category: "Blog" },
];
