import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/LandingPage/Footer";

import TwoColumnWithImageAndRating from "components/Reviews/TwoColumnWithImageAndRating";

import License from "components/AboutUs/License";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <TwoColumnWithImageAndRating
        subheading="Reviews"
        testimonials={[
          {
            stars: 5,
            heading: "Caring Environment",
            quote:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
            customerName: "Charlotte Hale",
            customerTitle: "Hospice Patient",
          },
          {
            stars: 5,
            heading: "Nice People",
            quote:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
            customerName: "Charlotte Rain",
            customerTitle: "Patient Caregiver",
          },
          {
            stars: 5,
            heading: "Always Available",
            quote:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
            customerName: "Charlotte Storm",
            customerTitle: "Patient's Daughter",
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
