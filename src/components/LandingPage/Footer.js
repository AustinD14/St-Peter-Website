import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/stpeterslogo.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;
const SocialLinksContainer = tw.div`mt-10`;

const FiveColumns = tw.div`flex flex-wrap justify-between`;
const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;
const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <Row>
            <LogoContainer>
              {/* <LogoImg src={logo} /> */}
              <LogoText>St. Peter's Hospice Care</LogoText>
            </LogoContainer>
            16501 Sherman Way, Suite 215. Van Nuys, CA 91406
            <LinksContainer>
              <Link href="#">Home</Link>
              <Link href="#">Services</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Contact Us</Link>
              <Link href="#">About</Link>
              <Link href="#">Refer a Patient</Link>
            </LinksContainer>
            <SocialLinksContainer>
              <SocialLink href="https://facebook.com">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://twitter.com">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://youtube.com">
                <YoutubeIcon />
              </SocialLink>
            </SocialLinksContainer>
            <CopyrightText>
              &copy; Copyright 2021, St. Peter's Hospice Care Inc. All Rights
              Reserved.
            </CopyrightText>
          </Row>
          <Row>
            <CompanyAddress>
              <LogoText>Phone</LogoText>
              (818) 394-9535
              <LogoText>Fax</LogoText>
              (818) 285-8104
              <LogoText>After Hours Fax:</LogoText>
              (818) 479-0472
              <LogoText>Email: </LogoText>
              stpetershospicecareinc@gmail.com
            </CompanyAddress>
          </Row>
        </FiveColumns>
      </Content>
    </Container>
  );
};
