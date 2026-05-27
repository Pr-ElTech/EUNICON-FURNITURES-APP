import '../Style/Service.css';
import Header from '../Components/HeroHeader'
import Cards from '../Components/ServiceCard';
import samuel from '../assets/directorsportrait/samuel (2).png'
import HeroFooter from '../Components/HeroFooter';

const ServiceAbout = () => {
  return (
    <div className='service_page'>
        <Header />
      <div className='inner_service_page'>
            <Cards 
          img={samuel}
          name="Alex Emmanuel"
          profession="Plumber"
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
        <p>Alex Emmanuel is a highly skilled and reliable plumber with over 5 years of hands-on experience delivering top-quality plumbing solutions across Lagos. Known for his professionalism and attention to detail, Alex specializes in both residential and commercial plumbing services.
            From fixing minor leaks to handling complex pipe installations, he ensures every job is completed efficiently and to the highest standard. His commitment to customer satisfaction has earned him a 5.0 rating from over 1,300 happy clients.</p>
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

export default ServiceAbout;