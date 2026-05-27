import '../Style/Service.css';
import Header from '../Components/HeroHeader'
import Cards from '../Components/ServiceCard';
import samuel from '../assets/directorsportrait/samuel (2).png'
import HeroFooter from '../Components/HeroFooter';

const FurnitureAbout = () => {
  return (
    <div className='service_page'>
        <Header />
      <div className='inner_service_page'>
            <Cards 
          img={samuel}
          name="Umeh John"
          profession="Furniture"
          rating={5.0}
          experience={5}
          location="Lagos, Nigeria"
          showBtn={true}
        />
      </div>
    <div className='header-title'>
        <div className='title-about' style={{ backgroundColor: '#81A7F3', color: 'white' }}>About</div>
        <div className='title-service' style={{ backgroundColor: '#F7F8FF', color: 'black' }}>Service</div>
        <div className='title-about'>Portfolio</div>
    </div>
    <div className='service'>
        <p>Umeh John is a talented and detail-oriented furniture specialist based in Lagos, with over 5 years of experience in designing and crafting high-quality furniture pieces. Known for his creativity and precision, he brings ideas to life—transforming spaces with furniture that is both functional and aesthetically pleasing.
        With a perfect 5.0 rating from over 1,130 satisfied clients, Umeh has earned a reputation for excellence, reliability, and consistent delivery. From modern home furniture to custom-made designs, every project is handled with care, ensuring durability, comfort, and style.
        His passion for craftsmanship and commitment to customer satisfaction set him apart, making him a trusted choice for furniture services across Lagos. Whether you’re furnishing a new space or upgrading your current one, Umeh John delivers quality you can see and comfort you can feel.
        </p>
    </div>
    <div className='explore'>
        <h3>Explore His Services</h3>
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

export default FurnitureAbout;