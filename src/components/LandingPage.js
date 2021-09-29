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
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/LandingPage/Footer";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <MainFeature2 />
    <MainFeature3 />
    <MainFeature4 />
    <Services />
    <Footer /> 
  </AnimationRevealPage>
);
