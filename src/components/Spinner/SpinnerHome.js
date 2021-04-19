import React from "react";
import spinner from "../../assets/spinner.gif";
import "./SpinnerHome.scss";

const SpinnerHome = () => {
  return (
    <div className="SpinnerHome">
      <img src={spinner} alt="loader" />
    </div>
  );
};

export default SpinnerHome;
