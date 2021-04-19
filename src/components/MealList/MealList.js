import React from "react";
import Meal from "../Meal/Meal";
import Spinner from "../Spinner/Spinner";
import { useGlobalContext } from "../../context";
import "./MealList.scss";

const MealList = () => {
  const { meals, loading } = useGlobalContext();
  if (loading) {
    return <Spinner />;
  }

  if (meals.length < 1) {
    return <h2 className="no-meal">No meals matched your search criteria</h2>;
  }
  return (
    <div className="MealList">
      <div className="meal-list-container">
        {meals.map((meal) => (
          <Meal key={meal.id} {...meal} />
        ))}
      </div>
    </div>
  );
};

export default MealList;
