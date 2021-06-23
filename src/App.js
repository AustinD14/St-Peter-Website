import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import LandingPage from "components/LandingPage";
import AboutUs from "components/AboutUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router basename="/St-Peter-Website">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/AboutUs" component={AboutUs} />
        </Switch>
  </Router>
  )
}

export default App