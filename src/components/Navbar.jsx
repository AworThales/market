import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <span className='text'>Thales</span>
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
    </div>
  )
}

export default Navbar
