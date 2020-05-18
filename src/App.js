import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/dashboardComponents/Header";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/news">
          <News />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
