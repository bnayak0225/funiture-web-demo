import React from 'react';
import {
    Router, withRouter,
    Switch,
    Route,
} from "react-router";
import Navigation from "./Component/Navigation"
import Home from "./Component/Home";
import Product from "./Component/Product";
import './App.css';
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={customHistory}>
          <Navigation/>
          <Switch>
              <Route path="/product/:id" component={Product}/>
              <Route path="/search/:text" component={Home}/>
              <Route path="/" component={Home}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
