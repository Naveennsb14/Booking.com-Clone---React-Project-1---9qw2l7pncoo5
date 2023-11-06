import { NavLink } from "react-router-dom";
import "./hotelpage.css";
import {CiLocationOn} from "react-icons/ci"

const Hotelpage = () => {
    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/503999068.jpg?k=c8249b50c5bdd17f049b46d6577eae14a7bfa06c7ea39e9cbb20da5c95f4590d&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/503999068.jpg?k=c8249b50c5bdd17f049b46d6577eae14a7bfa06c7ea39e9cbb20da5c95f4590d&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/503999068.jpg?k=c8249b50c5bdd17f049b46d6577eae14a7bfa06c7ea39e9cbb20da5c95f4590d&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/503999068.jpg?k=c8249b50c5bdd17f049b46d6577eae14a7bfa06c7ea39e9cbb20da5c95f4590d&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/503999068.jpg?k=c8249b50c5bdd17f049b46d6577eae14a7bfa06c7ea39e9cbb20da5c95f4590d&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/503999068.jpg?k=c8249b50c5bdd17f049b46d6577eae14a7bfa06c7ea39e9cbb20da5c95f4590d&o=&hp=1"
        },
        
        
    ]
  return (
    <>
      <div className="booking">
        <div className="booking-container">
          <NavLink to="/" className="logo">
            <h2>Booking.com</h2>
          </NavLink>
        </div>
      </div>
      <div className="hotelContainer">
        <div className="hotelWrapper">
            <h1 className="hotelTitle">Grand Hotel</h1>
            <div className="hotelAddress">
                <CiLocationOn className="location-icon"/>
                <span className="address">Elton St 125 New York</span>
            </div>
            <span className="hotelDistance">Excellent location - 500m from center</span>
            <span className="hotelPriceHighlight">Book a Stay over $114 at this property and get a free airport taxi</span>
            <div className="hotelImages">
            {
                photos.map(photo=>(
                    <div className="hotelImgWrapper">
                        <img src={photo.src} alt="" className="hotelImg" />
                    </div>
                ))
            }

            </div>
            <div className="hotelDetails">
                <div className="hotelDetailTexts">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur debitis eligendi sunt quidem alias asperiores sequi pariatur esse? Rem, commodi odio. Quod magnam voluptatibus nisi, similique deserunt quae? Cum, cumque recusandae vero libero laudantium dolore consectetur, veniam maiores sapiente quibusdam aut magnam, architecto nostrum accusamus explicabo. Libero deleniti atque aperiam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </div>
                <div className="hotelDetailsPrice">
                    <h1 className="price-header">Perfect for 9-night stay!</h1>
                    <span className="location">located in the real heart of krakow, this property has an excellent location score of 9.8!</span>
                    <h2 className="price-details">
                        <b>$945</b>(9 nights)
                    </h2>
                    <button className="reserve">Reserve</button>

                </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Hotelpage;
