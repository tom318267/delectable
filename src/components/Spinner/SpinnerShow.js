import React from "react";
import spinner from "../../assets/spinner.gif";
import "./SpinnerShow.scss";

const SpinnerShow = () => {
  return (
    <div className="SpinnerShow">
      <img src={spinner} alt="loader" />
    </div>
  );
};

export default SpinnerShow;
