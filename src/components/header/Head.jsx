import "../header/header.css";
import { LiaBedSolid } from "react-icons/lia";
import { MdOutlineFlight } from "react-icons/md";
import { BsFillCarFrontFill } from "react-icons/bs";
import { MdAttractions } from "react-icons/md";
import { MdLocalTaxi } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { DateRange } from "react-date-range";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"

const Head = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOption, setOpenOption] = useState(false)
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <LiaBedSolid className="headerListIcon" />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <MdOutlineFlight className="headerListIcon" />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <BsFillCarFrontFill className="headerListIcon" />
            <span>Car-Rentals</span>
          </div>
          <div className="headerListItem">
            <MdAttractions className="headerListIcon" />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <MdLocalTaxi className="headerListIcon" />
            <span>Airport taxies</span>
          </div>
        </div>
        <h1 className="headerTitle">Howzat for a perfect stay</h1>
        <p className="headerDesc">Search hotels, homes and much more</p>
        <button className="headerBtn">Discover more</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <LiaBedSolid className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <LuCalendarDays className="headerIcon" />
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].startDate, "dd/MM/yyyy")}`}</span>
           {openDate &&  <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />}
          </div>
          <div className="headerSearchItem">
            <AiOutlineUser className="headerIcon" />
            <span className="headerSearchText">{`${option.adult} adult - ${option.children} children - ${option.room} room`}</span>
            <div className="option">
              <div className="optionItem">

                <span className="optionText">Adult</span>
              <div className="optionCounnter">
                <button className="optionText">-</button>
                <span className="optionCounterNumber">1</span>
                <button className="optionText">+</button>
              </div>
              </div>
               <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">

                <button className="optionText">-</button>
                <span className="optionCounterNumber">0</span>
                <button className="optionText">+</button>
                </div>
              </div>
               <div className="optionItem">
                
                <span className="optionText">Rooms</span>
               <div className="optionCounter">
                <button className="optionText">-</button>
                <span className="optionCounterNumber">1</span>
                <button className="optionText">+</button>
               </div>
              </div>
            </div>
          </div>
          <div className="headerSearchItem">
            <button className="searchBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
