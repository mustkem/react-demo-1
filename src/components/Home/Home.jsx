import React, { useState, useEffect } from "react";
import MoviesWithInfo from "./MoviesWithInfo/MoviesWithInfo";
import MoviesWithPoster from "./MoviesWithPoster/MoviesWithPoster";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  NavLink,
} from "react-router-dom";

function Home(props) {
  let { path } = useRouteMatch();

  return (
    <div className="home-content main-content">
      <div className="top-sec">
        <div className="container">
          <div className="info">Movies List</div>
        </div>
      </div>
      <div className="container container-products">
        <div className="content-sec">
          <ul className="tabs">
            <li>
              <NavLink to={`${path}/movies-info`}>Movies With Info</NavLink>
            </li>
            <li>
              <NavLink to={`${path}/movies-poster`}>Movies With Poster</NavLink>
            </li>
          </ul>
          <Switch>
            <Route path={path + "/movies-info"}>
              <MoviesWithInfo {...props} />
            </Route>
            <Route path={`${path}/movies-poster`}>
              <MoviesWithPoster {...props} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Home;
