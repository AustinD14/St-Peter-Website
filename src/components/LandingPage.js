import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/LandingPage/Hero";
import Services from "components/LandingPage/Services";
import MainFeature from "components/LandingPage/Feature1";
import MainFeature2 from "components/LandingPage/Feature2";
import MainFeature3 from "components/LandingPage/Feature3";
import MainFeature4 from "components/LandingPage/Feature4";
import Footer from "components/LandingPage/Footer";

export default () => (
  <AnimationRevealPage>
    <Hero primaryButtonUrl="/Reviews"/>
    <MainFeature primaryButtonUrl="/AboutUs" />
    <MainFeature2 primaryButtonUrl="/AboutUs" />
    <MainFeature3 primaryButtonUrl="/AboutUs"/>
    <MainFeature4 primaryButtonUrl="/AboutUs"/>
    {/* <Services /> */}
    <Footer />
  </AnimationRevealPage>
);
