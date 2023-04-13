import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './home.scss';

const Home = () => {
  return (
    <div className='Home'>
      <Featured />
      <TrustedBy />
    </div>
  )
}

export default Home
