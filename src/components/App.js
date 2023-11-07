import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Hotel from "../pages/hotel/Hotel";
import Login from "../pages/authentication/login/Login";
import Signup from "../pages/authentication/signup/Signup";
import { createContext, useState } from "react";
import Flights from "../pages/flights/Flights";
import Hotelpage from "../pages/hotelpage/Hotelpage";
import { Authprovider } from "../pages/provider/Authprovider";

function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/hotels/:id" element={<Hotelpage />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
