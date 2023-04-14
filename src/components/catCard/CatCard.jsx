import { Link } from "react-router-dom";
import "./catCard.scss";

const CatCard = (item) => {
  return (
    <Link to="/gigs?cat=design">
        <div className="catCard">
            <img src={item.img} alt="" />
            <span className="desc">{item.desc}Description Here</span>
            <span className="title">{item.title}Title Here</span>
        </div>
    </Link>
  )
}

export default CatCard
