import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/global.css"; // reset css //
import "./css/app.css";

import { Provider } from "react-redux";
import { appStore } from "./store/store";

import Home from "./containers/Home";

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/react-workshop-indegene">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
