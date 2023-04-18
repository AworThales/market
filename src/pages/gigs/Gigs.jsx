import { useState } from 'react';
import './gigs.scss';
import GigCard from '../../components/gigCard/GigCard';
import {gigs} from "../../data";


const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">THALES > GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Thales's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            {/* giving a condition to check if down arrow icon is click it use reverse to opposite of open useState. */}
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {/* if the open useState exists the display the rightmenu class */}
            {open && (<div className="rightMenu">
              {sort === "sales" ? (<span onClick={() =>reSort("createsAt")}>Newest</span> 
              ) : ( 
              <span onClick={() =>reSort("sales")}>Best Selling</span>
              )}
             </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard item={gig} key={gig.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs
