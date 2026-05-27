import '../Style/Service.css';
import Header from '../Components/HeroHeader'
import Cards from '../Components/ServiceCard';
import samuel from '../assets/directorsportrait/samuel (2).png'
import HeroFooter from '../Components/HeroFooter';
import Portrait from '../Components/Portrait';

const UbaniPortfolio = () => {
  return (
    <div className='service_page'>
        <Header />
      <div className='inner_service_page'>
            <Cards 
          img={samuel}
          name="Ubani Joseph"
          profession="Painter"
          rating={5.0}
          experience={5}
          location="Lagos, Nigeria"
          showBtn={true}
        />
      </div>
    <div className='header-title'>
        <div className='title-about'>About</div>
        <div className='title-service' style={{ backgroundColor: '#F7F8FF', color: 'black' }}>Service</div>
        <div className='title-about' style={{ backgroundColor: '#81A7F3', color: 'white' }}>Portfolio</div>
    </div>
    <div className='service'>
        <p>Experience the power of transformation. These recent projects highlight my commitment to precision, from meticulous prep work to a flawless final coat. Whether it’s a modern refresh or a classic restoration, I deliver a durable, high-quality finish that revitalizes your space. I don’t just change the color; I enhance the feel and longevity of your home</p>
    </div>
    <div className='products' style={{height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       <Portrait image={samuel} />
    </div>
    <div className='service'>
        <p>Precision in every stroke, quality in every finish. My portfolio showcases the journey from tired surfaces to vibrant, modern spaces. Each project is tailored to the client’s vision, ensuring a look that is as durable as it is beautiful. See how the right professional finish can completely redefine a room.</p>
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

export default UbaniPortfolio;