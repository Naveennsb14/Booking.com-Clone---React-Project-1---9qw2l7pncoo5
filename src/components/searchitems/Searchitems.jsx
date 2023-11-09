import axios from "axios";
import "./searchitems.css";
import { useEffect, useState } from "react";
import HotelCard from "../hotelcard/HotelCard";

const Searchitems = () => {
  const token = sessionStorage.getItem("userToken");
  const [hotelData, setHotelData] = useState([]);
  const hoteldestination = sessionStorage.getItem("destination");
  const getHotelList = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        projectId: "9qw2l7pncoo5",
      },
    };
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${hoteldestination}"}`,
        config
      );
      setHotelData(response.data.data.hotels);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("calling useeffect");
    getHotelList();
  }, []);
  return (
    <>
      {hotelData.length > 0 &&
        hotelData.map((hotel) => {
          return <HotelCard details={hotel} key={hotel.rooms[0]._id} />;
        })}
    </>
  );
};

export default Searchitems;
