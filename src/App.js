import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArchidaxDashboard from "./pages/ArchidaxDashboard";
import Header from "./components/archidaxDashboard/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <ArchidaxDashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
