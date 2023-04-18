import { Slider } from 'infinite-react-carousel/lib';
import './gig.scss';


const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">THALES > GRAPHICS & DESIGN</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img className='img' src="https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>Thales Solo</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          {/* slider carousel */}
          <Slider slideToShow={1} arrowScroll={1} className="slider">
            <img src="https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <img src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <img src="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            i use an AI program to create images based on text prompts. This
            means i can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD charactr) Landscapes (E.g. team,
            business, profile picture). You can be as vague or as descriptive as
            you want. Being more vague will allow the AI to be more creative which
            can sometimes result in some amazing images. You can also be credibly 
            precise if you have a clear image of what you want in mind. All of the 
            images i can create are original and will be found nowhere else. If you
            have any questions you're more than welcome to send me a message.
          </p>
          {/* seller section */}
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src="https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="info">
                <span>Thales Solo</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Akamkpa</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">April 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">5 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Language</span>
                  <span className="desc">English</span>
                </div>
              </div>

              <hr />

              <p>
                My Name is Thales, i enjoy creating AI generated art in 
                my spare time. i have a lot of experience using the AI
                program and that means i know what to prompt the AI with
                to get a great and incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className='img' src="https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="info">
                  <span>Thales Solo</span>
                  <div className="country">
                    <img src="https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span>Nigeria</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
                  i Just want to say that art_with_ai was the first, and after
                  this, the only artist Ill be using on Thales. Communication
                  was amazing, each and every day he sent me images that i was 
                  free to request changes to. They listened, understood, and 
                  delivered above and beyond my expectations. I absolutely 
                  recommend this gig, and know already that be using it again
                  very soon.
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
            <div className="item">
              <div className="user">
                <img className='img' src="https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="info">
                  <span>Thales Awor</span>
                  <div className="country">
                    <img src="https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span>South Africa</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
                  i Just want to say that art_with_ai was the first, and after
                  this, the only artist Ill be using on Thales. Communication
                  was amazing, each and every day he sent me images that i was 
                  free to request changes to. They listened, understood, and 
                  delivered above and beyond my expectations. I absolutely 
                  recommend this gig, and know already that be using it again
                  very soon.
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

            <div className="item">
              <div className="user">
                <img className='img' src="https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="info">
                  <span>Thales Solo</span>
                  <div className="country">
                    <img src="https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span>Nigeria</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
                  i Just want to say that art_with_ai was the first, and after
                  this, the only artist Ill be using on Thales. Communication
                  was amazing, each and every day he sent me images that i was 
                  free to request changes to. They listened, understood, and 
                  delivered above and beyond my expectations. I absolutely 
                  recommend this gig, and know already that be using it again
                  very soon.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
            </div>

          </div>
        </div>
        <div className="right">
        <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <h2>About This Gig</h2>
          <p>
            i use an AI program to create images based on text prompts. This
            means i can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD charactr) Landscapes (E.g. team,
            business, profile picture). You can be as vague or as descriptive as
            you want. Being more vague will allow the AI to be more creative which
            can sometimes result in some amazing images. You can also be credibly 
            precise if you have a clear image of what you want in mind. All of the 
            images i can create are original and will be found nowhere else. If you
            have any questions you're more than welcome to send me a message.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gig
