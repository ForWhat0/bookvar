import styled from "styled-components";
import { device } from "../deviceSizes/deviceSizes";
import {buttonText} from "../../Lsi/lsi";

const Content = styled.div`
 margin-top:40px;
  display: grid;
  grid-template-areas:
    "title picture"
    "text picture";
  grid-template-columns 1fr 0.5fr;
  text-align:${(props) => props.textAlign};

 @media screen and (max-width:1800px) {
       grid-template-columns 1fr 0.3fr;
  }
 
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
       align-items: flex-end;
   @media screen and ${device.tablet} {
     text-align:center;
  }
  }
  
  h2,h1 {
  align-self: flex-end;
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
   position:relative;
      padding: 0;
    margin: 0;
   grid-area: picture;
   width:50%;
   height:50%;
   
    @media screen and (max-width:2000px) {
        width:100%;
   height:100%;
  }
   
    @media screen and ${device.tablet} {
     padding-top:20px;
     width:50%;
     margin-left:25%;
  }

  }
  figure img {
    @media screen and (max-width:1800px) {
   position: ${(props) => props.position};
  width: ${(props) => props.width}!important;
  max-width:unset;
  left:0;
  top:-20%;
  }
   @media screen and ${device.tablet} {
       top:-20%;
        position:initial;
  width:100%!important;
  max-width:100%!important;
  left:unset;
  top:unset;
  }
  }
`;

const ButtonContainer = styled.div`
 display: grid;
  margin-top:80px;
  grid-template-columns 1fr 0.5fr;
  
   @media screen and (max-width:1800px) {
       grid-template-columns 1fr 0.3fr;
  }
 
 @media screen and ${device.laptop} {
       grid-template-columns 1fr 0.5fr;
  }
  @media screen and ${device.tablet} {
     grid-template-columns 1fr;
      margin-top:30px;
  }
  
  button {
  cursor:pointer;
  padding:16px 30px;
  border:none;
 font-weight: 500;
font-size: 20px;
line-height: 24px;
text-align: center;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background: radial-gradient(233.93% 3285.08% at 52.55% 50%, #0367A9 0%, #2AF6FF 100%);
box-shadow: 0px 0px 10px 4px #02E2E4, 0px 0px 15px #00FFFF;
border-radius: 20px;
width: fit-content;
justify-self: ${(props) => props.textAlign};
transition:all 0.1s ease-in-out;

@media screen and ${device.tablet} {
   justify-self: center;
   font-size: 16px;
line-height: 20px;
  padding:15px 20px;
  }
  
  @media screen and ${device.tablet} {
    font-size: 14px;
line-height: 17px;
  }

&:hover {
transform:scale(1.1)
}

}
  
`;

const { learnMore } = buttonText

export const MainText = ({ text, textCenter, locale }) => {
  const textAlign = textCenter ? "center" : "left";
  const position = textCenter ? "absolute" : "initial";
  const width = textCenter ? "500px" : "100%";
  return (
    <>
      <Content
        textAlign={textAlign}
        position={position}
        width={width}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <ButtonContainer  textAlign={textAlign}>
        <button>
          <span>{learnMore[locale]}</span>
        </button>
      </ButtonContainer>
    </>
  );
};
