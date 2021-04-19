import React from "react";
import spinner from "../../assets/spinner.gif";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="Spinner">
      <img src={spinner} alt="loader" />
    </div>
  );
};

export default Spinner;
