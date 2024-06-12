import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/Github.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";

const FooterContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.cardLight};
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%;
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 760px) {
    gap: 10px;
  }
`;

const LinkIcon = styled.a`
  &:hover {
    transform: scale(1.2);
    transition: all 0.4s ease-in-out;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
  }
`;

const Logo = styled.img`
  object-fit: cover;
  height: 3rem;
  width: 3rem;
  margin: 0 1rem;
  @media (max-width: 760px) {
    margin: 0;
    height: 2rem;
    width: 2rem;
  }
`;

const CopyRight = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
  font-weight: 300;
  font-size: medium;
  margin:10px;

  @media (max-width:760px) {
    font-size: small;
  }
`;

const OthersContainer = styled.div`

  width: 100%;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  margin-top: 20px;
  margin-bottom:20px;
`;

const Help = styled.div`
  width: 100%;
  height:100%;
`;

const HelpTitle = styled.div`
  font-size:20px;
  font-weight: 600;
  padding: 10px;
  
`;

const HelpLinks =styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  gap:10px;
`;

const HelpLink =styled(Link)`
  font-size:15px;
  font-weight:400;
  text-decoration: none;
  color: ${({theme})=> theme.text +80};
  &:hover{
    transform: scale(1.2);
    color: ${({theme})=> theme.text};
  }
`;

const AboutTitle = styled.div`
  font-size:20px;
  font-weight: 600;
  padding:10px;
`;

const About = styled.div`
  width: 100%;
  height:100%;
`;

const AboutLinks = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column
`;

const AboutLink = styled(Link)`
  font-size:15px;
  font-weight:400;
  text-decoration: none;
  color: ${({theme})=> theme.text +80};

  &:hover{
    transform: scale(1.2);
    color: ${({theme})=> theme.text};
  }
`;

const CopyrightContainer = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-top: 20px;
`;

const Others = styled.div`
 width: 100%;
 height: 100%;
 display:flex;
 text-align:center;
`;

const OthersLinks = styled.div`
  height:100%;
  width:100%;
  gap: 10px;
`;

const OtherLink = styled(Link)`
  font-size:10px;
  font-weight:400;
  text-decoration: none;
  color: ${({theme})=> theme.text +80};
  &:hover{
    transform: scale(1.1);
    color: ${({theme})=> theme.text};
  }
`;


const Footer = () => {
  return (
    <FooterContainer id='footer'>
      <LinkContainer>
        <LinkIcon
          href="https://www.linkedin.com/in/kshitiz-magar-7830a22a7/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Logo src={linkedin} alt="LinkedIn" />
        </LinkIcon>
        <LinkIcon
          href="https://github.com/KshitizRajan7"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Logo src={github} alt="Github" />
        </LinkIcon>
        <LinkIcon
          href="https://www.facebook.com/profile.php?id=61550560747070"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Logo src={facebook} alt="Facebook" />
        </LinkIcon>
        <LinkIcon
          href="https://www.instagram.com/kshitizrajanrides/?next=%2F"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Logo src={instagram} alt="Youtube" />
        </LinkIcon>
        <LinkIcon
          href="https://www.youtube.com/channel/UCi42rXzU7zNWJxzmlKsPeng"
          target="_blank"
          rel="noreferrer"
        >
          <Logo src={youtube} alt="Tiktok" />
        </LinkIcon>
      </LinkContainer>
      <OthersContainer>
        <Help>
          <HelpTitle>Help</HelpTitle>
          <HelpLinks>
          <HelpLink>Contact us</HelpLink>
          <HelpLink>FAQ</HelpLink>
          <HelpLink>Accessibility</HelpLink>
          </HelpLinks>  
        </Help>
        <About>
          <AboutTitle>About</AboutTitle>
          <AboutLinks>
            <AboutLink>Our Story</AboutLink>
            <AboutLink>Careers</AboutLink>
          </AboutLinks>
        </About>
      </OthersContainer>
      <CopyrightContainer>
      <CopyRight>
        Copyright &#169; 2024 Kshitiz Rajan. All right recieved.
      </CopyRight>
      <Others>
       <OthersLinks>
        <OtherLink>Terms of Services</OtherLink>
        <OtherLink>Privacy Policy</OtherLink>
        <OtherLink>Do Not Sell My Information</OtherLink>
       </OthersLinks>
       </Others>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
