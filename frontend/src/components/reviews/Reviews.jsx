import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Review } from "../review/Review";
import "./reviews.scss";
import newRequest from "../../utils/newRequest";

export const Reviews = ({gigId}) => {
  const queryClient = useQueryClient();

    /** Fetching reviews data with react query */
    const { isLoading, error, data } = useQuery({
      queryKey: ["reviews"],
      queryFn: () =>
        newRequest.get(`/reviews/${gigId}`)
        .then((res) => {
          return res.data;
        }),
    });

  /** React query mutuation */
  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["reviews"])
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };

  return (
    <div className="reviews">
        <h2>Reviews</h2>
        {isLoading 
        ? "Loading..." 
        : error 
        ? "Oops! Something is wrong" 
        : data.map((review)=>(
        <Review review={review} key={review._id}/>
        ))}

      <div className="add">
        <h3>Add a review</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="write your opinion" />
          <select name="" id="">
            <option value={""}>Give a star</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  
  )
}