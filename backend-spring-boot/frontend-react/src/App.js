import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      
      <Route exact path="/" component={Profile}></Route>

    </Switch>
    </>
    
  );
}

export default App;
