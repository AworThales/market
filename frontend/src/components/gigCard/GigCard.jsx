import { useQuery } from "@tanstack/react-query";
import "./gigCard.scss";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const GigCard = ({item}) => {
    /** Fetching data with react query */
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });
  console.log(data)

  return (
   <Link to={`/gig/${item._id}`} className="link">
        <div className="gigCard">
            <img src={item.coverImg} alt="" />
            <div className="info">
                {isLoading ? (
                    "Loading..."
                ) : error ? (
                    "Oops Something is wrong!"
                ) : ( 
                <div className="user">
                    <img src={data.img || "./img/noavatar.jpg"} alt="" />
                    <span>{data.username}</span>
                </div>
                )}
                <p>{item.desc}</p>
                <div className="star">
                    <img src="./img/star.png" alt="" />
                    <span>
                        {!isNaN(item.totalStars / item.starNumber) &&
                        Math.round(item.totalStars / item.starNumber)
                        }
                    </span>
                </div>
            </div>

            <hr />
            
            <div className="details">
                <img src="./img/heart.png" alt=""/>
                <div className="price">
                    <span>STARTING AT</span>
                    <h2>${item.price}</h2>
                </div>
            </div>
        </div>
   </Link>
  );
};

export default GigCard
