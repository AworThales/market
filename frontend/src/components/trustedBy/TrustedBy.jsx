import "./trustedBy.scss";
import netflix from "../../assets/netflix.png";
import paypal from "../../assets/paypal.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import pg from "../../assets/pg.png";


const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
      <span>Trusted by:</span>
      <img src={netflix} alt="" />
      <img src={paypal} alt="" />
      <img src={google} alt="" />
      <img src={facebook} alt="" />
      <img src={pg} alt="" />
      </div>
    </div>
  )
}

export default TrustedBy
