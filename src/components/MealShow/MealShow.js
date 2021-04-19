import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import SpinnerShow from "../Spinner/SpinnerShow";
import "./MealShow.scss";

const MealShow = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getMeal = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        console.log(res);
        const data = await res.json();

        if (data) {
          const {
            strMeal,
            strCategory,
            strArea,
            strInstructions,
            strMealThumb,
          } = data.meals[0];
          const newMeal = {
            name: strMeal,
            category: strCategory,
            origin: strArea,
            instructions: strInstructions,
            image: strMealThumb,
          };
          setMeal(newMeal);
        } else {
          setMeal(null);
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    getMeal();
  }, [id]);

  if (loading) {
    return <SpinnerShow />;
  }

  if (!meal) {
    return <h2>No meal to display</h2>;
  }

  const { name, category, instructions, image } = meal;
  return (
    <div className="MealShow">
      <button className="show-back">
        <Link to="/">
          <i class="fas fa-arrow-left"></i> Back
        </Link>
      </button>
      <div className="meal-div">
        <h1>{name}</h1>
        <h3>Type: {category}</h3>
        <img src={image} alt={name} />
      </div>

      <p>{instructions}</p>
    </div>
  );
};

export default MealShow;
