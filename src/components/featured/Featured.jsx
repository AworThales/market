import "./featured.scss";
import businessman from "../../assets/businessman.jpg";
import searchicon from "../../assets/searchicon.png";


const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>Find the perfect <i>freelance </i> service for yor business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src={searchicon} alt="" />
                        <input type="text" placeholder='Try "building mobil app"' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>WordPress</button>
                    <button>Logo Design</button>
                    <button>AI Service</button>
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
