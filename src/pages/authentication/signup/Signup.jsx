import { useContext, useRef } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../components/App";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const { setIsLoggedin } = useContext(AuthContext);

  const createUser = async (user) => {
    const config = {
      headers: {
        projectId: "9qw2l7pncoo5",
      },
    };
    try {
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/bookingportals/signup",
        { ...user, appType: "bookingportals" },
        config
      );
      console.log(res);
      const token = res.data.token;
      if (token) {
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem("userName", JSON.stringify(res.data.data.user.name));
        setIsLoggedin(true);

        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    createUser(userDetails);
  };
  return (
    <>
      <div className="booking">
        <div className="booking-container">
          <h3>Booking.com</h3>
        </div>
      </div>
      <h2 className="signup-text">Signup or continue to login</h2>
      <div className="signup-container">
        <form action="" className="signupForm" onSubmit={handelFormSubmit}>
          <div className="signup-Details">
            <label htmlFor="name">Name</label>
            <input
              className="name-input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              ref={nameRef}
            />
            <br />
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
            <input className="signup-btn" type="submit" value="Signup" />
            <br />
            <span className="span-text">Already a user?</span>
            <br />
            <input
              className="login-btn"
              type="submit"
              value="continue to login"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
