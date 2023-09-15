import { Slider } from 'infinite-react-carousel/lib';
import './gig.scss';
import newRequest from '../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { Reviews } from '../../components/reviews/Reviews';


const Gig = () => {
  const {id} = useParams();
  console.log(id);
  /** Fetching gig data with react query */
  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`)
      .then((res)=>{
        return res.data;
      })
  });

  const userId = data?.userId;

  /** Fetching user data with react query */
  const { 
    isLoading: isLoadingUser,
     error: errorUser, 
     data: dataUser,
    } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest.get(`/users/${userId}`)
      .then((res)=>{
        return res.data;
      }),
      enabled: !!userId,
  });
  // console.log(dataUser)
  // console.log(!isLoading && Array (Math.round(data.totalStars / data.starNumber)).fill())

  return (
    <div className='gig'>
      { isLoading ? "Loading..." : error ? "Oops! Something is wrong!" :
       <div className="container">
        <div className="left">
          <span className="breadCrumbs">THALES {">"} GRAPHICS & DESIGN {">"}</span>
          <h1 className='gigTitle'>{data.title}</h1>
          {isLoadingUser ? (
            "Loading..."
            ) : errorUser ? (
              "Ooops! Something is wrong!"
            ) : (
            <div className="user">
              <img className={dataUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{dataUser.username}</span>
              {!isNaN(data.totalStars / data.starNumber) && (
              <div className="stars">
                {Array (Math.round(data.totalStars / data.starNumber))
                  .fill()
                  .map((item,i)=>(
                    <img src="/img/star.png" alt="" key={i}/>
                ))}
                <span className='gigstars'>{Math.round(data.totalStars / data.starNumber)}</span>
              </div>
              )}
          </div>)}
          {/* slider carousel */}
          <Slider slideToShow={1} arrowScroll={1} className="slider">
            {data.images.map((img)=>(
            <img src={img} alt="" key={img} />
            ))}
            
          </Slider>
          <h2>About This Gig</h2>
          <p className='gigDesc'>{data.desc}</p>
          {/* seller section */}
          {isLoadingUser ? (
            "Loading..."
            ) : errorUser ? (
              "Ooops! Something is wrong!"
            ) : (
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src={dataUser.img || "/img/noavatar.jpg"} alt="" />
              <div className="info">
                <span className='username'>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
            <div className="stars">
              {Array (Math.round(data.totalStars / data.starNumber))
                .fill()
                .map((item,i)=>(
                  <img src="/img/star.png" alt="" key={i}/>
              ))}
              <span className='gigstars'>
                  {Math.round(data.totalStars / data.starNumber)}
              </span>
            </div>
            )}
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">{dataUser.country}</span>
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
                {data.desc}
              </p>
            </div>
          </div>)}

          <Reviews gigId={id}/>
        </div>
        <div className="right">
          <div className="price">
            <h3 className='shortTitle'>{data.shortTitle}</h3>
            <h2>$ {data.price}</h2>
          </div>
          <p className='shortDesc'>{data.shortDesc}</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span className='deliveryTime'>{data.deliveryTime} days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span className='revisionNumber'>{data.revisionNumber} Revisions</span>
            </div>
          </div>
          <div className="features">
            {data.features.map((feature)=>(
            <div className="item" key={feature}>
              <img src="/img/greencheck.png" alt="" />
              <span>{feature}</span>
            </div>
            ))}
          </div>
          <Link to={`/payment/${id}`}>
            <button>Continue</button>
          </Link>
        </div>
      </div>
      }
    </div>
  )
}

export default Gig
