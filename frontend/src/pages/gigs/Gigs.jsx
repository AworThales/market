import { useEffect, useRef, useState } from 'react';
import './gigs.scss';
import GigCard from '../../components/gigCard/GigCard';
import {gigs} from "../../data";
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useLocation } from 'react-router-dom';


const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();
  const { search } = useLocation();
  console.log(search)

  /** Fetching data with react query */
  const { isLoading, error, refetch, data } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`)
      .then((res)=>{
        return res.data;
      })
  });
  console.log(data)


  /** resorting by type */
  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  /** Refetching sort again in its changes */
  useEffect(()=>{
    refetch();
  },[sort]);

  /** Refetching min and max search */
  const apply = () => {
   refetch();
  };

  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">THALES > GRAPHICS & DESIGN > </span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Thales's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="text" placeholder='min' />
            <input ref={maxRef} type="text" placeholder='max' />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            {/* giving a condition to check if down arrow icon is click it use reverse to opposite of open useState. */}
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {/* if the open useState exists the display the rightmenu class */}
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "Loading..." 
            : error 
            ? "OOPS.. Something is wrong!"
            : data.map((gig) => (<GigCard item={gig} key={gig._id} />
          ))}
        
        </div>
      </div>
    </div>
  )
}

export default Gigs
