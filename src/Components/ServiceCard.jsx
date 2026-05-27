import Btn from './Btn'
import '../css/ServiceCard.css'

const Cards = ({ img, name, profession,rating, experience,location, customClass, showBtn }) => {
  return (
    <div className={`work-card ${customClass || ''}`}>
      <div className="work-card-icon-box">
       <img src={img} alt="" className='Image' />
      </div>
        <div className='about-artisan'>
            <h3 className="work-card-title">Name: {name}</h3>
            <h3 className="work-card-desc">Profession: {profession}</h3>
            <h3 className="work-card-rating">Rating: ⭐ {rating} (1.3k reviews)</h3>
            <h3 className="work-card-experience">Experience: {experience} years</h3>
            <h3 className="work-card-location">Location: {location}</h3>
            <div className='btn-contain'>
                {showBtn && <Btn text="Hire Now" className={customClass || "btn-hire-now"} />}
                {showBtn && <Btn text="Message" className={customClass || "btn-message"} />}
            </div>
      </div>
    </div>
  )
}

export default Cards