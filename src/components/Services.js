import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";


import Features from "components/Services/Services1";
import Features2 from "components/Services/Services2";
import Footer from "components/LandingPage/Footer";

import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import Nurse from "images/St-Peters-Images/doctor-team.svg";
import House from "images/St-Peters-Images/house.svg";
import Medicine from "images/St-Peters-Images/medicine.svg";
import Heart from "images/St-Peters-Images/heart-care.svg";
import Church from "images/St-Peters-Images/church.svg";
import Checklist from "images/St-Peters-Images/checklist.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Features
        heading="Hospice Care Services."
        cards={[
          {
            imageSrc: Nurse,
            title: "Skilled Nursing Care",
          },
          {
            imageSrc: House,
            title:
              "Assistance with Activities of Daily Living Light House Work",
          },
          {
            imageSrc: Medicine,
            title: "Pain and Symptom Management",
          },
          {
            imageSrc: Heart,
            title: "Emotional and Spiritual Support",
          },
          {
            imageSrc: Church,
            title: "Bereavement and Grief Counseling",
          },
          {
            imageSrc: Checklist,
            title: "Other Services",
          },
        ]}
        linkText=""
      />
      <Features2></Features2>
      <Footer />
    </AnimationRevealPage>
  );
};
