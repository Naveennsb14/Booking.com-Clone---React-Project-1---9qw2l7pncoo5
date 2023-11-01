import { useNavigate } from "react-router-dom"
import "../nav/Nav.css"



const Nav = () => {
  const navigate=useNavigate();

  const navigateHandler = (path)=>{
    navigate(path);
  };

  return (
    <div className="navbar">
     <div className="navContainer">
      <h2 className="logo">Booking.com</h2>
      <div className="navItems">
        <button className="navButton" onClick={() => navigateHandler("/signup")}>Register</button>
        <button className="navButton" onClick={() => navigateHandler("/signin")}>Sign in</button>
      </div>
     </div>
    </div>
  )
}

export default Nav
