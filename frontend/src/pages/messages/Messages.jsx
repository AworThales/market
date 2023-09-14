import { Link } from 'react-router-dom';
import './messages.scss';
import newRequest from "../../utils/newRequest"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";


const Messages = () => {
  const queryClient = useQueryClient();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  /** Fetching conversation data with react query */
  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`)
      .then((res)=>{
        return res.data;
      })
  });

    /** React query mutuation to update conversation */
    const mutation = useMutation({
      mutationFn: (id) => {
        return newRequest.put(`/conversations/${id}`);
      },
      onSuccess:()=>{
        queryClient.invalidateQueries(["conversations"]);
      },
    });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

console.log(data)
  return (
    <div className='messages'>
      {isLoading 
      ? ("Loading...") 
      : error 
      ? ("Ooops! Something is wrong" )
      : (
     <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
            <thead>
              <tr>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((conver) =>(
                <tr className={
                      ((currentUser.isSeller && !conver.readBySeller) ||
                        (!currentUser.isSeller && !conver.readByBuyer)) &&
                      "active"
                    } key={conver.id}>
                  <td>
                    {currentUser.isSeller ? currentUser.username : currentUser.username}
                  </td>
                  <td><Link to={`/message/${conver.id}`} className='link'>{conver?.lastMessage?.substring(0,100)}...</Link></td>
                  <td>{moment(conver.updatedAt).fromNow()}</td>
                  <td>
                  {((currentUser.isSeller && !conver.readBySeller) ||
                        (!currentUser.isSeller && !conver.readByBuyer)) && (
                        <button onClick= {()=> handleRead(conver.id)}>
                          Mark as Read
                        </button>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>)}
    </div>
  )
}

export default Messages
