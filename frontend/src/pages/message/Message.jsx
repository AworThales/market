import { Link } from 'react-router-dom';
import './message.scss';

const Message = () => {
  return (
    <div className='message'> 
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className='link'>MESSAGES</Link> <b> > THALES SOLO > </b>
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing.
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/4371669/pexels-photo-4371669.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing.
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing.
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/4371669/pexels-photo-4371669.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing.
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing.
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/4371669/pexels-photo-4371669.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing.
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing.
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/4371669/pexels-photo-4371669.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing.
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <hr />

        <div className="write">
          <textarea name="" placeholder='Write a message...' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
