import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './home.scss';
import {cards} from "../../data";
import CatCard from '../../components/catCard/CatCard';
import fight from "../../assets/fight.mp4";
import check from "../../assets/check.png";

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {/* mapping my cards as the children */}
      {cards.map((card) => (
              <CatCard item={card} key={card.id} />
              ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A Whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point.
              No hourly rates just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point.
              No hourly rates just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point.
              No hourly rates just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point.
              No hourly rates just project-based pricing.
            </p>
          </div>
          <div className="item">
          <video src={fight} controls></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
