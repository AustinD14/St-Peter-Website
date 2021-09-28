import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Footer from "components/LandingPage/Footer";
import Hero from "components/Careers/Hero";
import MainFeature1 from "components/Careers/Feature1";
import MainFeature2 from "components/Careers/Feature2";
import MainFeature3 from "components/Careers/Feature3";
import MainFeature4 from "components/Careers/Feature4";
import MainFeature5 from "components/Careers/Feature5";
// import MainFeature6 from "components/Careers/Feature5";

import HeaderMainImage from "images/St-Peters-Images/luke-jones-CEFYNiM9xLk-unsplash.jpg";
import HeaderMainImage2 from "images/St-Peters-Images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg";
import HeaderMainImage3 from "images/St-Peters-Images/doctor-mako-pMsycX4AOKM-unsplash.jpg";
import HeaderMainImage4 from "images/St-Peters-Images/sixteen-miles-out-4poJWHclfFY-unsplash.jpg";
import HeaderMainImage5 from "images/St-Peters-Images/georg-arthur-pflueger-TeWwYARfcM4-unsplash.jpg";
import HeaderMainImage6 from "images/St-Peters-Images/anna-earl-6zA_-eCUtK0-unsplash.jpg";
const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <MainFeature1
        subheading={"Skilled Nurse."}
        heading="We treat our Patients like family."
        imageSrc={HeaderMainImage}
        description="A skilled nurse implements and evaluates patient care while performing nursing procedures to treat and rehabilitate patients. Assuring that the safety and physical comfort of the patient are meet."
      />
      <MainFeature2
        subheading={"Physician."}
        heading="Exceptional Hospice Service."
        imageSrc={HeaderMainImage2}
        description="Hospice doctor is the member of the hospice care team who is responsible for identifying a patient's need for end-of-life care and making a referral. This team member is also responsible for providing hospice information for families and patients, which includes describing how hospice works."
      />
      <MainFeature3
        subheading={"Hospice Aide."}
        heading="Exceptional Care to Others."
        imageSrc={HeaderMainImage3}
        description="In charge with personal care, including hair, skin, oral and nails of a patient. Helping with toileting or incontinence care. Tasks to ensure a clean and comfortable environment."
      />
      <MainFeature4
        subheading={"Chaplain."}
        heading="Reaching out to Others."
        imageSrc={HeaderMainImage4}
        description="Responsible for the delivery of pastoral care to patients, their loved ones, and, as appropriate, staff. S/he will have responsibility to ensure that religious and spiritual needs of patients and their loved ones are met in areas to which s/he is assigned."
      />
      <MainFeature5
        subheading={"Social Worker."}
        heading="Will help no matter what."
        imageSrc={HeaderMainImage5}
        description="Professionals who aim to enhance overall well-being and help meet basic and complex needs of communities and people. Social workers work with many different populations and types of people, particularly focusing on those who are vulnerable, oppressed, and living in poverty."
      />
      <MainFeature5
        subheading={"Volunteer."}
        heading="Helping others without expecting in return."
        imageSrc={HeaderMainImage6}
        description="Who work directly with patients, caregivers, and families are considered direct care volunteers. Providing transportation to patients, families, and the children of the families. Assisting in light household chores. Sitting with patients to provide companionship and a comforting presence."
        textOnLeft={false}
     />
      <Footer />
    </AnimationRevealPage>
  );
};
