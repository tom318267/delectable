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
        <div className="rib-image-div">
          <img className="ribs" src={ribs} alt="ribs" />
          <div className="overlay">
            <h3 className="description">BBQ Ribs</h3>
          </div>
        </div>
        <div className="salmon-image-div">
          <img className="salmon" src={salmon} alt="salmon" />
          <div className="overlay">
            <h3 className="description">Salmon</h3>
          </div>
        </div>
        <div className="steak-image-div">
          <img className="steak" src={steak} alt="steak" />
          <div className="overlay">
            <h3 className="description">Filet Mignon</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMeals;
