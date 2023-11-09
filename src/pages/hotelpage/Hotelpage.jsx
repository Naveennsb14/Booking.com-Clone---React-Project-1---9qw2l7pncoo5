import { NavLink, useParams } from "react-router-dom";
import "./hotelpage.css";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";

const Hotelpage = () => {
  const [singleHoteldata, setSingleHotelData] = useState([]);

  const { id } = useParams();
  console.log("id", id);

  const getHotelData = async () => {
    const config = {
      headers: {
        projectId: "9qw2l7pncoo5",
      },
    };
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${id}`,
        config
      );
      console.log('rawdata',response);
      console.log("singledata", response.data.data);
      setSingleHotelData(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  const {
    images,
    amenities,
    rating,
    name,
    rooms,
  } = singleHoteldata;
  console.log("images", images);
  console.log('rooms', rooms);

  useEffect(() => {
    console.log("called useeffect");
    getHotelData();
  }, [id]);
  return (
    <>
      <div className="booking">
        <div className="booking-container">
          <NavLink to="/" className="logo">
            <h2>Booking.com</h2>
          </NavLink>
        </div>
      </div>
      <div className="hotelContainer" key={singleHoteldata._id}>
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{name}</h1>
          <div className="hotelAddress">
            <CiLocationOn className="location-icon" />
            <span className="address">{singleHoteldata.location}</span>
          </div>
          <span className="hotelDistance">{`Rating: ${rating}`}</span>
          <span className="hotelPriceHighlight">
            {`Amenities: ${amenities}`}
          </span>
          <div className="hotelImages">
            {images?.map((images) => (
              <div className="hotelImgWrapper">
                <img src={images} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur debitis eligendi sunt quidem alias asperiores sequi
              pariatur esse? Rem, commodi odio. Quod magnam voluptatibus nisi,
              similique deserunt quae? Cum, cumque recusandae vero libero
              laudantium dolore consectetur, veniam maiores sapiente quibusdam
              aut magnam, architecto nostrum accusamus explicabo. Libero
              deleniti atque aperiam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </div>
            <div className="hotelDetailsPrice">
              <h1 className="price-header">Cancellation Policy</h1>
              <span className="location">
                {`located in the ${singleHoteldata.location}, this property has an
                excellent location score of ${rating}`}
              </span>
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
