import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import MealShow from "./components/MealShow/MealShow";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/meal/:id" component={MealShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
