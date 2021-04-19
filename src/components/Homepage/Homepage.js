import React from "react";
import food from "../../assets/food.png";
import MealList from "../MealList/MealList";
import Searchbar from "../Searchbar/Searchbar";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="header">
        <div className="title-img-container animate__animated animate__lightSpeedInLeft">
          <h1 className="title">
            <span>
              <img className="foodImg" src={food} alt="food" />
            </span>
            Delectable!
          </h1>
        </div>

        <h3 className="sub-head">Your go-to for your favorite meals!</h3>
      </div>
      <Searchbar />
      <MealList />
    </div>
  );
};

export default Homepage;
