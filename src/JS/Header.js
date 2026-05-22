import chair1 from "../assets/chair1.jpg";
import chair2 from "../assets/chair2.jpg";
import chair3 from "../assets/chair3.jpg";
import chair4 from "../assets/chair4.jpg";
import chair5 from "../assets/chair5.jpg";
import chair6 from "../assets/chair6.jpg";
import chair7 from "../assets/chair7.jpg";
import chair8 from "../assets/chair8.jpg";
import chair9 from "../assets/chair9.jpg";

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
        items: [
          {
            id: 1,
            image: chair1,
            title: "Executive Office Chair",
            price: "₦150,000",
          },
          { id: 2, image: chair2, title: "Office Chair", price: "₦200,000" },
          { id: 3, image: chair3, title: "Task Chair", price: "₦200,000" },
          { id: 4, image: chair4, title: "Swift Chair", price: "₦150,000" },
          { id: 5, image: chair5, title: "Accent Chair", price: "₦150,000" },
          { id: 6, image: chair5, title: "Lounge Chair", price: "₦70,000" },
          { id: 7, image: chair6, title: "Arm chair", price: "₦50,000" },
          { id: 8, image: chair7, title: "Dinning Chair", price: "₦200,000" },
          { id: 9, image: chair8, title: "Side Chair", price: "₦150,000" },
          {
            id: 10,
            image: chair9,
            title: "Modern Office Chair",
            price: "₦90,000",
          },
          {
            id: 11,
            image: chair1,
            title: "Lounge Armchair",
            price: "₦3,000,000",
          },
          { id: 12, image: chair1, title: "Swives Chair", price: "₦3,000,000" },
        ],
      },
      { id: "tables", name: "Table", items: [] },
      { id: "beds", name: "Beds", items: [] },
      { id: "sofas", name: "Sofas", items: [] },
      { id: "decor", name: "Decor Accessories", items: [] },
      { id: "rugs", name: "Rugs", items: [] },
    ],
  },
  {
    id: 4,
    category: "Services",
    categories: [
      { id: "custom-furniture", name: "Custom Furniture", items: [] },
      { id: "hire-artisan", name: "Hire An Artisan", items: [] },
      { id: "interior-design", name: "Interior Design", items: [] },
    ],
  },
  { id: 5, category: "Blog" },
];
