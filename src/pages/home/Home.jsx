import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './home.scss';
import {cards} from "../../data";
import CatCard from '../../components/catCard/CatCard';

const Home = () => {
  return (
    <div className='Home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {/* mapping my cards as the children */}
      {cards.map((card) => (
              <CatCard item={card} key={card.id} />
              ))}
      </Slide>
    </div>
  )
}

export default Home
