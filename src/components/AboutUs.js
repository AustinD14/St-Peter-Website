import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/LandingPage/Footer";
import MainFeature1 from "components/AboutUs/Feature1";
import MainFeature2 from "components/AboutUs/Feature2";
import MainFeature3 from "components/AboutUs/Feature3";
import License from "components/AboutUs/License";

import Medicare from "images/St-Peters-Images/medicare.png";
import JointCommission from "images/St-Peters-Images/joint-commision.png";
import CDPH from "images/St-Peters-Images/cdph.png";

import HeaderMainImage from "images/St-Peters-Images/4c6e84_053bfc751be14154b1e3d5ef45a9cf3b_mv2.png";
import image2 from "images/St-Peters-Images/visual-stories-micheile-PpZasS086os-unsplash.jpg";
import image3 from "images/St-Peters-Images/nick-karvounis-og_p3b9bJ7E-unsplash.jpg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={"Quality of Care is what matters most."}
        heading="St. Peter's Hospice Care Inc."
        imageSrc={HeaderMainImage}
      />
      
      <MainFeature2
        subheading={<Subheading>Our Mission</Subheading>}
        heading=""
        imageSrc={image2}
        textOnLeft={false}
      />
      <MainFeature3
        subheading={<Subheading>Our Values</Subheading>}
        heading=""
        imageSrc={image3}
      />
      <License
        heading="License and Certifications"
        description="Pursuant to Title IV of the Civil Rights Act of 1964, Section 504 of the
        Rehabilitation Act of 1973 and the Discrimination Act of 1975.
        St. Peter's Hospice Care, Inc. does not discriminate in the Provision
        of Service on the basis of race, color, national origin, sex and disability of age."
        cards={[
          {
            imageSrc: Medicare,
          },
          {
            imageSrc: JointCommission,
          },
          {
            imageSrc: CDPH,
          },
        ]}
        linkText=""
      />
      <Footer />
    </AnimationRevealPage>
  );
};
