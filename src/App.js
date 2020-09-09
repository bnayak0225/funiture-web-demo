import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./Component/Navigation"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Component/Home";
import Product from "./Component/Product";
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Product/>
    </div>
  );
}

export default App;
