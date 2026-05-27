import '../Style/Service.css';
import Header from '../Components/HeroHeader'
import Cards from '../Components/ServiceCard';
import samuel from '../assets/directorsportrait/samuel (2).png'
import HeroFooter from '../Components/HeroFooter';

const AboutUbani = () => {
  return (
    <div className='service_page'>
        <Header />
      <div className='inner_service_page'>
            <Cards 
          img={samuel}
          name="Ubani Joseph"
          profession="Painting"
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
        <p>Ubani Joseph is a skilled and detail-oriented painter based in Lagos, with over 5 years of experience in delivering high-quality painting services for homes and commercial spaces. Known for his precision and creativity, he transforms ordinary walls into beautiful, smooth, and long-lasting finishes.With a perfect 5.0 rating from over 1,130 satisfied clients, Ubani has built a strong reputation for excellence, reliability, and consistent results. Whether it’s interior or exterior painting, decorative finishes, or repainting projects, he approaches every job with professionalism and attention to detail.
            His commitment to using quality materials, clean execution, and timely delivery makes him a trusted choice for painting services across Lagos. When you hire Ubani Joseph, you’re choosing quality workmanship and a finish that truly stands out.
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

export default AboutUbani;