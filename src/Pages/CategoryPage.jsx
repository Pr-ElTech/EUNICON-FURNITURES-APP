// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { headerMiddle } from "../JS/Header";
// import ProductCard from "../Components/ProductCard";
// import ProductChairHero from "../Assets/ProductChairHero.jpg";
// import { IoIosArrowDropleft } from "react-icons/io";
// // import BlogBtn from "../Components/BlogBtn"; // Uncomment if needed
// import "../Style/CategoryPage.css";
// import HeroHeader from "../Components/HeroHeader";

// const CategoryPage = () => {
//   const { categoryId } = useParams();
//   const navigate = useNavigate();

//   const cleanId = String(categoryId).replace(":", "").toLowerCase().trim();

//   const sourceSection = headerMiddle.find(
//     (section) =>
//       section.categories &&
//       section.categories.find(
//         (sub) => String(sub.id).toLowerCase().trim() === cleanId,
//       ),
//   );

//   const activeCategory = sourceSection
//     ? sourceSection.categories.find(
//         (sub) => String(sub.id).toLowerCase().trim() === cleanId,
//       )
//     : null;

//   if (!activeCategory) {
//     return (
//       <div className="error-container">
//         <h3>Oops! Category "{categoryId}" not found.</h3>
//         <p>NO ITEM FOUND!!!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="category-page">
//       <HeroHeader />
//       <div className="category-hero">
//         <img
//           src={ProductChairHero}
//           alt={activeCategory.name}
//           className="hero-bg-image"
//         />
//         <div className="hero-overlay">
//           <IoIosArrowDropleft
//             className="back-icon"
//             onClick={() => navigate(-1)}
//           />
//           <h2>{activeCategory.name || "Collection"} Collections</h2>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <h3 className="explore-heading">Explore Our Collections</h3>

//       {/* Flexbox Product Container */}
//       <div className="products-flex-container">
//         {activeCategory.items && activeCategory.items.length > 0 ? (
//           activeCategory.items.map((product) => (
//             <div className="flex-product-item" key={product.id}>
//               <ProductCard product={product} />
//             </div>
//           ))
//         ) : (
//           <p className="no-items">New items coming soon to this collection!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { headerMiddle } from "../JS/Header";
import ProductCard from "../Components/ProductCard";
import ProductChairHero from "../Assets/ProductChairHero.jpg";
import { IoIosArrowDropleft } from "react-icons/io";
import "../Style/CategoryPage.css";
import HeroHeader from "../Components/HeroHeader";
import Herofooter from "../Components/HeroFooter";
import axios from "axios";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const cleanId = String(categoryId).replace(":", "").toLowerCase().trim();

  const sourceSection = headerMiddle.find(
    (section) =>
      section.categories &&
      section.categories.find(
        (sub) => String(sub.id).toLowerCase().trim() === cleanId,
      ),
  );

  // const productApi = (async) => {
  //   const productRes = axios.get(
  //     `https://eunicon-furnitures.onrender.com/api/v1/allProduct`,
  //   );
  //   const apiProd;
  //   try {
  //   } catch (error) {
  //   } finally {
  //   }
  // };

  const activeCategory = sourceSection
    ? sourceSection.categories.find(
        (sub) => String(sub.id).toLowerCase().trim() === cleanId,
      )
    : null;

  if (!activeCategory) {
    return (
      <div className="error-container">
        <h3>Category not found.</h3>
      </div>
    );
  }

  return (
    <div className="category-page">
      {/* Hero Banner with text overlay */}

      <HeroHeader />
      <div className="category-hero">
        <img
          src={activeCategory.image || ProductChairHero}
          alt="Category Banner"
          className="hero-image"
        />
        <div className="hero-text-container">
          <IoIosArrowDropleft
            className="back-arrow"
            onClick={() => navigate(-1)}
          />
          <h1>{activeCategory.name || "Collection"} Collections</h1>
        </div>
      </div>

      {/* Center Heading Section */}
      <div className="heading-container">
        <h2>Explore Our Collections</h2>
      </div>

      {/* Straightforward Flexbox Row Wrapper */}
      <div className="products-flex-wrapper">
        {activeCategory.items && activeCategory.items.length > 0 ? (
          activeCategory.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-items">New items coming soon!</p>
        )}
      </div>
      <Herofooter />
    </div>
  );
};

export default CategoryPage;
