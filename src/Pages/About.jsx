import React from "react";
import "../css/About.css";
import Portrait from "../Components/Portrait";
import { directors } from "../data/directors";
import eunicon from "../assets/directorsportrait/eunicon.jpg";
import Header from "../Components/HeroHeader";
import HeroFooter from "../Components/HeroFooter";

const About = () => {
  return (
    <div className="about_us_page">
      <Header />
      <div className="about_us_page_wrapper">
        <h1 className="main_heading">About Us</h1>

        <div className="about_text_and_image">
          <div className="eunicon_image">
            <img src={eunicon} alt="Eunicon building storefront" />
          </div>

          <div className="about_layered">
            <div className="figures">
              <div className="figure_box">
                <span>10K</span>
                <p>Happy Client</p>
              </div>

              <div className="figure_box">
                <span>1.5K</span>
                <p>Team</p>
              </div>

              <div className="figure_box">
                <span>24K</span>
                <p>Project Completed</p>
              </div>
            </div>

            <div className="who_we_are">
              <h3>Who We Are</h3>
              <p>
                We are a furniture brand dedicated to creating stylish, durable,
                and comfortable pieces that transform everyday spaces into
                beautiful homes. With a focus on quality craftsmanship and
                modern design, we bring ideas to life through furniture that
                reflects your taste and lifestyle. Our goal is simple — to make
                every home feel warm, functional, and uniquely yours.
              </p>
            </div>

            <div className="what_we_offer">
              <h3>What We Offer</h3>
              <p>
                We offer a wide range of high-quality furniture designed to suit
                modern living. From elegant sofas and dining sets to functional
                storage solutions and custom pieces, our collection combines
                comfort, durability, and style. We also provide reliable
                delivery and excellent customer service to ensure a smooth and
                satisfying experience from start to finish.
              </p>
            </div>
          </div>
        </div>

        <section className="board_section">
          <h3>Our Board Of Directors</h3>
          <div className="board_container">
            {directors.map((director) => (
              <Portrait
                key={director.id}
                image={director.image}
                name={director.name}
                role={director.role}
              />
            ))}
          </div>
        </section>

        <section className="statements_section">
          <div className="statement_block">
            <h3>Mission Statement</h3>
            <p>
              Our mission is to provide affordable, high-quality furniture that
              enhances comfort and elevates the way people live. We are
              committed to delivering exceptional craftsmanship, innovative
              designs, and outstanding customer service.
            </p>
          </div>

          <div className="statement_block">
            <h3>Vission Statement</h3>
            <p>
              Our vision is to become a trusted and leading furniture brand
              known for transforming spaces and improving lives through timeless
              design, quality, and reliability.
            </p>
          </div>
        </section>

        <HeroFooter />
      </div>
    </div>
  );
};

export default About;
