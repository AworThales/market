import { Link, useNavigate } from 'react-router-dom';
import './orders.scss';
import newRequest from '../../utils/newRequest';
import { useQuery } from "@tanstack/react-query";

const Orders = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

   /** Fetching orders data with react query */
   const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      newRequest.get("/orders")
      .then((res)=>{
        return res.data;
      })
  });

  const handleContact = async (order)=>{
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;
   
    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`)
    } catch (err) {
      if(err.response.status === 404){
        const res = await newRequest.get(`/conversations`,
          {to: currentUser.isSeller ? buyerId : sellerId }
        );
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  return (
    <div className='orders'>
      {isLoading 
      ? ("Loading...") 
      : error 
      ? ("Ooops! Something is wrong" )
      : (
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              {/* is current user a seller? then buyer otherwise seller */}
              {/* <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th> */}
              <th>Contact</th>
            </tr>
           { data.map((order)=>(
           <tr key={order.id}>
              <td>
                <img className="img" src={order.img} alt="" />
              </td>
              <td>{order.title}</td>
              <td>{order.price}</td>
              <td>
                <img onClick={()=>handleContact(order)} className="delete" src="/img/message.png" alt="" />
              </td>
            </tr>))}
        </table>
      </div>)}
    </div>
  )
}

export default Orders
