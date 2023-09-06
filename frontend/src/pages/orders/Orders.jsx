import { Link } from 'react-router-dom';
import './orders.scss';

const Orders = () => {

  const currentUser = {
    id: 1,
    username: "Thales Solo",
    isSeller: true
  }

  return (
    <div className='orders'>
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
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>100</td>
            <td>150</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>100</td>
            <td>150</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>100</td>
            <td>150</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>100</td>
            <td>150</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="img" src="https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>100</td>
            <td>150</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders
