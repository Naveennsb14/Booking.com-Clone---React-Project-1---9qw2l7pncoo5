import { Link, NavLink, Outlet } from "react-router-dom"
import "../../styles/Navbar.css"

const Navbar = () => {
  return (
    <>

   <ul className='navbar'>
   <NavLink to="/stays"> <li>Stays</li></NavLink>
    <NavLink to="/flights"><li>Flights</li></NavLink>
    <NavLink><li>Car Rentals</li></NavLink>
    <NavLink><li>Attractions</li></NavLink>
    <NavLink><li>Airport-Taxies</li></NavLink>
   </ul>
   <Outlet/>
    </>
  )
}

export default Navbar
