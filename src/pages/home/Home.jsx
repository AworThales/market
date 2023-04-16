import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './home.scss';
import {cards, projects} from "../../data";
import CatCard from '../../components/catCard/CatCard';
import man from "../../assets/man.jpg";
import fight from "../../assets/fight.mp4";
import check from "../../assets/check.png";
import ProjectCard from '../../components/projectCard/ProjectCard';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      {/* slider */}
      <Slide slidesToShow={4} arrowsScroll={4}>
        {/* mapping my cards as the children */}
      {cards.map((card) => (
              <CatCard item={card} key={card.id} />
              ))}
      </Slide>

      {/* Feature component starts */}
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
      {/* Feature component ended */}

      {/* features dark starts */}
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Thales Business</h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgade to a curated experience packed with tools and benefits, dedicated to businesses</p>
            <div className="title">
              <img src={check} alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src={check} alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src={check} alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Thales Business</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
          </div>
        </div>
      </div>
      {/* features dark ends */}

      {/* slider */}
      <Slide slidesToShow={3} arrowsScroll={3}>
        {/* mapping my projectcards as the children */}
      {projects.map((project) => (
              <ProjectCard item={project} key={project.id} />
              ))}
      </Slide>
    </div>
  )
}

export default Home
