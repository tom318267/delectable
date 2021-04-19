import React from "react";
import { Link } from "react-router-dom";
import ribs from "../../assets/ribs.jpg";
import salmon from "../../assets/salmon.jpg";
import steak from "../../assets/steak.jpg";
import "./PopularMeals.scss";

const PopularMeals = () => {
  return (
    <div className="PopularMeals">
      <button className="popular-back">
        <Link to="/">
          <i class="fas fa-arrow-left"></i> Back
        </Link>
      </button>
      <div className="pop-meals-container">
        <h1>Popular Meals</h1>
        <img className="ribs" src={ribs} alt="" />
        <div className="horizontal-items">
          <img className="salmon" src={salmon} alt="" />
          <img className="steak" src={steak} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PopularMeals;
