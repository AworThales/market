import { Link } from "react-router-dom";
import "./myGigs.scss";
import currentUser from "../../utils/getCurrentUser"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const MyGigs = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?${currentUser.id}`)
      .then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = async (id)=>{
    mutation.mutate(id);
  };
  
  return (
    <div className="myGigs">
    {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          {currentUser.isSeller && (
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
          )}
        </div>
        <table>
          <tbody>
            <tr>
              <td>Image</td>
              <td>Title</td>
              <td>Price</td>
              <td>Sales</td>
              <td>Action</td>
            </tr>
          </tbody>
          <tfoot>
          {data.map((gig)=>(
            <tr key={gig._id}>
              <td>
                <img className="img" src={gig.coverImg} alt="" />
              </td>
              <td>{gig.title}</td>
              <td>{gig.price}</td>
              <td>{gig.sales}</td>
              <td>
                <img onClick={()=>handleDelete(gig._id)} className="delete" src="/img/delete.png" alt="" />
              </td>
          </tr>))}
          </tfoot>
        </table>
      </div> )}
      
    </div>
  )
}

export default MyGigs
