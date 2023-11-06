import "./searchitems.css";

const Searchitems = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/501793761.webp?k=44c6a79421cea9ad1cb43e7b29b5941f4eb0a3b457986fd98f9bf014f4d8d565&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="taxiOp">Free airport Taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio - 1 bathroom - 21m 1 full bed
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="details-section">
      <div className="siDetails">
        <div className="reviewDetails">
          <div className="reviewheader">
            <h3 className="reviewtitle">Review Score</h3>
            <span className="review">42 Review</span>
          </div>
          <button className="review-btn">6.9</button>
        </div>
        <span className="comfort">Comfort 8.3</span>
      </div>
      <div className="priceSection">
        <span className="people-details">1 week 2 adults</span>
        <span className="price-details">₹ 51,000</span>
        <button className="availability-btn">See availability</button>
      </div>
      </div>
    </div>
  );
};

export default Searchitems;
