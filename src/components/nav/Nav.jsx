import "../nav/Nav.css"

const Nav = () => {
  return (
    <div className="navbar">
     <div className="navContainer">
      <h2 className="logo">Booking.com</h2>
      <div className="navItems">
        <button className="navButton">Register</button>
        <button className="navButton">Sign in</button>
      </div>
     </div>
    </div>
  )
}

export default Nav
