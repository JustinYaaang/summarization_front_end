import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SubmitPage from './submitPage';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";



const routing = (
  <Router>
    <div>
      
      <Switch>
        <Route exact path="/" component={SubmitPage} />
        <Route path="/read" component={App} />
      </Switch>
    </div>
  </Router>
);


ReactDOM.render(routing, document.getElementById("root"));

