import "./featured.scss";
import businessman from "../../assets/businessman.jpg";
import searchicon from "../../assets/searchicon.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Featured = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    // enable search gig
    const handleSubmit = () => {
        navigate(`/gigs?search=${input}`);
    }
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>Find the perfect <i>freelance </i> service for yor business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src={searchicon} alt="" />
                        <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Try "building mobil app"' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>WordPress</button>
                    <button>Logo Design</button>
                    <button onClick={handleSubmit}>AI Service</button>
                </div>
            </div>
            <div className="right">
                <img src={businessman} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Featured