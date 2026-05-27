import '../Style/Service.css';
import Header from '../Components/HeroHeader'
import Cards from '../Components/ServiceCard';
import samuel from '../assets/directorsportrait/samuel (2).png'
import HeroFooter from '../Components/HeroFooter';
import Portrait from '../Components/Portrait';

const ServicePortfolio = () => {
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
        <div className='title-service' style={{ backgroundColor: '#F7F8FF', color: 'black' }}>Service</div>
        <div className='title-about' style={{ backgroundColor: '#81A7F3', color: 'white' }}>Portfolio</div>
    </div>
    <div className='service'>
        <p>With years of hands-on experience, Emmanuel has successfully handled a wide range of plumbing projects, from simple repairs to complex installations. His work demonstrates precision, durability, and a strong focus on customer satisfaction.</p>
    </div>
    <div className='products' style={{height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       <Portrait image={samuel} />
    </div>
    <div className='service'>
        <p>Every client is unique and so we make sure to work closely with our clients to design a space that suits each personality by actualizing the picture in their mind and making it a reality.Umeh John constantly seeks to offer utmost satisfaction to our interior design clients and every person that shops on our interior decor online store,hire an interior decorator in Nigeria.</p>
    </div>
    <div className='products' style={{height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       <Portrait image={samuel} />
    </div>
    <div className='service'>
        <p>With years of hands-on experience, Emmanuel has successfully handled a wide range of plumbing projects, from simple repairs to complex installations. His work demonstrates precision, durability, and a strong focus on customer satisfaction.</p>
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

export default ServicePortfolio;