import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import FAQ from "components/FAQ/SingleCol.js";
import Footer from "components/LandingPage/Footer";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <FAQ 
      subheading = "FAQS"
      heading = "You have Questions ?"
      description = "Find it below. However, if something still isn’t clear, feel free to contact us with whatever is on your mind. We’ll be happy to assist you in any way possible."
      faqs ={ [
        {
          question: "What is a Hospice?",
          answer:
            "Hospice is a special concept of care designed to provide comfort and support patients and their families when a life-limiting illness no longer responds to cure-oriented treatment."
        },
        {
          question: "When should I make a decision on Hospice Care?",
          answer:
            "When an illness has progressed to the point that there is no cure. At this point, pain management and comfort become the goals."
        },
        {
          question: "How to Enroll in Hospice?",
          answer:
            "Most patients are referred for hospice care by their physicians. If the doctor is not ready or not willing to make a referral, the patient or caregiver always has the right to elect hospice care. (Self Referring) The hospice medical director or another physician will then evaluate whether the patient meets the eligibility guidelines."
        },
        {
          question: "Who pays for Hospice?",
          answer:
            "Hospice coverage is widely available. It is covered by Medicare, Medicaid and by most private insurance providers nationwide."
        }
      ]} />
      <Footer />
    </AnimationRevealPage>
  );
};
