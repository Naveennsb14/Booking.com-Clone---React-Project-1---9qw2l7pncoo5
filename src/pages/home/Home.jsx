import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Head from "../../components/header/Head";
import Nav from "../../components/nav/Nav";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <Head />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="featuredTitle">Home guest love</h1>
        <FeaturedProperties/>
      </div>
    </div>
  );
};

export default Home;
