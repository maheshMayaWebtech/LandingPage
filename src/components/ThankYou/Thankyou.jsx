import thankyoupage from "../../assets/Images/Thankyoupage.png";
import { Link } from "react-router-dom";
import "./Thankyou.css";

const Thankyou = () => {
  return (
    <>
      <section className="ThankYou mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="LogoThank">
                <img src={thankyoupage} alt="thankyoupage" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rightBoxThankyou">
                <h2 className="Thankyou">Thank You</h2>
                <p className="ContactSoon">
                  Our Assistance Will Contact You Soon
                </p>
                <Link to="/" className="Backmenu">
                  Go Back Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Thankyou;
