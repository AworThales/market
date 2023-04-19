import { Link } from 'react-router-dom';
import './messages.scss';

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Thales Solo",
    isSeller: true
  }

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `

  return (
    <div className='messages'>
     <div className="container">
      <div className="title">
          <h1>Messages</h1>
        </div>
      <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>
              Thales Solo
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className='active'>
            <td>
              Thales Solo
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>
              Thales Solo
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>
              Thales Solo
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>
              Thales Solo
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>
              Thales Solo
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages
