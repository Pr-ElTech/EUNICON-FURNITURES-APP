import '../Style/Service.css';
import Header from '../Components/HeroHeader'
import Cards from '../Components/ServiceCard';
import samuel from '../assets/directorsportrait/samuel (2).png'
import ProductCard from '../Components/ProductCard';
import HeroFooter from '../Components/HeroFooter';

const Service = () => {
    const products = [
    { id: 1, title: "Pipe fittings", price: "₦5,000", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTITMnnHI7E83fb7ohkM0A44J_RrWNJQdxQZ36uoKYXFoa79YT9" },
    { id: 2, title: "Pipe fittings", price: "₦5,000", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTITMnnHI7E83fb7ohkM0A44J_RrWNJQdxQZ36uoKYXFoa79YT9" },
    { id: 3, title: "Pipe fittings", price: "₦5,000", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTITMnnHI7E83fb7ohkM0A44J_RrWNJQdxQZ36uoKYXFoa79YT9" },
    { id: 4, title: "Pipe fittings", price: "₦5,000", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTITMnnHI7E83fb7ohkM0A44J_RrWNJQdxQZ36uoKYXFoa79YT9" },
    { id: 5, title: "Pipe fittings", price: "₦5,000", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTITMnnHI7E83fb7ohkM0A44J_RrWNJQdxQZ36uoKYXFoa79YT9" },
    { id: 6, title: "Pipe fittings", price: "₦5,000", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTITMnnHI7E83fb7ohkM0A44J_RrWNJQdxQZ36uoKYXFoa79YT9" },
  ];
  return (
    <div className='service_page'>
        <Header />
      <div className='inner_service_page'>
            <Cards 
          img={samuel}
          name="Umeh John"
          profession="Plumber"
          rating={5.0}
          experience={5}
          location="New York, NY"
          showBtn={true}
        />
      </div>
    <div className='header-title'>
        <div className='title-about'>About</div>
        <div className='title-service'>Service</div>
        <div className='title-about'>Portfolio</div>
    </div>
    <div className='service'>
        <p>Emmanuel offers expert pipe installation services for both residential and commercial properties. He ensures that every system is properly planned and installed using high-quality materials, delivering a reliable and long-lasting water flow system that meets modern standards.</p>
    </div>
    <div className='explore'>
        <h3>Explore His Services</h3>
    </div>
    <div className='products'>
        <div className="products-container">
      <div className="products-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
    </div>
    <div className="contact-container">
      <div className="contact-form-side">
        <form>
          <div className="form-group full-width">
            <input type="text" placeholder="Full Name" />
          </div>
          
          <div className="form-row">
            <div className="form-group half-width">
              <input type="text" placeholder="City" />
            </div>
            <div className="form-group half-width">
              <input type="text" placeholder="State" />
            </div>
          </div>

          <div className="form-group full-width">
            <input type="tel" placeholder="Phone Number" />
          </div>

          <div className="form-group full-width">
            <input type="email" placeholder="Email" />
          </div>

          <div className="form-group full-width">
            <input type="text" placeholder="Address" />
          </div>

          <div className="form-group full-width">
            <input type="text" placeholder="Country" />
          </div>

          <div className="form-group full-width">
            <input type="text" placeholder="Postal Code" />
          </div>

          <div className="form-group full-width">
            <textarea placeholder="Message" rows="5"></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Request</button>
        </form>
      </div>

      <div className="contact-info-side">
        <p className="info-text">
          “Please fill out this form carefully to help us serve you better.”
        </p>
      </div>
    </div>
    <HeroFooter />
    </div>
  );
};

export default Service;