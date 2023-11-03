import "./hotel.css";
import Nav from "../../components/nav/Nav";
import Head from "../../components/header/Head";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";

const Hotel = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);
  return (
    <div>
      <Nav />
      <Head type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search By:</h1>
            <div className="lsItem">
              <label>Destination/Property name:</label>
              <input
                className="destination"
                type="text"
                placeholder={destination}
              ></input>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )}`}</span>
            </div>
            <div className="lsItem">
              <span className="option-details">{`${option.adult} adult - ${option.children} children - ${option.room} room`}</span>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
