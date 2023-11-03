import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Hotel from "../pages/hotel/Hotel";
import Login from "../pages/authentication/login/Login";
import Signup from "../pages/authentication/signup/Signup";
import { createContext, useState } from "react";

export const AuthContext = createContext();

function App() {
  let isUserloggedin;
  let token = sessionStorage.getItem("userToken");
  if (token) {
    isUserloggedin=true
  }
  else{
    isUserloggedin=false
  }
  const [isloggedin, setIsLoggedin] = useState(isUserloggedin);
  return (
    <AuthContext.Provider value={{ isloggedin, setIsLoggedin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
