import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"

import LandingPage from "components/LandingPage";
import AboutUs from "components/AboutUs";
import Services from "components/Services";
import Careers from "components/Careers";
import Reviews from "components/Reviews";
import FAQS from "components/FAQ";
import StaticImageLoader from "components/StaticImageLoader"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Services" component={Services} />
          <Route path="/Careers" component={Careers} />
          <Route path="/Reviews" component={Reviews} />
          <Route path="/Faqs" component={FAQS} />
          <Route path="/images/statics" component={StaticImageLoader}/>
        </Switch>
  </Router>
  )
}

export default App