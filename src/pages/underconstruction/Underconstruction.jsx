import Head from "../../components/header/Head";
import Nav from "../../components/nav/Nav";
import "./underconstruction.css";

const Underconstruction = () => {
  return (
    <>
    <Nav/>
    <Head type="list"/>
      <div className="booking__underconstructionContainer">
        <img
          src="https://bharipbahujanmahasanghaurangabad.files.wordpress.com/2018/11/website-under-construction-gif-8.gif?w=300"
          alt=""
          className="booking__underconstructionImage"
        />
      </div>
    </>
  );
};

export default Underconstruction;