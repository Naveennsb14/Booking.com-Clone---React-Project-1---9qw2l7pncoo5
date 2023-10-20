
import "../styles/App.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import {Routes, Route} from "react-router-dom"
import Stays from "./Navbar/Stays";
import Flights from "./Navbar/Flights";

function App() {

  return <div className="App">
 <Header/>


<Routes>
<Route path="/" element={<Navbar/>}>

  <Route path="/stays" element={<Stays/>} />
  <Route path="/flights" element={<Flights/>}/>
</Route>
</Routes>
  </div>
}

export default App;
