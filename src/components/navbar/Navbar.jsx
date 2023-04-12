import { Link } from 'react-router-dom';
import './navbar.scss';
import { useEffect, useState } from 'react';
import users from "../../assets/users.jpg";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

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
  isSeller: true
}

  return (
    // checking if the active useState is on the show the navbar active class otherwise just show the navbar class 
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
          {/* is not current user seller dont show this link */}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {/* current user dont have to see this button */}
          {!currentUser && <button>Join</button> }
          {currentUser && (
            <div className="user">
              {/* setting condition if it true is going to be false and if is false is going to be true(opposite) */}
              <img src={users} alt="user" onClick={() => setOpen(!open)} />
              <span>{currentUser?.username}</span>
              {open && //condition to check if open state is active the toggle the option

                <div className="option">
                {
                  // if current user is a seller show this option.
                  currentUser?.isSeller && (
                    <>
                    <span>Gigs</span>
                    <span>Add new Gig</span>
                    </>
                  )}
                <span>Orders</span>
                <span>Messages</span>
                <span>Logout</span>
              </div>}
            </div>
          )}
          
        </div>
      </div>
      {/* if the there is active from useState then that is when hr and this menu has to show */}
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
