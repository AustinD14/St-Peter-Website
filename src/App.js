import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import LandingPage from "components/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
  </Router>
  )
}

export default App