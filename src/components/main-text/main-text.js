import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

const Content = styled.div`
 margin-top:40px;
  display: grid;
  grid-template-areas:
    "title picture"
    "text picture";
  grid-template-columns 1fr 0.3fr;
 
 @media screen and ${device.laptop} {
       grid-template-columns 1fr 0.5fr;
  }
  @media screen and ${device.tablet} {
     grid-template-columns 1fr;
     grid-template-areas:
    "title"
    "picture"
    "text";
  }
 
  div {
   grid-area: title;
   @media screen and ${device.tablet} {
     text-align:center;
  }
  }
  
   h2 {
  padding: 0;
    margin: 0;   
    font-weight: bold;
    font-size: 54px;
    line-height: 66px;
    color: #ffffff;
    display: inline;
    @media screen and ${device.laptop} {
     font-size: 32px;
     line-height:44px;
  }
  @media screen and ${device.tablet} {
     font-size: 20px;
line-height: 24px;
  }
  }

   h1 {
    display: inline;
    margin: 0;
    padding: 0 20px;
    font-weight: bold;
    font-size: 65px;
    line-height: 79px;
    letter-spacing: 0.04em;
    background: linear-gradient(180deg, #b0ffc6 0%, #00b4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and ${device.laptop} {
     font-size: 36px;
     line-height:44px;
     padding: 0 10px;
  }
  @media screen and ${device.tablet} {
     font-size: 24px;
       line-height: 24px;
        padding: 0 5px;
  }
  }
  
   p {
  grid-area: text;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  padding-top: 50px;
    margin: 0;
    @media screen and ${device.tablet} {
     font-size: 20px;
      padding-top: 40px;
  line-height: 24px;
  text-align:center;
  }
  }
  
   figure {
      padding: 0;
    margin: 0;
   grid-area: picture;
   width:100%;
   height:100%;
   
    @media screen and ${device.tablet} {
     padding-top:20px;
     width:50%;
     margin-left:25%;
  }
  }
`;

export const MainText = ({ text }) => {
  return <Content dangerouslySetInnerHTML={{ __html: text }} />;
};
