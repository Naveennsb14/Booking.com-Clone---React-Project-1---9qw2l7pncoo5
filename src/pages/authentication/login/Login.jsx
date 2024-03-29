import { useRef, useState } from "react";
import "./login.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../provider/Authprovider";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const { setIsLoggedin } = useAuth();
  const {state}=useLocation()
  const [handelerror, setHandelError]=useState();

  const loginUser = async (user) => {
    const config = {
      headers: {
        projectId: "9qw2l7pncoo5",
      },
    };
    try {
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/bookingportals/login",
        { ...user, appType: "bookingportals" },
        config
      );
      console.log(res);
      const token = res.data.token;
      if (token) {
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem("userName", JSON.stringify(res.data.data.name));
        setIsLoggedin(true);
        if(state){
          navigate(state.prevPath);
        }else{
          navigate('/')
        }

        
      }
    } catch (error) {
      console.log("error", error.response.data.message);
      setHandelError(error.response.data.message)
    }
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    loginUser(userDetails);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="booking">
        <div className="booking-container">
          <NavLink to="/" className="logo">
            <h2>Booking.com</h2>
          </NavLink>
        </div>
      </div>
      <h2 className="signin-text">Sign in or create an account</h2>
      <div className="sigin-container">
        <form action="" className="signinForm" onSubmit={handelFormSubmit}>
          <div className="loginDetails">
            <label htmlFor="email">Email address</label>
            <input
              className="email-input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              ref={emailRef}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              className="pass-input"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              ref={passwordRef}
            />
            <br />
            <input className="login-btn" type="submit" value="Login" />
            <br />
            <span className="span-text">Not a user? create account</span>
            <br />
            <input
              className="signup-btn"
              type="submit"
              value="create account"
              onClick={() => handleNavigate("/signup")}
            />
          </div>
        </form>
      </div>
      {handelerror && <div className="booking__signinErrorcontainer"><span className="booking_signinerror">{handelerror}</span></div>}
    </>
  );
};

export default Login;
