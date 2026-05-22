import React from "react";
import { useParams } from "react-router-dom";
import { headerMiddle } from "../JS/Header";
import ProductCard from "../Components/ProductCard"; // 1. Import your new ProductCard component
// import "../Style/CategoryPage.css";

const CategoryPage = () => {
  const { categoryId } = useParams(); // Grabs "chairs", "custom-furniture", etc.

  // BUG FIX: Wrap both sides in String() so "1" (URL) matches 1 (Database ID) perfectly.
  const sourceSection = headerMiddle.find(
    (section) =>
      section.categories &&
      section.categories.find((sub) => String(sub.id) === String(categoryId)),
  );

  const activeCategory = sourceSection
    ? sourceSection.categories.find(
        (sub) => String(sub.id) === String(categoryId),
      )
    : null;

  // Friendly error UI if it still can't find the ID
  if (!activeCategory) {
    return (
      <div style={{ textAlign: "center", padding: "100px", fontSize: "20px" }}>
        <h3>Oops! Category "{categoryId}" not found.</h3>
        <p>Double-check that this ID matches exactly in your Header.js file.</p>
      </div>
    );
  }

  return (
    <div className="category-page" style={{ padding: "40px 5%" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "30px", color: "#333" }}>
        {activeCategory.name || activeCategory.category || "Collection"}
      </h2>

      {/* Grid container to hold the cards 
        (You can move these inline styles to CategoryPage.css later) 
      */}
      <div
        className="products-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "flex-start",
        }}
      >
        {/* BUG FIX: Added activeCategory.items ? safety check so it doesn't crash if items is missing */}
        {activeCategory.items && activeCategory.items.length > 0 ? (
          activeCategory.items.map((product) => (
            // 2. Pass the entire product object as a prop to your ProductCard
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-items" style={{ fontSize: "18px", color: "#888" }}>
            New items coming soon to this collection!
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
