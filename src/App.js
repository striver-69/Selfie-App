import React from 'react';
import {BrowserRouter as Router,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.components";
import PhotosList from "./components/Photo-component"
import TakeSelfie from "./components/TakeSelfie"

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <br/>
      <Route path="/" exact component ={PhotosList}/>
      <Route path="/create" component ={TakeSelfie}/>
      </div>
    </Router>
  );
}

export default App;
