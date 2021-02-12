import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchMovie from "./components/SearchMovie";
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-2">
          <h1 className="text-center">Movie Db Search</h1>
          <SearchMovie />
        </div>
      </div>
    </div>
  );
}

export default App;
