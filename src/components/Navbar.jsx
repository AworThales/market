import { Link } from 'react-router-dom';
import './navbar.scss';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

useEffect (()=>{
  window.addEventListener("scroll", isActive);

  return () => {
    window.removeEventListener("scroll", isActive);
  };
}, []);

const currentUser = {
  id: 1,
  username: "Thales Solo",
  isSeller: true;
}

  return (
    <div className={active ? "navbar active" : "navbar"}>
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
        {active && (
          <>
          <hr />
        <div className="menu">
          <span>Test</span>
          <span>Test2</span>
        </div>
          </>
        )
        }
    </div>
  )
}

export default Navbar
