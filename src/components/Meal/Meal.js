import React from "react";
import { Link } from "react-router-dom";
import "./Meal.scss";

const Meal = ({ id, name, image, instructions, origin, category }) => {
  console.log(name);
  return (
    <div className="Meal">
      <div className="card border-0">
        <img src={image} className="card-img-top" alt="meal" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Type: {category}</p>
          <Link to={`/meal/${id}`} className="btn btn-primary">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Meal;
