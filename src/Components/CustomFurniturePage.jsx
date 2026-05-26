import React from "react";
import BlogBtn from "./BlogBtn";
import CSheroimage from "../assets/Services/CSheroimage.jpg";
import CSimg1 from "../assets/Services/CSimg1.jpg";
import "../Style/CustomFurniture.css";

const CustomFurniturePage = () => {
  return (
    <section className="customfurniture">
      <div className="customfurniture-top">
        <article className="customfurniture-top-img-left">
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            error dolorum dolores nisi doloremque incidunt veritatis optio
            mollitia excepturi consequuntur quasi saepe voluptatum facere
            voluptas nam doloribus repellendus adipisci. Impedit?
          </h1>
          <BlogBtn text="Buy Now" />
        </article>
        <article className="customfurniture-top-img-right">
          <img src={CSheroimage} alt="" />
        </article>
      </div>
      <div className="customfurniture-buttom">
        <div className="iconHolder"></div>
        <article className="customfurniture-buttom-img-left">
          <img src={CSimg1} alt="" />
        </article>
        <article className="customfurniture-buttom-img-left">
          <img src={CSimg1} alt="" />
        </article>
        <article className="customfurniture-buttom-img-left">
          <img src={CSimg1} alt="" />
        </article>
        <article className="customfurniture-buttom-img-left">
          <img src={CSimg1} alt="" />
        </article>
        <article className="customfurniture-buttom-img-left">
          <img src={CSimg1} alt="" />
        </article>
      </div>
    </section>
  );
};

export default CustomFurniturePage;
