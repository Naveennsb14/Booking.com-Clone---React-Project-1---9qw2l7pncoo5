import "./flights.css";
import Nav from "../../components/nav/Nav";
import Head from "../../components/header/Head";
import { MdOutlineLuggage } from "react-icons/md";
import { SiEtihadairways } from "react-icons/si";
import { useEffect, useState } from "react";
import axios from "axios";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { MdFlightLand } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import Flightmodal from "../../components/flightmodal/Flightmodal";
import { useNavigate } from "react-router-dom";

const Flights = () => {
  const [source, setSource] = useState("BOM");
  const [arrival, setArrival] = useState("HYD");
  const [day, setDay] = useState("Sun");
  const [flightdetails, setFlightDetails] = useState([]);
  const [showflightModal, setShowFlightModal] = useState(false);
  const [seeflight, setSeeFlight] = useState(false);
  const navigate=useNavigate()
  const openflightModal = () => {
    setShowFlightModal(true);
  };

  const closeflightModal = () => {
    setShowFlightModal(false);
  };
  const handelflight = (path) => {
    // setSeeFlight(true)
    // openflightModal();
    console.log('flightpath',path);
    navigate(`/flights/${path}`)

  };

  const getFlightData = async () => {
    const config = {
      headers: {
        projectId: "9qw2l7pncoo5",
      },
    };
    try {
      const response = await axios(
        `https://academics.newtonschool.co/api/v1/bookingportals/flight?day=${day}&search={"source":"${source}","destination":"${arrival}"}`,
        config
      );
      console.log("response", response);
      setFlightDetails(response.data.data.flights);
      console.log(flightdetails);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    console.log("useEffect Called");
    getFlightData();
  }, []);

  return (
   <div className="main-container">
    <div className="flight-main-container">
     <div className="flight-section">
      <div className="header-section">
        <Nav />
        <Head type="list" />
      </div>
      <div className="headerSearch-flight">
        <div className="headerSearchItem">
          <RiFlightTakeoffFill className="headerIcon" />
          <input
            type="text"
            placeholder="Where from?"
            className="headerSearchInput"
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div className="headerSearchItem">
          <MdFlightLand className="headerIcon" />
          <input
            type="text"
            placeholder="Where to?"
            className="headerSearchInput"
            onChange={(e) => setArrival(e.target.value)}
          />
        </div>
        <div className="headerSearchItem">
          <FaCalendarDays className="headerIcon" />
          <input
            type="text"
            placeholder="Day of journey?"
            className="headerSearchInput"
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="headerSearchItem">
          <button className="searchBtn" >Search</button>
        </div>
      </div>
      {flightdetails?.map((flightdetails) => (
        <div className="flight-container" key={flightdetails._id}>
          <div className="flight-details">
            <div className="airways-detail">
              <SiEtihadairways className="air-logo" />
              <span className="flight-name">{flightdetails?.flightID}</span>
            </div>
            <div className="timings">
              <span className="departure">{flightdetails.departureTime}</span>
              <span className="departureDate">{flightdetails.source}</span>
            </div>
            <div className="time-travel">
              <span className="totaltime">{`${flightdetails.duration} hr 0 min`}</span>
              {/* <hr/> */}
              <span className="isdirect">Direct</span>
            </div>
            <div className="arrival">
              <span className="arrival-time">{flightdetails.arrivalTime}</span>
              <span className="arrivalDate">{flightdetails?.destination}</span>
            </div>
          </div>

          <div className="price-section">
            <MdOutlineLuggage className="luggage-icon" />
            <span className="luggage-detail">Included-cabin bag</span>
            <span className="price">{`INR ${flightdetails.ticketPrice}.00/-`}</span>
            <span className="price-details">
              Total price for all travellers
            </span>
            <button className="see-flight" onClick={()=>handelflight(flightdetails._id)} >See flight</button>
          </div>
        </div>
      ))}
    </div>
    <div>
      {showflightModal && <Flightmodal closeflightModal={closeflightModal}/>}
    </div>
   </div>
   </div>
  );
};

export default Flights;
