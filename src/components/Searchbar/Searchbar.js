import React from "react";
import { useGlobalContext } from "../../context";
import "./Searchbar.scss";

const Searchbar = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchRecipe = (e) => {
    setSearchTerm(searchValue.current.value);
    console.log(searchValue);
  };
  return (
    <div className="Searchbar">
      <input
        onChange={searchRecipe}
        type="text"
        placeholder="e.g. Chicken Parmesan"
        ref={searchValue}
      />
    </div>
  );
};

export default Searchbar;
