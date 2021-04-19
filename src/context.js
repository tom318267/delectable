import React, { useCallback, useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [meals, setMeals] = useState([]);

  const fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await res.json();

      const { meals } = data;
      if (meals) {
        const newMeals = meals.map((meal) => {
          const {
            idMeal,
            strMeal,
            strCategory,
            strArea,
            strInstructions,
            strMealThumb,
          } = meal;
          return {
            id: idMeal,
            name: strMeal,
            image: strMealThumb,
            category: strCategory,
            origin: strArea,
            instructions: strInstructions,
          };
        });
        setMeals(newMeals);
      } else {
        setMeals([]);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchMeals();
  }, [searchTerm, fetchMeals]);

  return (
    <AppContext.Provider value={{ loading, meals, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
