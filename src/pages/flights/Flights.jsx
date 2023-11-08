import "./flights.css";
import Nav from "../../components/nav/Nav";
import Head from "../../components/header/Head";
import { MdOutlineLuggage } from "react-icons/md";
import { SiEtihadairways } from "react-icons/si";
import { useEffect } from "react";

const Flights = () => {
  useEffect(() => {
    console.log("useEffect Called");
  }, []);
  return (
    <div className="flight-section">
      <div className="header-section">
        <Nav />
        <Head type="list" />
      </div>
      <div className="flight-container">
        <div className="flight-details">
          <div className="airways-detail">
            <SiEtihadairways className="air-logo" />
            <span className="flight-name">Ethihad Airways</span>
          </div>
          <div className="timings">
            <span className="departure">09:10</span>
            <span className="departureDate">DEL-19 Aug</span>
          </div>
          <div className="time-travel">
            <span className="totaltime">3h 35m</span>
            {/* <hr/> */}
            <span className="isdirect">Direct</span>
          </div>
          <div className="arrival">
            <span className="arrival-time">11:15</span>
            <span className="arrivalDate">AUH -19 Aug</span>
          </div>
        </div>

        <div className="price-section">
          <MdOutlineLuggage className="luggage-icon" />
          <span className="luggage-detail">Included-cabin bag</span>
          <span className="price">INR 42,950.49</span>
          <span className="price-details">Total price for all travellers</span>
          <button className="see-flight">See flight</button>
        </div>
      </div>
    </div>
  );
};

export default Flights;