import { useQuery } from "@tanstack/react-query";
import "./review.scss";
import newRequest from "../../utils/newRequest";

export const Review = ({review}) => {
      /** Fetching data with react query */
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });
  console.log(data)

  return (
    <div className="review">
        <div className="item">
        {isLoading
            ? "Loading..." 
            : error 
            ? "Ooops! Something is wrong!" :
            <div className="user">
                <img className='img' src={data.img || "/img/noavatar.jpg"} alt="" />
                <div className="info">
                    <span>{data.username}</span>
                    <div className="country">
                        <span>{data.country}</span>
                    </div>
                </div>
            </div>
             }
            <div className="stars">
                {Array(review.star)
                .fill()
                .map((item,i)=>(
                    <img src="/img/star.png" alt="" key={i} />
                ))}
                <span>{review.star}</span>
            </div>
            <p>
                {review.desc}
            </p>
            <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
            </div>
        </div>
        <hr />
    </div>
  
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                    