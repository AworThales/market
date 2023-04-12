import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
         {/* <Link to="/"> */}
         <span className='text'>Thales</span>
         {/* </Link> */}
          <span className='dot'>.</span>
        </div>
        <div className="links">
          <span>Thales Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
        <hr />
        <div className="menu">
          <span>Test</span>
          <span>Test2</span>
        </div>
    </div>
  )
}

export default Navbar
