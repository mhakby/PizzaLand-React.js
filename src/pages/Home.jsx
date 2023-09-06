import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/banner.jpg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Speacial Mix</h1>
        <p>
          Delicious Pizzas <br />{" "}
          <span style={{ color: "yellow" }}>with 12 spicy mixed</span>
        </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
